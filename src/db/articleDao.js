const {sequelize, Sequelize} = require('../models/index');
const db = require('../models/index');
const {log} = require('../util/log');
const Article = db.article;
const Tag = db.tag;
const Category = db.category;
const User = db.user;

/**
 * 创建文章
 * @param post 整个文章的内容，包含了标签，分类，用户等信息
 */
async function createArticle(post) {
    const {article, tags, category, user} = post
    // 如果任意一个参数为null，则说明参数不合格
    if (!article || !tags || !category || !user) {
        log(`article is invalid.article=${JSON.stringify(post)}`)
        return;
    }
    const dstArticle = await Article.create(article)
    // 更新用户
    await dstArticle.setAuthor(user);
    // 更新分类
    await dstArticle.setCategory(category)
    // 更新标签
    await dstArticle.setTags(tags)
    return dstArticle
}

/**
 * 查看具体的某一篇文章
 * @param postId
 * @returns {Promise<*>}
 */
async function findOnePost(postId) {
    if (!postId) {
        log(`invalid params ,postId=${postId}`);
        return;
    }
    const post = Article.findOne({
        where: {
            id: postId
        },
        include: [
            {model: Category, /**as: 'category'*/},
            {model: User, as: "author"},
            {model: Tag,/** as: "tags"*/}
        ],
    });
    return post;
}

/**
 * 分页查找数据
 * @param page 第几页,从1开始
 * @param limit 每页的数据
 * @returns {Promise<void>}
 */
async function findPostWithLimit(page, limit) {
    if (page < 0 || limit < 0) {
        log(`invalid params ,page=${page},limit=${limit}`);
        return;
    }
    const offset = (page - 1) * limit;
    const posts = await Article.findAll({
        offset: offset,
        limit: limit,
        include: [
            {model: Category, /**as: 'category'*/},
            {model: User, as: "author"},
            {model: Tag,/** as: "tags"*/}
        ],
    })
    return posts;
}

module.exports = {createArticle, findOnePost, findPostWithLimit};