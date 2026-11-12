const collegesData = require('../data/collegesData');

const STOP_WORDS = new Set([
  'tell', 'me', 'about', 'what', 'is', 'are', 'the', 'details', 'of', 'in', 'for',
  'and', 'or', 'a', 'an', 'to', 'give', 'show', 'list', 'college', 'colleges', 'info',
  'information', 'please', 'can', 'you', 'know'
]);

/**
 * Searches the college dataset with high precision
 */
function searchColleges(query) {
  if (!query || typeof query !== 'string') return [];
  const q = query.toLowerCase().trim();

  // 1. Exact or near-exact match on code, shortName, or name
  const exactMatches = collegesData.filter(col => {
    const colName = col.name.toLowerCase();
    const shortName = (col.shortName || '').toLowerCase();
    const code = (col.code || '').toLowerCase();
    const id = col.id.toLowerCase();

    if (code && q.includes(code)) return true;
    if (shortName && (q.includes(shortName) || shortName.includes(q))) return true;
    if (colName && (q.includes(colName) || colName.includes(q))) return true;
    if (id && q.includes(id)) return true;
    return false;
  });

  if (exactMatches.length > 0) {
    // Sort exact matches by closest length
    return exactMatches.sort((a, b) => {
      const aName = a.shortName || a.name;
      const bName = b.shortName || b.name;
      return aName.length - bName.length;
    });
  }

  // 2. Acronym / Alias checks
  const aliasMap = {
    'ceg': 'ceg-anna-univ',
    'guindy': 'ceg-anna-univ',
    'mit': 'mit-anna-univ',
    'chromepet': 'mit-anna-univ',
    'ac tech': 'actech-anna-univ',
    'psg': 'psg-tech',
    'psg tech': 'psg-tech',
    'cit': 'cit-coimbatore',
    'cit coimbatore': 'cit-coimbatore',
    'cit chennai': 'cit-chennai',
    'gct': 'gct-coimbatore',
    'tce': 'tce-madurai',
    'thiagarajar': 'tce-madurai',
    'ssn': 'ssn-chennai',
    'kct': 'kct-coimbatore',
    'kumaraguru': 'kct-coimbatore',
    'skcet': 'skcet-coimbatore',
    'krishna': 'skcet-coimbatore',
    'kongu': 'kongu-engg',
    'kec': 'kongu-engg',
    'bannari': 'bannari-amman',
    'bit': 'bannari-amman',
    'rec': 'rec-chennai',
    'rajalakshmi': 'rec-chennai',
    'svce': 'svce-chennai',
    'venkateswara': 'svce-chennai',
    'iitm': 'iit-madras',
    'iit madras': 'iit-madras',
    'iit': 'iit-madras',
    'nitt': 'nit-trichy',
    'nit trichy': 'nit-trichy',
    'nit': 'nit-trichy',
    'vit': 'vit-vellore',
    'vellore institute': 'vit-vellore',
    'amrita': 'amrita-coimbatore',
    'srm': 'srm-ist-chennai',
    'sastra': 'sastra-thanjavur',
    'loyola': 'loyola-chennai',
    'mcc': 'mcc-chennai',
    'psg cas': 'psg-cas-coimbatore',
    'psg arts': 'psg-cas-coimbatore',
    'presidency': 'presidency-chennai'
  };

  for (const [alias, targetId] of Object.entries(aliasMap)) {
    const aliasRegex = new RegExp(`\\b${alias}\\b`, 'i');
    if (aliasRegex.test(q)) {
      const found = collegesData.find(c => c.id === targetId);
      if (found) return [found];
    }
  }

  // 3. Keyword / Token match without stop words
  const tokens = q
    .split(/[\s,?.!]+/)
    .map(t => t.trim().toLowerCase())
    .filter(t => t.length > 2 && !STOP_WORDS.has(t));

  if (!tokens.length) return [];

  const scored = [];
  collegesData.forEach(col => {
    const searchable = [
      col.code,
      col.name,
      col.shortName,
      col.district,
      col.city,
      col.type,
      col.category,
      col.affiliation,
      ...(col.topCourses || [])
    ].join(' ').toLowerCase();

    let score = 0;
    tokens.forEach(tok => {
      if (searchable.includes(tok)) score++;
    });

    if (score > 0) {
      scored.push({ col, score });
    }
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .map(s => s.col);
}

/**
 * Formats a single college into a clean markdown card for the AI response
 */
function formatCollegeCard(col) {
  const codeBadge = col.code ? `**[TNEA Code: ${col.code}]**` : '';
  const nirf = col.nirfRank ? `🎖️ **NIRF / Recognition:** ${col.nirfRank}` : '';
  const naac = col.naacGrade ? `⭐ **NAAC Grade:** ${col.naacGrade}` : '';
  const cutoff = col.tneaCutoff ? `📊 **Cut-off Trends:** ${col.tneaCutoff}` : '';
  const courses = (col.topCourses || []).map(c => `  - ${c}`).join('\n');
  const pkg = col.placementHighlights
    ? `💼 **Placements:** Average: **${col.placementHighlights.averagePackage}** | Highest: **${col.placementHighlights.highestPackage}**\n🏆 **Top Recruiters:** ${(col.placementHighlights.topRecruiters || []).join(', ')}`
    : '';
  const fac = (col.facilities || []).slice(0, 4).join(', ');

  return `
### 🏛️ ${col.name} ${codeBadge}
- 📍 **Location:** ${col.city}, ${col.district}, ${col.state}
- 🏢 **Institution Type:** ${col.type} | **Affiliation:** ${col.affiliation}
${nirf ? `- ${nirf}\n` : ''}${naac ? `- ${naac}\n` : ''}${cutoff ? `- ${cutoff}\n` : ''}
📚 **Key Programs / Courses Offered:**
${courses}

${pkg ? `${pkg}\n` : ''}
🏫 **Key Facilities:** ${fac}
🌐 **Official Website:** [${col.website}](${col.website})
`;
}

/**
 * Intelligent AI Assistant response generator for student queries
 */
function generateAIResponse(userMessage) {
  const q = (userMessage || '').toLowerCase().trim();

  // 1. General Greeting
  if (/^(hi|hello|hey|vanakkam|namaste|good morning|good evening)/i.test(q)) {
    return `Hello! 👋 Welcome to **EDUTECH NEXUS AI College & Career Advisor**! 🚀\n\nI have complete basic details, cut-offs, placements, courses, and TNEA codes for **all major colleges** (Engineering, Institutes of National Importance, Autonomous Colleges, Deemed Universities, and Arts & Science).\n\n💡 **You can ask me:**\n- *"Tell me about PSG Tech Coimbatore"* (or Anna University, SSN, CIT, GCT, TCE, KCT, SKCET, etc.)\n- *"Top engineering colleges in Coimbatore"* or *"in Chennai"*\n- *"Colleges offering AI and Data Science"*\n- *"What are the best colleges for Computer Science?"*\n- *"IIT Madras / NIT Trichy details"*\n\nHow can I help you choose or learn about colleges today?`;
  }

  // 2. Specific College Matches
  const matches = searchColleges(q);

  if (matches.length > 0) {
    if (matches.length === 1) {
      const col = matches[0];
      return `Here are the basic and official details for **${col.shortName || col.name}**:\n\n${formatCollegeCard(col)}\n\n💡 *Tip: You can also explore certificate courses in our platform to prepare for technical placements at ${col.shortName || 'this institution'}!*`;
    }

    // Multiple matches (e.g. "top colleges in coimbatore" or "engineering colleges")
    const topMatches = matches.slice(0, 4);
    let response = `Found **${matches.length} colleges** matching your query:\n`;
    topMatches.forEach(col => {
      response += formatCollegeCard(col) + '\n---\n';
    });
    if (matches.length > 4) {
      response += `\n*...and ${matches.length - 4} more colleges available. You can ask for a specific college name (e.g. "${matches[4].shortName}") to view full details.*`;
    }
    return response;
  }

  // 3. District / City query
  if (q.includes('coimbatore') || q.includes('kovai')) {
    const cbe = collegesData.filter(c => c.district.toLowerCase().includes('coimbatore') || c.city.toLowerCase().includes('coimbatore'));
    let res = `🏛️ **Top Colleges in Coimbatore District:**\n\n`;
    cbe.forEach(c => {
      res += `- **${c.name}** [Code: ${c.code}] — *${c.type}* (Avg Package: ${c.placementHighlights?.averagePackage || '6+ LPA'})\n`;
    });
    res += `\nType the name of any college above to get complete programs, cut-offs, and placement details!`;
    return res;
  }

  if (q.includes('chennai')) {
    const chn = collegesData.filter(c => c.district.toLowerCase().includes('chennai') || c.city.toLowerCase().includes('chennai'));
    let res = `🏛️ **Top Colleges in Chennai Region:**\n\n`;
    chn.forEach(c => {
      res += `- **${c.name}** [Code: ${c.code}] — *${c.type}* (NIRF: ${c.nirfRank || 'Ranked'})\n`;
    });
    res += `\nType the name of any college above to view full curriculum, cut-offs, and admissions details!`;
    return res;
  }

  // 4. Course specific (e.g. AI, CSE, Data Science, Mechanical)
  if (q.includes('ai') || q.includes('artificial intelligence') || q.includes('data science') || q.includes('cse') || q.includes('computer science')) {
    const relevant = collegesData.filter(c => (c.topCourses || []).some(course => course.toLowerCase().includes('computer science') || course.toLowerCase().includes('artificial intelligence') || course.toLowerCase().includes('data science'))).slice(0, 5);
    let res = `💻 **Top Recommended Institutions for Computer Science, AI & Data Science:**\n\n`;
    relevant.forEach(c => {
      res += `- **${c.name}** [Code: ${c.code}]\n  - Cutoff: ${c.tneaCutoff || 'High Merit'}\n  - Placement Avg: ${c.placementHighlights?.averagePackage || '7+ LPA'}\n`;
    });
    res += `\n💡 *EDUTECH NEXUS also offers certified video courses in AI Fundamentals, Machine Learning, and Full Stack Development right here on the platform!*`;
    return res;
  }

  // 5. Default overview of all colleges
  let overview = `🎓 **EDUTECH NEXUS — College Knowledge Base Directory**\n\nWe have details for **${collegesData.length} premier colleges & universities**:\n\n`;
  overview += `**🏛️ Anna University & Government Colleges:**\n`;
  collegesData.filter(c => c.type.includes('Government')).forEach(c => {
    overview += `- ${c.name} [Code: ${c.code}]\n`;
  });

  overview += `\n**🏢 Premier Autonomous Engineering Colleges:**\n`;
  collegesData.filter(c => c.type.includes('Autonomous') && c.category.includes('Engineering') && !c.type.includes('Government')).slice(0, 6).forEach(c => {
    overview += `- ${c.name} [Code: ${c.code}]\n`;
  });

  overview += `\n**⭐ Institutes of National Importance & Deemed Universities:**\n`;
  collegesData.filter(c => c.category.includes('National Importance') || c.category.includes('Deemed')).forEach(c => {
    overview += `- ${c.name}\n`;
  });

  overview += `\n**📚 Top Arts, Science & Commerce Colleges:**\n`;
  collegesData.filter(c => c.category.includes('Arts')).forEach(c => {
    overview += `- ${c.name} [${c.city}]\n`;
  });

  overview += `\n❓ *Which college would you like to know more about? You can ask by college name, code, or city!*`;
  return overview;
}

module.exports = {
  collegesData,
  searchColleges,
  generateAIResponse
};
