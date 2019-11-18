const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Avatar = require("../models/Avatar");
const Humor = require("../models/Humor");
const Icon = require("../models/Icon");
const Cor = require("../models/Cor");
const Tag = require("../models/Tag");
const Register = require("../models/Register");

const connection = new Sequelize(dbConfig);

Avatar.init(connection);
Humor.init(connection);
Icon.init(connection);
Cor.init(connection);
Tag.init(connection);
Register.init(connection);

Humor.associate(connection.models);
Tag.associate(connection.models);
Register.associate(connection.models);

module.exports = connection;
