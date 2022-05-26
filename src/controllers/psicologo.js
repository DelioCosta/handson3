const { Psicologo } = require("../models/");
const bcrypt = require('bcrypt');

const PsicologoController = {
  // Listar todos
  index: async (req, res) => {
    const listaDePsicologos = await Psicologo.findAll();
    res.json(listaDePsicologos);
  },

  // Criação de um novo atendimento
  store: async (req, res) => {
    const { id, nome, email, senha, apresentacao } = req.body;

    //aplica bcrypt na senha
    const novaSenha = bcrypt.hashSync(senha, 10);

    const novoPsicologo = await Psicologo.create({
      id,
      nome,
      email,
      senha: novaSenha,
      apresentacao,
    });

    res.status(201).json(novoPsicologo);
  },

  // Obter item específico
  show: async (req, res) => {
    const { id } = req.params;

    const psicologo = await Psicologo.findByPk(id);

    if (psicologo) {
      return res.json(psicologo);
    }

    res.status(404).json({
      message: "Id não encontrado",
    });
  },

  // Atualização
  update: async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha, apresentacao } = req.body;
    const psicologo = await Psicologo.findByPk(id);

    //aplica bcrypt na senha
    const novaSenha = bcrypt.hashSync(senha, 10);

    if(!psicologo){
      res.status(404).json({
        message: "Id não encontrado",
      });
    };

    const psicologoAtualizado = await Psicologo.update(
      {
        id,
        nome,
        email,
        senha: novaSenha,
        apresentacao,
      },
      {
        where: {
          id,
        },
      }
    );

    res.json("Id atualizado");
  },

  // Remoção
  destroy: async (req, res) => {
    const { id } = req.params;
    const psicologo = await Psicologo.findByPk(id);

    if (!psicologo) {
      res.status(404).json({
        message: "Id não encontrado",
      });
    } 
    
    try {
      await Psicologo.destroy({
        where: {
          id,
        },
      });

      res.status(204).send("");
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Não é possível excluir psicólogo com registro de atendimento" });
    }
  },
};

module.exports = PsicologoController;
