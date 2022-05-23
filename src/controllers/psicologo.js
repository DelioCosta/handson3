const { Psicologo } = require("../models/");

const PsicologoController = {
    
    // Listar todos
    index: async (req, res) => {
        const listaDePsicologos = await Psicologo.findAll();
        res.json([listaDePsicologos]);
    },

    // Criação de um novo atendimento
    store: async (req, res) => {
        const { id, nome, email, senha, apresentacao } = req.body;

        const novoPsicologo = await Psicologo.create({ 
            id, 
            nome, 
            email, 
            senha, 
            apresentacao
        });

        res.json(novoPsicologo);
    },

    // Obter item específico
    show: async (req, res) => {
        const { id } = req.params;
    
        const psicologo = await Psicologo.findByPk(id);

        if (psicologo) {
            return res.json(psicologo);
        };

        res.status(404).json({
            message: "Psicologo não encontrado"
        });
    },

    // Atualização
    update: async (req, res) => {
        const { id } = req.params;
        const { nome, email, senha, apresentacao } = req.body;

        const psicologoAtualizado = await Psicologo.update({ 
            id, 
            nome, 
            email, 
            senha, 
            apresentacao 
        },
        {
            where: {
                id,
            }
        });
    
        res.json("Psicologo atualizado");
    },

    // Remoção
    destroy: async (req, res) => {
        const { id } = req.params;
        if (!id) return res.status(404).json("Id não encontrado")
        await Psicologo.destroy({
            where:{
                id,
            }
        });
        res.status(204).send("");
    }
};
    

module.exports = PsicologoController;