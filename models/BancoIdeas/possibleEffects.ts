import Sequelize from "sequelize-oracle";

import db from "../../db/connection";

const possibleEffects = db.define(
  "possibleEffects",
  {
    codigo: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    description: { type: Sequelize.STRING, required: true, allowNull: false },
    problemDefinitionId: { type: Sequelize.UUID, required: true },
  },
  {
    underscoded: true,
    paranoid: true,
  }
);

export default possibleEffects;
