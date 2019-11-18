const Tag = require("../models/Tag");
const Icon = require("../models/Icon");

module.exports = {
  async index(req, res) {
    try {
      const tag = await Tag.findAll({
        include: [
          {
            model: Icon,
            as: "icon"
          }
        ]
      });
      return res.json(tag);
    } catch (error) {
      return res.status().json(error);
    }
  },

  async store(req, res) {
    try {
      const { id } = req.params;
      const { nome } = req.body;
      const tag = await Tag.findOrCreate({
        where: {
          nome,
          id_icon: id
        }
      });
      return res.json(tag);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const tag = await Tag.findAll({
        where: {
          id
        },
        include: [
          {
            model: Icon,
            as: "icon"
          }
        ]
      });
      return res.json(tag);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, id_icon } = req.body;

      const tag = await Tag.findByPk(id);

      if (tag !== null) {
        tag.nome = nome;
        tag.id_icon = id_icon;
        tag.save();
        res.json(tag);
      }

      res.status(404).json({ message: "Tag não encontrada" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;
      await Tag.destroy({
        where: {
          id
        }
      });

      return res.json({ message: "Tag apagada com sucesso" });
    } catch (error) {}
  }
};
