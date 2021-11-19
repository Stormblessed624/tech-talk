const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'There are few things better in life than a slice of pie.',
        user_id: 3,
        post_id: 6
    },
    {
        comment_text: "Just because the water is red doesn't mean you can't drink it.",
        user_id: 5,
        post_id: 2
    },
    {
        comment_text: 'One small action would change her life, but whether it would be for better or for worse was yet to be determined.',
        user_id: 3,
        post_id: 5
    },
    {
        comment_text: 'He liked to play with words in the bathtub.',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'The urgent care center was flooded with patients after the news of a new deadly virus was made public.',
        user_id: 2,
        post_id: 5
    },
    {
        comment_text: 'Everybody should read Chaucer to improve their everyday vocabulary.',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: "The child’s favorite Christmas gift was the large box her father’s lawnmower came in.",
        user_id: 4,
        post_id: 8
    },
    {
        comment_text: 'Garlic ice-cream was her favorite.',
        user_id: 5,
        post_id: 7
    },
    {
        comment_text: 'There is no better feeling than staring at a wall with closed eyes.',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'My dentist tells me that chewing bricks is very bad for your teeth.',
        user_id: 1,
        post_id: 4
    },
];

const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;