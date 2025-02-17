import Sequelize from "sequelize-oracle";

import db from "../../db/connection";

const responsibleEntity = db.define(
    "responsibleEntity",
    {
        codigo: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
        },
        ideaAlternativeId: { type: Sequelize.UUID, allowNull: false },
        nameEPI: { type: Sequelize.STRING },
        leaderName: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        phone: { type: Sequelize.STRING },

    },
    {
        underscoded: true,
        paranoid: true,
    }
);

export default responsibleEntity;
