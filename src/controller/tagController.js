// const {ResponseResult} = require('../util/basic');
// const {log} = require('../util/log');
// const tagService = require('../service/tagService');

// const getTags = async (req, res) => {
//     const tags = await tagService.getTags();
//     return res.json(tags);
// }

// const createTag = async (req, res) => {
//     const tagParams = req.body.name || req.query.name;
//     if (!tagParams) {
//         log("tag is null")
//         res.send({"result": "fail"})
//     } else {
//         const tag = await tagService.createTag(tagParams)
//         log(`create success,tag=${tag}`)
//         res.send({...ResponseResult, code: 200})
//     }
// }

// module.exports = {
//     getTags,
//     createTag
// }