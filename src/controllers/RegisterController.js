const Register = require("../models/Register");
const Cor = require("../models/Cor");
const Humor = require("../models/Humor");
const Avatar = require("../models/Avatar");

module.exports = {
  async index(req, res) {
    try {
      const registries = await Register.findAndCountAll({
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

      return res.json(registries);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async store(req, res) {
    try {
      const { id } = req.params;
      const { dados, tags, id_cor } = req.body;

      const humor = await Humor.findByPk(id);
      if (!humor) {
        return res.status(404).json({ message: "Humor is not founded" });
      }

      const cor = await Cor.findByPk(id_cor);
      if (!cor) {
        return res.status(404).json({ message: "Cor is not founded" });
      }

      const register = await Register.create({
        id_cor,
        id_humor: id,
        dados,
        tags
      });

      return res.json(register);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;

      const register = await Register.findByPk(id, {
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

      return res.json(register);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { id_humor, id_cor, dados, tags } = req.body;

      const register = await Register.findByPk(id);
      if (!register) {
        return res.status(404).json({ message: "Register is not found" });
      }

      const humor = await Humor.findByPk(id_humor);
      if (!humor) {
        return res.status(404).json({ message: "Humor is not found" });
      }

      const cor = await Cor.findByPk(id_cor);
      if (!cor) {
        return res.status(404).json({ message: "Cor is not found" });
      }

      register.id_humor = id_humor;
      register.id_cor = id_cor;
      register.dados = dados;
      register.tags = tags;
      register.save();

      return res.json(register);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;
      await Register.destroy({
        where: {
          id
        }
      });

      const register = await Register.findByPk(id);

      if (register) {
        return res.json(false);
      }

      return res.json(true);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
};
