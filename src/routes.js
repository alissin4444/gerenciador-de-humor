const express = require("express");

const AvatarController = require("./controllers/AvatarController");
const HumorController = require("./controllers/HumorController");
const IconController = require("./controllers/IconController");
const CorController = require("./controllers/CorController");
const RegisterController = require("./controllers/RegisterController");
const TagController = require("./controllers/TagController");
const FilterController = require("./controllers/FilterController");

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

routes.get("/registries", RegisterController.index);
routes.post("/humores/:id/registries", RegisterController.store);
routes.get("/registries/:id", RegisterController.show);
routes.put("/registries/:id", RegisterController.update);
routes.delete("/registries/:id", RegisterController.destroy);

routes.get("/registries/:id/tags", TagController.index);
routes.get("/tags", TagController.show);
routes.get("/humores/:id/registries/tags", TagController.show_humores);

// All registries where humor x and tag y

// Fazer o crud para comentários
// Fazer o post para "reações"

// Fazer uma função que possibilita filtrar os registros pelo humor
// Fazer uma função que possibilita filtrar os registros pela cor
// Fazer uma função que permite filtrar os registros por suas tags
// Fazer uma função que possibilita a visualização de quantos humores foram cadastrados e quantos registros cada humor possúi

// Fazer uma função que diz qual a média aritmética (registros) de humores de usuários

// Fluxo atual --> Entro no software, crio um humor, adiciono o registro, preencheencho o registro (tags, humor, cor e o conteúdo do registro), dou quantos likes quiser e ficará registrados esses likes, adiciono quantos comentários quiser e ficará registrado esses comentários
// GG project and upload at github.com
module.exports = routes;
