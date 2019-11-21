const Humor = require("../models/Humor");
const Avatar = require("../models/Avatar");
const Register = require("../models/Register");
const Cor = require("../models/Cor");

module.exports = {
  async humores(req, res) {
    try {
      const { id } = req.params;

      const humor = await Humor.findByPk(id, {
        include: [
          {
            model: Avatar,
            as: "avatar",
            attributes: ["nome"]
          },
          {
            model: Register,
            as: "registries",
            attributes: ["id", "dados", "tags", "created_at"],
            include: [
              {
                model: Cor,
                as: "cor",
                attributes: ["id", "nome", "cor"]
              }
            ]
          }
        ]
      });

      if (!humor) {
        return res
          .status(404)
          .json({ code: "NOT FOUND", error: "Humor is not found" });
      }

      return res.json(humor);
    } catch (error) {
      return res.status(400).json({ code: "ERROR", error });
    }
  },

  async cores(req, res) {
    try {
      const { id } = req.params;

      const cor = await Cor.findByPk(id, {
        include: [
          {
            model: Register,
            as: "registries",
            attributes: ["id", "dados", "tags", "created_at"],
            include: [
              {
                model: Humor,
                as: "humor",
                attributes: ["id", "nome"],
                include: [
                  {
                    model: Avatar,
                    as: "avatar",
                    attributes: ["id", "nome"]
                  }
                ]
              }
            ]
          }
        ]
      });

      if (!cor) {
        return res
          .status(404)
          .json({ code: "NOT FOUND", error: "Cor is not found" });
      }

      res.json(cor);
    } catch (error) {
      return res.status(400).json({ code: "ERROR", error });
    }
  },

  async humores_registries(req, res) {
    try {
      const humores = await Humor.findAll({
        attributes: ["id", "nome", "created_at"],
        include: [
          {
            model: Register,
            as: "registries",
            attributes: ["id", "dados", "tags", "created_at"],
            include: [
              {
                model: Cor,
                as: "cor",
                attributes: ["id", "nome", "cor"]
              }
            ]
          },
          {
            model: Avatar,
            as: "avatar",
            attributes: ["id", "nome"]
          }
        ]
      });

      const totalHumores = humores.length;

      for (let i = 0; i < totalHumores; i++) {
        let countRegistries = humores[i].registries.length;
        humores[i].dataValues.count = countRegistries;
      }

      return res.json(humores);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ code: "ERROR", error });
    }
  }
};
