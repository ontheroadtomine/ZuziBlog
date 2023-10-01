const articleDao = require('../db/articleDao')
const userService = require('./userService')
const tagService = require('./tagService')
const categoryService = require('./categoryService')
const {log} = require('../util/log')

/**
 * 在这一层中，不再验证参数数据
 * @param post
 * @returns {Promise<void>}
 */
const createPost = async (post) => {
    const {article, tagIds, categoryId, userId} = post;
    const realUser = await userService.getUserById(userId);
    const realCategory = await categoryService.getCategoryById(categoryId);
    const realTags = await tagService.getTagsByIds(tagIds);
    if (!realUser || !realTags || realTags.length <= 0 || !realCategory) {
        log(`get post info invalid`)
        return
    }
    return await articleDao.createArticle({
        article: article,
        tags: realTags,
        category: realCategory,
        user: realUser
    });
}

const getPost = async (postId) => {
    return articleDao.findOnePost(postId)
}

const getPosts = (pageIndex, limit) => {
    return articleDao.findPostWithLimit(pageIndex, limit)
}

module.exports = {
    createPost,
    getPost,
    getPosts
}