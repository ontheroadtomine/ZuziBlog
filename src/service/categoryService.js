const categoryDao = require('../db/categoryDao')
const {log} = require('../util/log')

const getCategoryByName = async (category) => {
    return await categoryDao.getCategoryByName(category);
}

const getCategoryById = async (categoryId) => {
    return await categoryDao.getCategoryById(categoryId)
}

const createCategory = async (name, showInMenu) => {
    return categoryDao.createCategory({
        name: name,
        showInMenu: showInMenu
    });
}

const getCategorys = async () => {
    return categoryDao.findAllCategory();
}

module.exports = {
    createCategory,
    getCategorys,
    getCategoryByName,
    getCategoryById
}