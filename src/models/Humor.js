const { Model, DataTypes } = require("sequelize");

class Humor extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "humores"
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Avatar, { foreignKey: "id_avatar", as: "avatar" });
    this.hasMany(models.Register, { foreignKey: "id_humor", as: "registries" });
  }
}

module.exports = Humor;
