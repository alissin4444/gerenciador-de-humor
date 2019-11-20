const Register = require("../models/Register");
const Humor = require("../models/Humor");
const Cor = require("../models/Cor");
const Avatar = require("../models/Avatar");

const { Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    try {
      const { id } = req.params;

      const register = await Register.findByPk(id);

      if (!register) {
        return res.status(404).json({ message: "Register is not found" });
      }

      let tags = register.tags;

      tags = tags.split(",");
      const data_tags = [];

      tags.map(tag => {
        data_tags.push(tag.trim());
      });

      return res.json(data_tags);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },

  async show(req, res) {
    try {
      const { tag } = req.body;

      const tags = await Register.findAll({
        where: {
          tags: {
            [Op.like]: `%${tag}%`
          }
        },
        include: [
          {
            model: Cor,
            as: "cor",
            attributes: ["nome", "cor"]
          },
          {
            model: Humor,
            as: "humor",
            attributes: ["id_avatar", "nome"],
            include: [{ model: Avatar, as: "avatar", attributes: ["nome"] }]
          }
        ]
      });

      if (!tags) {
        return res.status(404).json({ message: "Tag is not found" });
      }

      return res.json(tags);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  },

  async show_humores(req, res) {
    try {
      const { id } = req.params;
      const { tag } = req.body;

      const tags = await Register.findAll({
        where: {
          tags: {
            [Op.like]: `%${tag}%`
          },
          id_humor: id
        },
        include: [
          {
            model: Cor,
            as: "cor",
            attributes: ["nome", "cor"]
          },
          {
            model: Humor,
            as: "humor",
            attributes: ["id_avatar", "nome"],
            include: [{ model: Avatar, as: "avatar", attributes: ["nome"] }]
          }
        ]
      });

      return res.json(tags);
    } catch (error) {
      res.status(400).json(error);
    }
  }
};
