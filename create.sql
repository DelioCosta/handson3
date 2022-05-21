use handson3;

CREATE TABLE psicologo (
	id INT PRIMARY KEY auto_increment,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    senha VARCHAR(200) NOT NULL,
    apresentacao VARCHAR(500) NOT NULL
);
CREATE TABLE paciente (
	id INT PRIMARY KEY auto_increment,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    idade date NOT NULL
);
CREATE TABLE atendimento (
	id INT PRIMARY KEY auto_increment,
  	data_atendimento DATETIME NOT NULL,
  	observacao VARCHAR(500) NOT NULL,
  	psicologo_id INT NOT NULL,
    paciente_id INT NOT NULL,
    CONSTRAINT FK_Psicologo FOREIGN KEY (psicologo_id) REFERENCES psicologo(id),
	CONSTRAINT FK_Paciente FOREIGN KEY (paciente_id) REFERENCES paciente(id)
);

INSERT INTO psicologo (nome, email, senha, apresentacao) VALUES ('João', 'joao@gmail.com', '123456', 'Oi, eu sou o psicólogo João');
INSERT INTO psicologo (nome, email, senha, apresentacao) VALUES ('Maria', 'maria@gmail.com', '123456', 'Oi, eu sou o psicólogo Maria');
INSERT INTO psicologo (nome, email, senha, apresentacao) VALUES ('Marcio', 'marcio@gmail.com', '123456', 'Oi, eu sou o psicólogo Marcio');
INSERT INTO psicologo (nome, email, senha, apresentacao) VALUES ('Gabriela', 'gabriela@gmail.com', '123456', 'Oi, eu sou o psicólogo Gabriela');

INSERT INTO paciente (nome, email, idade) VALUES ('Delio', 'delio@gmail.com', 25/07/1994);
INSERT INTO paciente (nome, email, idade) VALUES ('Pedro', 'pedro@gmail.com', 05/05/1993);
INSERT INTO paciente (nome, email, idade) VALUES ('Thais', 'thais@gmail.com', 12/10/1990);
INSERT INTO paciente (nome, email, idade) VALUES ('Joana', 'joana@gmail.com', 23/01/1995);

INSERT INTO atendimento (observacao, psicologo_id, paciente_id, data_atendimento) VALUES ('Observacao de teste do agendamento 1', 1 , 1, '2022-05-21T15:32:06.427');
INSERT INTO atendimento (observacao, psicologo_id, paciente_id, data_atendimento) VALUES ('Observacao de teste do agendamento 2', 1 , 2, '2022-04-20T10:15:08.427');
INSERT INTO atendimento (observacao, psicologo_id, paciente_id, data_atendimento) VALUES ('Observacao de teste do agendamento 3', 2 , 3, '2022-03-19T12:22:06.427');
INSERT INTO atendimento (observacao, psicologo_id, paciente_id, data_atendimento) VALUES ('Observacao de teste do agendamento 4', 2 , 4, '2022-05-18T18:32:41.427');
INSERT INTO atendimento (observacao, psicologo_id, paciente_id, data_atendimento) VALUES ('Observacao de teste do agendamento 5', 3 , 1, '2022-05-17T08:00:00.427');
INSERT INTO atendimento (observacao, psicologo_id, paciente_id, data_atendimento) VALUES ('Observacao de teste do agendamento 6', 3 , 3, '2022-05-16T20:50:00.427');
INSERT INTO atendimento (observacao, psicologo_id, paciente_id, data_atendimento) VALUES ('Observacao de teste do agendamento 7', 4 , 2, '2022-05-01T16:47:01.427');
INSERT INTO atendimento (observacao, psicologo_id, paciente_id, data_atendimento) VALUES ('Observacao de teste do agendamento 8', 4 , 4, '2022-04-21T11:02:35.427');