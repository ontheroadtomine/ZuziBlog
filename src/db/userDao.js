const { sequelize, Sequelize } = require('../models/index');
const db = require('../models/index')
const { log } = require('../util/log');


async function createUser(user) {
    console.log("createUser", user);
    if (!user) {
        log("user is null.")
        return
    }
    // 先查询库里面是否有同名的tag，
    const dstUser = await db.user.findOne({
        where: {
            username: user.username
        }
    })
    console.log("dstUser", dstUser);
    if (!dstUser) {
        // 没有的情况下才要去创建
        return await db.user.create(user);
    } else {
        log(`user exist.user=${JSON.stringify(dstUser)}`)
        return dstUser;
    }
}

async function getUserByName(userName) {
    if (!userName) {
        log(`user info is null.${JSON.stringify(userName)}`)
        return
    }
    const dstUser = await db.user.findOne({
        where: {
            username: userName
        }
    })
    return dstUser
}

async function getUserById(userId) {
    if (!userId) {
        log(`user info is null.${JSON.stringify(userId)}`)
        return
    }
    const dstUser = await db.user.findOne({
        where: {
            id: userId
        }
    })
    return dstUser
}

async function findAllUser() {
    const users = await db.user.findAll()
    return users
}


module.exports = {
    createUser,
    getUserByName,
    getUserById,
    findAllUser
};
