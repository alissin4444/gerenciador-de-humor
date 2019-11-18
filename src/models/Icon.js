const { DataTypes, Model } = require("sequelize");

class Icon extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "icons"
      }
    );
  }
}

module.exports = Icon;
