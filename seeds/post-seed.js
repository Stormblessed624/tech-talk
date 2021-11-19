const { Post } = require('../models');

const postData = [
    {
        title: 'Lost Thoughts',
        post_contents: 'hunter/hunter.html',
        user_id: 2
    },
    {
        title: 'The Willing Names',
        post_contents: 'baccano/mafia.html',
        user_id: 1
    },
    {
        title: 'Gift of Roses',
        post_contents: 'world/trigger.html',
        user_id: 4
    },
    {
        title: "The Wizards's Worlds",
        post_contents: 'hero/academia.html',
        user_id: 5
    },
    {
        title: 'The Mists of the Past',
        post_contents: 'doctor/stone.html',
        user_id: 3
    },
    {
        title: 'Dreams in the Dying',
        post_contents: 'reincarnated/slime.html',
        user_id: 2
    },
    {
        title: 'Memory of Game',
        post_contents: 'super/sayan.html',
        user_id: 4
    },
    {
        title: 'Thorns in the Scent',
        post_contents: 'mushi/shi.html',
        user_id: 3
    },
];

const postSeed = () => Post.bulkCreate(postData);

module.exports = postSeed;