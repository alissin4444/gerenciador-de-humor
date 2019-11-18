// const Register = require("../models/Register");
// const Cor = require("../models/Cor");
// const Humor = require("../models/Humor");
// const Tag = require("../models/Tag");

// module.exports = {
//   async index(req, res) {
//     try {
//     } catch (error) {
//       return res.status().json(error);
//     }
//   },

//   async store(req, res) {
//     try {
//       const { id_humor } = req.params;
//       const { id_cor, id_tag, dados } = req.body;

//       const cor = await Cor.findByPk(id_cor);
//       const humor = await Humor.findByPk(id_humor);
//       const tag = await Tag.findByPk(id_tag);

//       if (!cor) {
//         return res.status(404).json({ error: "Color not found" });
//       }

//       if (!humor) {
//         return res.status(404).json({ error: "Humor not found" });
//       }

//       const [register] = await Register.create({
//         id_humor,
//         id_cor,
//         dados
//       });

//       await tag.addRegister(register);

//       return res.json(register);
//     } catch (error) {
//       return res.status(400).json(error);
//     }
//   }
// };
