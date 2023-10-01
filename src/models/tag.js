'use strict';
const {Model, DataTypes,Sequelize} = require('sequelize');

module.exports = (sequelize) => {
    class Tag extends Model {
    }

    /**
     * 标签
     */
    Tag.init({
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
            comment: '标签名称',
        },
        desc: {
            type: DataTypes.STRING,
            comment: '标签描述',
        },
    }, {
        sequelize,
        modelName: 'Tag',
    });
    return Tag;

};