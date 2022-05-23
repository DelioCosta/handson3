const { Atendimento, Paciente, Psicologo } = require("../models/");


const AtendimentoController = {
    
    // Listar todos
    index: async (req, res) => {
        const listaDeAtendimentos = await Atendimento.findAll({ include: [Paciente, Psicologo] });
        res.json(listaDeAtendimentos);
    },

    // Criação de um novo atendimento
    store: async (req, res) => {
        const { id, data_atendimento, observacao, psicologo_id, paciente_id } = req.body;

        const novoAtendimento = await Atendimento.create({ 
            id,
            data_atendimento, 
            observacao, 
            psicologo_id, 
            paciente_id 
        });

        res.json(novoAtendimento);
    },

    // Obter item específico
    show: async (req, res) => {
        const { id } = req.params;
    
        const atendimento = await Atendimento.findByPk( id, { include: [Paciente, Psicologo] });

        if (atendimento) {
            return res.json(atendimento);
        };

        res.status(404).json({
            message: "Atendimento não encontrado"
        });
    },

    // Atualização
    update: async (req, res) => {
        const { id } = req.params;
        const { data_atendimento, observacao, psicologo_id, paciente_id } = req.body;

        const atendimentoAtualizado = await Atendimento.update({ 
            id,
            data_atendimento, 
            observacao, 
            psicologo_id, 
            paciente_id  
        },
        {
            where: {
                id,
            }
        });
    
        res.json("Atendimento atualizado");
    },

    // Remoção
    destroy: async (req, res) => {
        const { id } = req.params;
        if (!id) return res.status(404).json("Id não encontrado")
        await Atendimento.destroy({
            where:{
                id:id,
            }
        });
        res.status(204).send("");
    }
};
    

module.exports = AtendimentoController;

