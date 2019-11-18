const Cor = require("../models/Cor");

module.exports = {
  async store(req, res) {
    try {
      const { nome, cor } = req.body;
      const corB = await Cor.findOrCreate({
        where: {
          nome,
          cor
        }
      });
      res.json({ cor: corB, responseValue: 1 });
    } catch (err) {
      res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async index(req, res) {
    try {
      const cores = await Cor.findAll();
      res.json({ cores, responseValue: 1 });
    } catch (err) {
      res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async indexCor(req, res) {
    try {
      const { id_cor } = req.params;
      const cor = await Cor.findByPk(id_cor);
      res.json({ cor, responseValue: 1 });
    } catch (err) {
      res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async updateCor(req, res) {
    try {
      const { id_cor } = req.params;
      const { nome, cor } = req.body;
      const corB = await Cor.findByPk(id_cor);
      if (corB != null) {
        corB.nome = nome;
        corB.cor = cor;
        corB.save();
        res.json({ cor: corB, responseValue: 1 });
      }
      res.json({ cor: corB, responseValue: 1 });
    } catch (err) {
      res.status(400).json({ erro: err, responseValue: 0 });
    }
  },

  async deleteCor(req, res) {
    try {
      const { id_cor } = req.params;
      await Cor.destroy({
        where: {
          id: id_cor
        }
      });
      res.json({ message: "Cor apagada com sucesso", responseValue: 1 });
    } catch (err) {
      res.status(400).json({ erro: err, responseValue: 0 });
    }
  }
};
