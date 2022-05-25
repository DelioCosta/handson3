const express = require("express");

const routes = require("./routes");
const db = require("./database");
const handleError = require("./middlewares/errorHandler");
// faz a requisição do auth do token jwt
const authMiddlewares = require("./middlewares/auth");

const app = express();

db.hasConnection();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authMiddlewares.unless({ path: ["/login", { url: "/psicologo", methods: 'POST' }]}));
//no unless são especificadas as rotas que o middleware irá ignorar, porém no caso da rota de psicologos somente para method post 

app.use(routes);
app.use(handleError);

app.listen(port, () => {
  console.log(`Servidor executando na porta: ${port}`);
});
