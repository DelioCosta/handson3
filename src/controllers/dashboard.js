const { Atendimento, Paciente, Psicologo } = require("../models/");

const DashboardController = {
    // retorna o total de pacientes
    pacientes: async (req, res) => {
        const {count , rows} = await Paciente.findAndCountAll();
        res.json(count);
    },
    
    // retorna o total de atendimentos
    atendimentos: async (req, res) => {
        const {count , rows} = await Atendimento.findAndCountAll();
        res.json(count);
    },

    // retorna o total de psicólogos
    psicologos: async (req, res) => {
        const {count , rows} = await Psicologo.findAndCountAll();
        res.json(count);
    },

    // retorna a média de atendimentos por psicólogo
    media: async (req, res) => {
        const atendimentos = await Atendimento.findAndCountAll();
        const numeroAtendimentos = atendimentos.count;

        const psicologos = await Psicologo.findAndCountAll();
        const numeroPsicologos = psicologos.count;
        
        const media = numeroAtendimentos/numeroPsicologos;
        res.json(media);
    }
};

module.exports = DashboardController;