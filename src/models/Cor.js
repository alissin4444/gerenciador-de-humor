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

  static associate(models) {
    this.hasMany(models.Register, { foreignKey: "id_cor", as: "registries" });
  }
}

module.exports = Cor;
