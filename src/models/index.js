const Atendimento = require("./Atendimento");
const Paciente = require("./Paciente");
const Psicologo = require("./Psicologo");


Paciente.hasMany(Atendimento);
Psicologo.hasMany(Atendimento);

Atendimento.belongsTo(Paciente);
Atendimento.belongsTo(Psicologo);


module.exports = {
  Atendimento,
  Paciente,
  Psicologo
};
