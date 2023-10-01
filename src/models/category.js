'use strict';
const {Model, DataTypes,Sequelize} = require('sequelize');
module.exports = (sequelize) => {
    class Category extends Model {
    }

    /**
     * 定义Category类型
     */
    Category.init({
        id: {
            type: DataTypes.UUID,
            notNull: true,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4 // 或 DataTypes.UUIDV1
        },
        name: {
            type: DataTypes.STRING,
            notNull: true,
            notEmpty: true,
            comment: '分类名称',
        },
        desc: {
            type: DataTypes.STRING,
            comment: '分类描述',
        },
        path: {
            type: DataTypes.STRING,
            comment: '分类页面路径',
        },
        showInMenu:{
            type: DataTypes.BOOLEAN,
            comment: '分类页面路径',
        },
    }, {
        sequelize,
        modelName: 'Category',
    });


    return Category;
};