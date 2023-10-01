// const {ResponseResult} = require('../util/basic')
// const postService = require('../service/postService')
// const {log} = require('../util/log')
// const config = require('../config/blog.config')

// /**
//  * 发布文章
//  * @param req
//  * @param res
//  * @returns {Promise<void>}
//  */
// const publishPost = async (req, res) => {
//     const post = req.body || req.query;
//     if (!post) {
//         log(`invalid post id ${post}`)
//         res.send({...ResponseResult, code: 500, message: `invalid post  ${post}`})
//     } else {
//         const {article, tagIds, categoryId, userId} = post
//         if (!userId) {
//             replayErrorMessage(res, `user info is invalid.user=${userId}`);
//             return
//         }
//         if (!categoryId) {
//             replayErrorMessage(res, `category invalid,category=${categoryId}`);
//             return
//         }
//         if (!tagIds || tagIds.size < 0) {
//             replayErrorMessage(res, `tags is invalid,tags=${tagIds}`);
//             return;
//         }
//         const result = await postService.createPost(post)
//         if (result) {
//             res.send({...ResponseResult, code: 200})
//         } else {
//             res.send({...ResponseResult, code: 500, message: `publish post fail.`})
//         }
//     }
// }

// const getPost = async (req, res) => {
//     const postId = req.body.postId
//     if (!postId) {
//         log(`invalid post id ${postId}`)
//         res.send({...ResponseResult, code: 500, message: `invalid post id ${postId}`})
//     } else {
//         const post = await postService.getPost(postId)
//         res.json(post)
//     }
// }

// const getPosts = async (req, res) => {
//     const pageIndex = req.body.pageIndex || 1;
//     const limit = config.pageLimit;
//     log(`pageIndex=${pageIndex},limit=${limit}`);
//     const posts = await postService.getPosts(pageIndex, limit);
//     res.json(posts)
// }

// function replayErrorMessage(res, message) {
//     res.send({...ResponseResult, code: 500, message: message})
// }

// module.exports = {
//     publishPost,
//     getPost,
//     getPosts
// }

