const Icon = require("../models/Icon");

module.exports = {
  async store(req, res) {
    try {
      const { nome } = req.body;
      const icon = await Icon.findOrCreate({
        where: {
          nome
        }
      });
      res.json({ icon, responseValue: 1 });
    } catch (err) {
      res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async index(req, res) {
    try {
      const icons = await Icon.findAll();
      res.json({ icons, responseValue: 1 });
    } catch (err) {
      res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async indexIcon(req, res) {
    try {
      const { id_icon } = req.params;
      const icon = await Icon.findByPk(id_icon);

      res.json({ icon, responseValue: 1 });
    } catch (err) {
      res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async updateIcon(req, res) {
    try {
      const { id_icon } = req.params;
      const { nome } = req.body;
      const icon = await Icon.findByPk(id_icon);
      if (icon != null) {
        icon.nome = nome;
        icon.save();
        res.json({ icon, responseValue: 1 });
      }
      res.status(404).json({ icon, responseValue: 1 });
    } catch (err) {
      res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async deleteIcon(req, res) {
    try {
      const { id_icon } = req.params;
      await Icon.destroy({
        where: {
          id: id_icon
        }
      });
      res.json({ message: "Icon apagado com sucesso", responseValue: 1 });
    } catch (err) {
      res.status(400).json({ erro: err, responseValue: 0 });
    }
  }
};
