const { Model, DataTypes } = require("sequelize");

class Register extends Model {
  static init(sequelize) {
    super.init(
      {
        dados: DataTypes.TEXT,
        tags: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "registries"
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Humor, { foreignKey: "id_humor", as: "humor" });
    this.belongsTo(models.Cor, { foreignKey: "id_cor", as: "cor" });
  }
}

module.exports = Register;
