const { Psicologo } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../configs/secret');

const AuthController = {
    login: async (req, res) => {
        const { email, senha} = req.body;

        //busca o usuário utilizando o email
        const usuario = await Psicologo.findOne({
            where: { email } 
        });

        //verifica se encontrou o usuário, e caso tenha encontrado verifica se a senha está correta
        if(!usuario || !bcrypt.compareSync(senha, usuario.senha)){
            return res.status(401).json('E-mail ou senha inválido, verifique e tente novamente”');
        }

        //cria a const user com as informações do usuário, porém sem a senha 
        const { senha: _senha, ...user} = usuario;

        //geração do token jwt
        const token = jwt.sign(user, secret.key);
        
        return res.json({token});
    }
}

module.exports = AuthController;