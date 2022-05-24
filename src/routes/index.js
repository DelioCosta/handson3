// solicita a biblioteca do express
const express = require("express");

// atalho para que o express consiga utilizar os métodos GET, POST...
const routes = express.Router();

// faz a requisição do Controller para esse arquivo

const AtendimentoController = require("../controllers/atendimento");
const PacienteController = require("../controllers/paciente");
const PsicologosController = require("../controllers/psicologo");

// faz a requisição dos validators

const authAtendimentoValidator = require("../validators/auth/atendimento");
const authPsicologoValidator = require("../validators/auth/psicologo");
const authPacienteValidator = require("../validators/auth/paciente");

//-------------------------------------------------------------------------------------------------------------------------
// Rotas de Atendimento.js

routes.get("/atendimento", AtendimentoController.index);
routes.post(
  "/atendimento",
  authAtendimentoValidator,
  AtendimentoController.store
);
routes.get("/atendimento/:id", AtendimentoController.show);
// routes.put("/atendimento/:id", authAtendimentoValidator, AtendimentoController.update);
// routes.delete("/atendimento/:id", AtendimentoController.destroy);

//-------------------------------------------------------------------------------------------------------------------------
// Rotas do paciente.js

routes.get("/paciente", PacienteController.index);
routes.post("/paciente", authPacienteValidator, PacienteController.store);
routes.get("/paciente/:id", PacienteController.show);
routes.put("/paciente/:id", authPacienteValidator, PacienteController.update);
routes.delete("/paciente/:id", PacienteController.destroy);

//-------------------------------------------------------------------------------------------------------------------------
// Rotas do psicologo.js

routes.get("/psicologo", PsicologosController.index);
routes.post("/psicologo", authPsicologoValidator, PsicologosController.store);
routes.get("/psicologo/:id", PsicologosController.show);
routes.put(
  "/psicologo/:id",
  authPsicologoValidator,
  PsicologosController.update
);
routes.delete("/psicologo/:id", PsicologosController.destroy);

//-------------------------------------------------------------------------------------------------------------------------

// Necessário para que o arquivo do controller receba as rotas
module.exports = routes;
