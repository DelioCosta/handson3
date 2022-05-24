const { validate, Joi } = require("express-validation");

const authPacienteValidator = validate({
  body: Joi.object({
    nome: Joi.string().max(50).required(),
    email: Joi.string().email().required(),
    idade: Joi.date().required(),
  }),
});

module.exports = authPacienteValidator;
