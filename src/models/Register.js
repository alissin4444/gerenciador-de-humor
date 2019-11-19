const { Model, DataTypes } = require("sequelize");

class Register extends Model {
  static init(sequelize) {
    super.init(
      {
        dados: DataTypes.TEXT
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Tag, {
      foreignKey: "id_register",
      through: "registers_tags",
      as: "tags"
    });
    this.belongsTo(models.Humor, { foreignKey: "id_humor", as: "humor" });
    this.belongsTo(models.Cor, { foreignKey: "id_cor", as: "cor" });
  }
}

module.exports = Register;
