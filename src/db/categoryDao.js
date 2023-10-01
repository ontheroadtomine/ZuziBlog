const {sequelize, Sequelize} = require('../models/index');
const db = require('../models/index')
const {log} = require('../util/log');


async function createCategory(category) {
    if (!category) {
        log(`category info is null.${JSON.stringify(category)}`)
        return
    }
    // 先查询库里面是否有同名的tag，
    const dstCategory = await db.category.findOne({
        where: {
            name: category.name
        }
    })
    if (!dstCategory) {
        // 没有的情况下才要去创建
        return await db.category.create(category)
    } else {
        log(`tag exist.category=${JSON.stringify(category)}`)
        return dstCategory
    }
}

async function getCategoryByName(category) {
    if (!category) {
        log(`category info is null.${JSON.stringify(category)}`)
        return
    }
    const dstCategory = db.category.findOne({
        where: {
            name: category.name
        }
    })
    return dstCategory
}

async function getCategoryById(categoryId) {
    if (!categoryId) {
        log(`category info is null.${JSON.stringify(categoryId)}`)
        return
    }
    const dstCategory = db.category.findOne({
        where: {
            id: categoryId
        }
    })
    return dstCategory
}

async function findAllCategory() {
    const categorys = db.category.findAll()
    return categorys
}

module.exports = {
    createCategory,
    getCategoryById,
    getCategoryByName,
    findAllCategory
};