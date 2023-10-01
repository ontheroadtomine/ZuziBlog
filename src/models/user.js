'use strict';
const {Model, DataTypes, Sequelize} = require('sequelize');
const {aes} = require('../util/crypto')

module.exports = (sequelize) => {
    class User extends Model {
    }

    User.init({
        id: {
            type: DataTypes.UUID,
            notNull: true,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4 // 或 DataTypes.UUIDV1
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: "John Doe",
            comment: '邮件',
        },
        icon: {
            type: DataTypes.STRING,
            defaultValue: "John Doe",
            comment: 'icon',
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: "John Doe",
            comment: '个人描述',
        },
        username: {
            type: DataTypes.STRING,
            notNull: true,
            notEmpty: true,
            comment: '账号',
            defaultValue: "admin",
        },
        password: {
            type: DataTypes.STRING,
            notEmpty: true,
            comment: '密码',
            defaultValue: 'Vchs0bbdk2pr/Ac6DsHruw==',
            set(value) {
                // 在数据库中以明文形式存储密码是很糟糕的.
                // 使用适当的aes对称加密更好.
                this.setDataValue('password', aes.en(value));
            }
        },
        nickName: {
            type: DataTypes.STRING,
            defaultValue: "John Doe",
            comment: '昵称',
        },
        verificationCode: {
            type: DataTypes.INTEGER,
            comment: '验证码',
        },
        roleId: {
            type: DataTypes.STRING,
            notEmpty: true,
            comment: '角色名称',
        },
        state: {
            type: DataTypes.BOOLEAN,
            comment: '状态',
            defaultValue: true
        }
    }, {
        sequelize,
        modelName: 'User',
    });

    return User;
};