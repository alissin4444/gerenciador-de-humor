const Register = require("../models/Register");
const Cor = require("../models/Cor");
const Humor = require("../models/Humor");
const Tag = require("../models/Tag");

module.exports = {
  async index(req, res) {
    try {
      const registers = await Register.findAll({
        include: [
          {
            model: Cor,
            as: "cor"
          },
          {
            model: Humor,
            as: "humor"
          },
          {
            model: Tag,
            as: "tags"
          }
        ]
      });
      return res.status(200).json({ registers });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async store(req, res) {
    try {
      // id do Humor
      const { id } = req.params;
      const { id_cor, id_tag, dados } = req.body;

      const cor = await Cor.findByPk(id_cor);
      const humor = await Humor.findByPk(id);
      const tag = await Tag.findByPk(id_tag);

      if (!cor) {
        return res.status(404).json({ error: "Color isn't founded" });
      }

      if (!humor) {
        return res.status(404).json({ error: "Humor isn't founded" });
      }

      if (!tag) {
        return res.status(404).json({ error: "Tag isn't founded" });
      }

      const register = await Register.create({
        id_humor: id,
        id_cor,
        dados
      });

      await tag.addRegister(register);

      return res.json(register);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
};
