const { validate, Joi } = require("express-validation");

const authLoginValidator = validate({
  body: Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().required(),
  }),
});

module.exports = authLoginValidator;
