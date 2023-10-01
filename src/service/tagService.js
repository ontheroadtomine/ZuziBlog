const tagDao = require('../db/tagDao')
const {log} = require('../util/log')

const getTagsByNames = async (tags) => {
    return await findAllTagByName(tags)
}

async function findAllTagByName(names) {
    let tags = [];
    for (const tagName of names) {
        // 根据name查找是否存在tag
        let tag = await tagDao.findTagByName(tagName);
        if (!tag) {
            tag = await tagDao.createTag({name: tagName});
        }
        tags.push(tag);
    }
    return tags
}

const getTagsByIds = async (ids) => {
    return await findAllTagByIds(ids)
}

async function findAllTagByIds(ids) {
    let tags = [];
    for (const id of ids) {
        // 根据name查找是否存在tag
        let tag = await tagDao.findTagById(id);
        if (!tag) {
            log(`tag id ${id} is valid.`)
            continue;
        }
        tags.push(tag);
    }
    return tags
}

const getTagById = async (tagId) => {
    return await tagDao.findTagById(tagId);
}

const getTagByName = async (tagName) => {
    return await tagDao.findTagByName(tagName);
}

const getTags = async () => {
    return await tagDao.findAllTag();
}

const createTag = async (tagParams) => {
    return await tagDao.createTag({
        name: tagParams
    });
}
module.exports = {
    getTagsByNames,
    getTagsByIds,
    getTags,
    createTag,
    getTagById,
    getTagByName
}