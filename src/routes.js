const express = require("express");

const AvatarController = require("./controllers/AvatarController");
const HumorController = require("./controllers/HumorController");
const CorController = require("./controllers/CorController");
const RegisterController = require("./controllers/RegisterController");
const TagController = require("./controllers/TagController");
const FilterController = require("./controllers/FilterController");
const PorcentageController = require("./controllers/PorcentageController");

const routes = express.Router();

routes.get("/", res => {
  res.json({ message: "You're welcome!" });
});

routes.post("/avatares", AvatarController.store);
routes.get("/avatares", AvatarController.index);
routes.get("/avatares/:id_avatar", AvatarController.indexAvatar);
routes.put("/avatares/:id_avatar", AvatarController.updateAvatar);
routes.delete("/avatares/:id_avatar", AvatarController.deleteAvatar);

routes.post("/humores", HumorController.store);
routes.get("/humores", HumorController.index);
routes.get("/humores/:id_humor", HumorController.indexHumor);
routes.put("/humores/:id_humor", HumorController.updateHumor);
routes.delete("/humores/:id_humor", HumorController.deleteHumor);

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

routes.get("/filter/humores/:id/registries", FilterController.humores);
routes.get("/filter/cores/:id/registries", FilterController.cores);
routes.get("/filter/humores/registries", FilterController.humores_registries);

routes.get("/porcentage", PorcentageController.index);

module.exports = routes;
