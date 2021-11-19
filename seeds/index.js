const seedUsers = require('./user-seed');
const seedPosts = require('./post-seed');
const seedComments = require('./comment-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
        console.log('----- DATABASE SYNCED -----');
    
    await seedUsers();
        console.log('----- Users Seeded -----');
    await seedPosts();
        console.log('----- Post Seeded -----');
    await seedComments();
        console.log('----- Comments Seeded -----');

    process.exit(0);
};

seedAll();