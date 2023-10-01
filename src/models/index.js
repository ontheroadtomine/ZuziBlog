const {Sequelize, Model, DataTypes} = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    // logging: logger.debug.bind(logger),
    // logging: (...msg) => console.log(msg),
    // pool: {
    //     max: 5,
    //     min: 0,
    //     idle: 30000
    // },
    timezone: '+08:00'
})

const db = {};

const Category = require('./category')(sequelize)
const Tag = require('./tag')(sequelize)
const User = require('./user')(sequelize)
const Article = require('./article')(sequelize)

User.hasMany(Article);
Article.belongsTo(User, {
    foreignKey: {
        allowNull: true,
        name: 'authorId'
    },
    as: 'author'
});

/**
 * Category和Article是一对多的关系
 */
Category.hasMany(Article);
Article.belongsTo(Category, {
    foreignKey: {
        allowNull: true
    },
});

/**
 * Tag和Article是多对多的关系
 */
Tag.belongsToMany(Article, {through: 'Tag_Article'});
Article.belongsToMany(Tag, {through: 'Tag_Article'});


db.tag = Tag
db.user = User;
db.category = Category;
db.article = Article;
/**
 * 定义各个model之间的关系
 */
db.associations = () => {
    console.log("========================执行了")
    /**
     * User和Article是一对多的关系
     */

}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
