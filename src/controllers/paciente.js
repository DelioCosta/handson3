const { Paciente } = require("../models/");

const PacienteController = {
  // Listar todos
  index: async (req, res) => {
    const listaDePacientes = await Paciente.findAll();
    res.json(listaDePacientes);
  },

  // Criação de um novo atendimento
  store: async (req, res) => {
    const { id, nome, email, idade } = req.body;

    const novoPaciente = await Paciente.create({
      id,
      nome,
      email,
      idade,
    });

    res.status(201).json(novoPaciente);
  },

  // Obter item específico
  show: async (req, res) => {
    const { id } = req.params;

    const paciente = await Paciente.findByPk(id);

    if (paciente) {
      return res.json(paciente);
    }

    res.status(404).json({
      message: "Id não encontrado",
    });
  },

  // Atualização
  update: async (req, res) => {
    const { id } = req.params;
    const { nome, email, idade } = req.body;
    const paciente = await Paciente.findByPk(id);

    if(!paciente){
      res.status(404).json({
        message: "Id não encontrado",
      });
    }

    const pacienteAtualizado = await Paciente.update(
      {
        id,
        nome,
        email,
        idade,
      },
      {
        where: {
          id,
        },
      }
    );

    const jsonPacienteAtualizado = await Paciente.findByPk(id);
    res.json(jsonPacienteAtualizado);
    

  },

  // Remoção
  destroy: async (req, res) => {
    const { id } = req.params;
    const paciente = await Paciente.findByPk(id);

    if (!paciente) {
      res.status(404).json({
        message: "Id não encontrado",
      });
    } 
    
    try {
      await Paciente.destroy({
        where: {
          id,
        },
      });

      res.status(204).send("");
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Não é possível excluir paciente com registro de atendimento" });
    }
  },
};

module.exports = PacienteController;
