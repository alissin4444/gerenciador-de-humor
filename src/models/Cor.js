const { Model, DataTypes } = require("sequelize");

class Cor extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        cor: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "cores"
      }
    );
  }
}

module.exports = Cor;
