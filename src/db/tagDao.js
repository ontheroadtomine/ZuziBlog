const {sequelize, Sequelize, Op} = require('../models/index');
const db = require('../models/index')
const {log} = require('../util/log');


async function createTag(tag) {
    if (!tag) {
        log("tag is null.")
        return
    }
    // 先查询库里面是否有同名的tag，
    const dstTag = await db.tag.findOne({
        where: {
            name: tag.name
        }
    })
    if (!dstTag) {
        // 没有的情况下才要去创建
        return await db.tag.create(tag)
    } else {
        log(`tag exist.tag=${JSON.stringify(tag)}`)
        return dstTag
    }
}

async function findTagByName(tagName) {
    if (!tagName) {
        log(`tag info is null.${JSON.stringify(tagName)}`)
        return
    }
    const dstTag = await db.tag.findOne({
        where: {
            name: tagName
        }
    })
    return dstTag
}

async function findTagById(tagId) {
    if (!tagId) {
        log(`tag info is null.${JSON.stringify(tagId)}`)
        return
    }
    const dstTag = await db.tag.findOne({
        where: {
            id: tagId
        }
    })
    return dstTag
}

async function findAllTag() {
    const tags = await db.tag.findAll()
    return tags
}

module.exports = {
    createTag,
    findTagById,
    findTagByName,
    findAllTag,
};
