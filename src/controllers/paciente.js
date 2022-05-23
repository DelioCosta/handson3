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
            idade
        });

        res.json(novoPaciente);
    },

    // Obter item específico
    show: async (req, res) => {
        const { id } = req.params;
    
        const paciente = await Paciente.findByPk(id);

        if (paciente) {
            return res.json(paciente);
        };

        res.status(404).json({
            message: "Paciente não encontrado"
        });
    },

    // Atualização
    update: async (req, res) => {
        const { id } = req.params;
        const { nome, email, idade } = req.body;

        const pacienteAtualizado = await Paciente.update({ 
            id,
            nome, 
            email, 
            idade 
        },
        {
            where: {
                id,
            }
        });
    
        res.json("Paciente atualizado");
    },

    // Remoção
    destroy: async (req, res) => {
        const { id } = req.params;
        if (!id) return res.status(404).json("Id não encontrado")
        await Paciente.destroy({
            where:{
                id,
            }
        });
        res.status(204).send("");
    }
};
    

module.exports = PacienteController;