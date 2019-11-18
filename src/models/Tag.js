const { Model, DataTypes } = require("sequelize");

class Tag extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING
      },
      {
        sequelize,
        tableName: "tags"
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Icon, { foreignKey: "id_icon", as: "icon" });
    this.belongsToMany(models.Tag, {
      foreignKey: "id_tag",
      throught: "registers_tags",
      as: "registers"
    });
  }
}

module.exports = Tag;
