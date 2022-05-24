const { Atendimento, Paciente, Psicologo } = require("../models/");

const AtendimentoController = {
  // Listar todos
  index: async (req, res) => {
    const listaDeAtendimentos = await Atendimento.findAll({
      include: [Paciente, Psicologo],
    });
    res.json(listaDeAtendimentos);
  },

  // Criação de um novo atendimento
  store: async (req, res) => {
    const { id, data_atendimento, observacao, psicologo_id, paciente_id } =
      req.body;

    try {
      const novoAtendimento = await Atendimento.create({
        id,
        data_atendimento,
        observacao,
        psicologo_id,
        paciente_id,
      });

      res.json(novoAtendimento);
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },

  // Obter item específico
  show: async (req, res) => {
    const { id } = req.params;

    const atendimento = await Atendimento.findByPk(id, {
      include: [Paciente, Psicologo],
    });

    if (atendimento) {
      return res.json(atendimento);
    }

    res.status(404).json({
      message: "Id não encontrado",
    });
  },

  // Atualização
  // update: async (req, res) => {
  //     const { id } = req.params;
  //     const { data_atendimento, observacao, psicologo_id, paciente_id } = req.body;

  //     const atendimentoAtualizado = await Atendimento.update({
  //         id,
  //         data_atendimento,
  //         observacao,
  //         psicologo_id,
  //         paciente_id
  //     },
  //     {
  //         where: {
  //             id,
  //         }
  //     });

  //     res.json("Atendimento atualizado");
  // },

  // Remoção
  // destroy: async (req, res) => {
  //     const { id } = req.params;

  //     try {
  //         const atendimento = await Atendimento.findByPk(id);

  //         if (!atendimento) {
  //           res.status(404).json({
  //             message: "Cliente não encontrado",
  //           });
  //         }

  //         await cliente.destroy();

  //         res.status(204).send("");
  //       } catch (error) {
  //         res
  //           .status(500)
  //           .json({ error: "Oops, tivemos um erro, tente novamente." });
  //       }
  // }
};

module.exports = AtendimentoController;
