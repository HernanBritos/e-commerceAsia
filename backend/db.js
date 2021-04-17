const { Sequelize, DataTypes, Op } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// Conexion con  la base de datos
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
       logging: false, // set to console.log to see the raw SQL queries
       native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
 );
 // Importacion de los modelos de la base de datos

 const userModels = require('./src/models/users');


 // Creacion de las entidades  de la base de datos

 const User = userModels(sequelize, DataTypes);

 module.exports = {
    conn: sequelize,
    User
 };
