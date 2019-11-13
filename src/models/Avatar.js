const { Model, DataTypes } = require("sequelize");

class Avatar extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "avatares"
      }
    );
  }
}

module.exports = Avatar;
