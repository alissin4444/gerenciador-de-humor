const Humor = require("../models/Humor");
const Register = require("../models/Register");
const Avatar = require("../models/Avatar");

module.exports = {
  async index(req, res) {
    try {
      const registries = await Register.findAll({
        attributes: ["id"]
      });

      const humores = await Humor.findAll({
        attributes: ["id", "nome"],
        include: [
          {
            model: Avatar,
            as: "avatar",
            attributes: ["id", "nome"]
          }
        ]
      });

      let porcentage = [];
      for (let i = 0; i < humores.length; i++) {
        const quantity = await Register.findAndCountAll({
          where: {
            id_humor: humores[i].id
          },
          attributes: ["id"]
        });

        aritmetica = `${(quantity.count / registries.length * 100).toFixed(2)}%`;

        porcentage = [
          ...porcentage,
          {
            porcentage: aritmetica,
            name: humores[i].dataValues.nome,
            avatar: humores[i].dataValues.avatar.dataValues.id,
            registries: quantity.count
          }
        ]
      }

      return res.json({ code: "SUCCESS", response: porcentage });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ code: "ERROR", response: error });
    }
  }
};
