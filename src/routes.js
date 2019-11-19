const express = require("express");

const AvatarController = require("./controllers/AvatarController");
const HumorController = require("./controllers/HumorController");
const IconController = require("./controllers/IconController");
const CorController = require("./controllers/CorController");
const TagController = require("./controllers/TagController");
const RegisterController = require("./controllers/RegisterController");

const routes = express.Router();

routes.get("/", res => {
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

routes.post("/icons", IconController.store);
routes.get("/icons", IconController.index);
routes.get("/icons/:id_icon", IconController.indexIcon);
routes.put("/icons/:id_icon", IconController.updateIcon);
routes.delete("/icons/:id_icon", IconController.deleteIcon);

routes.get("/cores", CorController.index);
routes.get("/cores/:id_cor", CorController.indexCor);
routes.post("/cores", CorController.store);
routes.put("/cores/:id_cor", CorController.updateCor);
routes.delete("/cores/:id_cor", CorController.deleteCor);

routes.get("/tags", TagController.index);
routes.post("/icons/:id/tags", TagController.store);
routes.get("/tags/:id", TagController.show);
routes.put("/tags/:id", TagController.update);
routes.delete("/tags/:id", TagController.destroy);

routes.get("/registers", RegisterController.index);
routes.post("/humores/:id/registers", RegisterController.store);

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
