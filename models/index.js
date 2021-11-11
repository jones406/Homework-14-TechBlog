const User = require('./User');
const BlogEntry = require('./BlogEntry');
const Comment = require('./Comment')

//post belongs to a user -- connect user and post by the user id
BlogEntry.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

module.exports = { User, BlogEntry, Comment };