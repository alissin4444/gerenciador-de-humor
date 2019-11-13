const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Avatar = require("../models/Avatar");
const Humor = require("../models/Humor");

const connection = new Sequelize(dbConfig);

Avatar.init(connection);
Humor.init(connection);

Humor.associate(connection.models);
module.exports = connection;
