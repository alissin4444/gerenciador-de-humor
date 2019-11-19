const Avatar = require("../models/Avatar");
const Humor = require("../models/Humor");

module.exports = {
  async store(req, res) {
    try {
      const { nome, id_avatar } = req.body;

      const avatar = await Avatar.findByPk(id_avatar);

      if (!avatar) {
        return res.status(401).json({ error: "Avatar is not founded" });
      }

      const humor = await Humor.findOrCreate({
        where: {
          id_avatar,
          nome
        },
        include: [{ model: Avatar, as: "avatar" }]
      });
      return res.status(200).json({ humor, responseValue: 1 });
    } catch (err) {
      return res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async index(req, res) {
    try {
      const humores = await Humor.findAll({
        include: [
          {
            model: Avatar,
            as: "avatar"
            // required: true
          }
        ]
      });
      return res.status(200).json({ humores, responseValue: 1 });
    } catch (err) {
      return res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async indexHumor(req, res) {
    try {
      const { id_humor } = req.params;
      const humor = await Humor.findAll({
        where: {
          id: id_humor
        },
        include: [
          {
            model: Avatar,
            as: "avatar"
          }
        ]
      });
      return res.status(200).json({ humor, responseValue: 1 });
    } catch (err) {
      return res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async updateHumor(req, res) {
    try {
      const { id_humor } = req.params;
      const { nome, id_avatar } = req.body;
      const humor = await Humor.findByPk(id_humor);
      humor.nome = nome;
      humor.id_avatar = id_avatar;
      humor.save();
      return res.status(200).json({ humor, responseValue: 1 });
    } catch (err) {
      return res.status(200).json({ erro: err, responseValue: 0 });
    }
  },

  async deleteHumor(req, res) {
    try {
      const { id_humor } = req.params;
      await Humor.destroy({
        where: {
          id: id_humor
        }
      });
      return res
        .status(200)
        .json({ message: "Humor apagado com sucesso", responseValue: 1 });
    } catch (err) {
      return res.status(200).json({ erro: err, responseValue: 0 });
    }
  }
};
