const userDao = require('../db/userDao')
const {log} = require('../util/log')

const getUserById = async (userId) => {
    const realUser = await userDao.getUserById(userId)
    return realUser
}

module.exports = {
    getUserById
}