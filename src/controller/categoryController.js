// const {ResponseResult} = require('../util/basic')
// const {log} = require('../util/log')
// const categoryService = require('../service/categoryService')

// const createCategory = async (req, res) => {
//     const name = req.body.name
//     if (!name) {
//         log("categoryObj is null")
//         res.send({...ResponseResult, code: 500, message: "invalid params"})
//     } else {
//         const category = await categoryService.createCategory(name,false)
//         log(`create success,category=${category}`)
//         res.send({...ResponseResult, code: 200})
//     }
// }

// const getCategorys = async (req, res) => {
//     const categorys = await categoryService.getCategorys()
//     return res.json(categorys);
// }

// module.exports = {
//     createCategory,
//     getCategorys
// }