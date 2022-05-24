const { validate, Joi } = require("express-validation");

const authAtendimentoValidator = validate({
  body: Joi.object({
    data_atendimento: Joi.date().greater("01-01-2000").required(),
    observacao: Joi.string().required(),
    psicologo_id: Joi.number().required(),
    paciente_id: Joi.number().required(),
  }),
});

module.exports = authAtendimentoValidator;
