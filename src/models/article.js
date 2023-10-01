'use strict';
const {Model, DataTypes,Sequelize} = require('sequelize');
module.exports = (sequelize) => {
    class Article extends Model {
    }

    /**
     * 文章对应的表
     */
    Article.init({
        id: {
            type: DataTypes.UUID,
            notNull: true,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4 // 或 DataTypes.UUIDV1
        },
        title: {
            type: DataTypes.STRING,
            notNull: true,
            notEmpty: true,
            comment: '文章标题',
        },
        content: {
            type: DataTypes.TEXT('medium'),
            notNull: true,
            notEmpty: true,
            comment: '文章内容',
        },
        description: {
            type: DataTypes.TEXT,
            notNull: true,
            notEmpty: true,
            comment: '文章描述',
        },
        cover: {
            type: DataTypes.STRING,
            comment: '文章封面',
        },
        isPublish: {
            type: DataTypes.BOOLEAN,
            comment: '是否发布',
            defaultValue: false
        },
        viewCount: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            defaultValue: 0,
            comment: '文章浏览量',
        },
        likeCount: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            defaultValue: 0,
            comment: '文章点赞量',
        },
        showAd: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            comment: "是否显示广告"
        },
        commentsCount: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            defaultValue: 0,
            comment: '文章评论数',
        },
        isTop: {
            type: DataTypes.BOOLEAN,
            notEmpty: true,
            defaultValue: false,
            comment: '是否顶置',
        },
        isHot: {
            type: DataTypes.BOOLEAN,
            notEmpty: true,
            defaultValue: false,
            comment: '是否火热',
        },
        isRecommend: {
            type: DataTypes.BOOLEAN,
            notEmpty: true,
            defaultValue: false,
            comment: '是否推荐',
        },
        reprint: {
            type: DataTypes.STRING,
            comment: '转载地址',
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,

    }, {
        sequelize,
        modelName: 'Article',
    });

    return Article;
};
