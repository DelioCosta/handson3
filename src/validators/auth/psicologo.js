const { validate, Joi } = require("express-validation");

const authPsicologoValidator = validate({
  body: Joi.object({
    nome: Joi.string().max(50).required(),
    email: Joi.string().email().required(),
    senha: Joi.string().required(),
    apresentacao: Joi.string().max(500).required(),
  }),
});

module.exports = authPsicologoValidator;
