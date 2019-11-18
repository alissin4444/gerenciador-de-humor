"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("registers_tags", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_register: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "registers",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      id_tag: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tags",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("registers_tags");
  }
};
