const { Atendimento, Paciente, Psicologo } = require("../models/");

const DashboardController = {
    // retorna o total de pacientes
    pacientes: async (req, res) => {
        const {count , rows} = await Paciente.findAndCountAll();
        console.log(count, rows);
        res.json(count);
    },
    
    // retorna o total de atendimentos
    atendimentos: async (req, res) => {
        const numeroAtendimentos = await Atendimento.findAndCountAll();
        res.json(numeroAtendimentos);
    },

    // retorna o total de psicólogos
    psicologos: async (req, res) => {
        const numeroPsicologos = await Psicologo.findAndCountAll();
        res.json(numeroPsicologos);
    },

    // retorna a média de atendimentos por psicólogo
    media: async (req, res) => {
        const numeroAtendimentos = await Atendimento.findAndCountAll();
        const numeroPsicologos = await Psicologo.findAndCountAll();
        const media = numeroAtendimentos/numeroPsicologos;
        res.json(media);
    }
};

module.exports = DashboardController;