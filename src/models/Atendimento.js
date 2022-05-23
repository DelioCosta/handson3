const { DataTypes } = require("sequelize");

const db = require("../database");
const Psicologo = require("./Psicologo");
const Paciente = require("./Paciente");

const Atendimento = db.define(
  "Atendimento",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_atendimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    psicologo_id: {
      type: DataTypes.INTEGER,
      References: {
        model: Psicologo,
        key: "id",
      },
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      References: {
        model: Paciente,
        key: "id",
      },
    },
  },
  { tableName: "atendimento", timestamps: false, underscored: true }
);

module.exports = Atendimento;
