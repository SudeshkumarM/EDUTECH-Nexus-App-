require('../backend/node_modules/dotenv').config({ path: require('path').join(__dirname, '../backend/.env') });
const mongoose = require('../backend/node_modules/mongoose');
const connectDatabase = require('../backend/config/db');
const Course = require('../backend/models/Course');
const User = require('../backend/models/User');

async function main() {
  await connectDatabase();
  const courses = await Course.find({});
  console.log(`Total courses in DB: ${courses.length}`);
  courses.forEach(c => {
    console.log(`- ID: ${c._id}, Title: "${c.title}", Status: "${c.status}", Lessons: ${c.lessons?.length || 0}`);
  });
  const users = await User.find({});
  console.log(`Total users in DB: ${users.length}`);
  users.forEach(u => {
    console.log(`- User: ${u.email}, Role: ${u.role}, XP: ${u.xp}`);
  });
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
