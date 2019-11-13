const Avatar = require("../models/Avatar");

module.exports = {
  async store(req, res) {
    try {
      const { nome } = req.body;
      const avatar = await Avatar.findOrCreate({
        where: { nome }
      });
      return res.status(200).json({ avatar, responseValue: 1 });
    } catch (err) {
      return res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async index(req, res) {
    try {
      const avatares = await Avatar.findAll();
      return res.status(200).json({ avatares, responseValue: 1 });
    } catch (err) {
      return res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async indexAvatar(req, res) {
    try {
      const { id_avatar } = req.params;
      const avatar = await Avatar.findByPk(id_avatar);
      return res.status(200).json({ avatar, responseValue: 1 });
    } catch (err) {
      return res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async updateAvatar(req, res) {
    try {
      const { id_avatar } = req.params;
      const { nome } = req.body;
      const avatar = await Avatar.findByPk(id_avatar);
      avatar.nome = nome;

      await avatar.save();

      return res.status(200).json({ avatar, responseValue: 1 });
    } catch (err) {
      return res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async deleteAvatar(req, res) {
    try {
      const { id_avatar } = req.params;
      await Avatar.destroy({
        where: {
          id: id_avatar
        }
      });
      return res
        .status(200)
        .json({ message: "Avatar apagado com sucesso", responseValue: 1 });
    } catch (err) {
      return res.status(400).json({ erro: err, responseValue: 0 });
    }
  }
};
