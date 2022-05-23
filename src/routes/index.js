// solicita a biblioteca do express
const express = require('express');

// atalho para que o express consiga utilizar os métodos GET, POST...
const routes = express.Router();

// faz a requisição do Controller para esse arquivo

const AtendimentoController = require('../controllers/atendimento');
const PacienteController = require('../controllers/paciente');
const PsicologosController = require('../controllers/psicologo');


//-------------------------------------------------------------------------------------------------------------------------
// Rotas de Atendimento.js

routes.get("/atendimento", AtendimentoController.index);
routes.post("/atendimento", AtendimentoController.store);
routes.get("/atendimento/:id", AtendimentoController.show);
routes.put("/atendimento/:id", AtendimentoController.update);
routes.delete("/atendimento/:id", AtendimentoController.destroy);

//-------------------------------------------------------------------------------------------------------------------------
// Rotas do paciente.js

routes.get("/paciente", PacienteController.index);
routes.post("/paciente", PacienteController.store);
routes.get("/paciente/:id", PacienteController.show);
routes.put("/paciente/:id", PacienteController.update);
routes.delete("/paciente/:id", PacienteController.destroy);

//-------------------------------------------------------------------------------------------------------------------------
// Rotas do psicologo.js

routes.get("/psicologo", PsicologosController.index);
routes.post("/psicologo", PsicologosController.store);
routes.get("/psicologo/:id", PsicologosController.show);
routes.put("/psicologo/:id", PsicologosController.update);
routes.delete("/psicologo/:id", PsicologosController.destroy);

//-------------------------------------------------------------------------------------------------------------------------
// Rotas da reserva.js

// routes.get("/reservas", ReservasController.index);
// routes.post("/reservas", ReservasController.store);
// routes.get("/reservas/:id", ReservasController.show);
// routes.put("/reservas/:id", ReservasController.update);
// routes.delete("/reservas/:id", ReservasController.destroy);

//-------------------------------------------------------------------------------------------------------------------------


// Necessário para que o arquivo do controller receba as rotas
module.exports = routes;