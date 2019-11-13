const express = require("express");

const AvatarController = require("./controllers/AvatarController");
const HumorController = require("./controllers/HumorController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ message: "You're welcome!" });
});

routes.post("/avatares", AvatarController.store);
routes.get("/avatares", AvatarController.index);
routes.get("/avatares/:id_avatar", AvatarController.indexAvatar);
routes.put("/avatares/:id_avatar", AvatarController.updateAvatar);
routes.delete("/avatares/:id_avatar", AvatarController.deleteAvatar);
// Criar uma rota que possibilite visualizar quantos humores o avatar x possui.

routes.post("/humores", HumorController.store);
routes.get("/humores", HumorController.index);
routes.get("/humores/:id_humor", HumorController.indexHumor);
routes.put("/humores/:id_humor", HumorController.updateHumor);
routes.delete("/humores/:id_humor", HumorController.deleteHumor);
// Criar uma rota que possibilita visualizar quantos registros estão relacionados à esse humor

// Fazer o crud para icons
// Fazer o crud para cores

// Fazer o crud para tags
// Fazer o crud de registros
// Fazer o relacionamento entre registros e tags

// Fazer o crud para comentários
// Fazer o post para "reações"

// Fazer uma função que possibilita filtrar os registros pelo humor
// Fazer uma função que possibilita filtrar os registros pela cor
// Fazer uma função que mostra quantos registros o sistema tem no total
// Fazer uma função que possibilita a visualização de quantos humores foram cadastrados e quantos registros cada humor possúi
// Fazer uma função que diz qual a média aritmética (registros) de humores de usuários

// Fluxo atual --> Entro no software, crio um humor, crio minhas tags, adiciono o registro, preencheencho o registro (tags, humor, cor e o contuúdo do registro), dou quantos likes quiser e ficará registrados esses likes, adiciono quantos comentários quiser e ficará registrado esses comentários
// GG project and upload at github.com
module.exports = routes;
