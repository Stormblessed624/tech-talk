const { User } = require('../models');

const userData = [
    {
        username: 'matt',
        email: 'matt@gmail.com',
        password: 'password123'
    },
    {
        username: 'redrising',
        email: 'redrising@gmail.com',
        password: 'password123'
    },
    {
        username: 'test',
        email: 'test@gmail.com',
        password: 'password123'
    },
    {
        username: 'stormblessed',
        email: 'stormblessed@gmail.com',
        password: 'password123'
    },
    {
        username: 'kaladin',
        email: 'kaladin@gmail.com',
        password: 'password123'
    }
];

const userSeed = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = userSeed;