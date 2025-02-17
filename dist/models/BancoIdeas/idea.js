"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_oracle_1 = __importDefault(require("sequelize-oracle"));
const connection_1 = __importDefault(require("../../db/connection"));
const sectionBi_1 = __importDefault(require("./sectionBi"));
const Idea = connection_1.default.define("Idea", {
    codigo: {
        type: sequelize_oracle_1.default.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: sequelize_oracle_1.default.UUIDV4,
    },
    name: { type: sequelize_oracle_1.default.STRING, required: true, allowNull: false },
    state: { type: sequelize_oracle_1.default.BOOLEAN, allowNull: false, defaultValue: true },
}, {
    underscoded: true,
    paranoid: true,
});
Idea.hasOne(sectionBi_1.default, { foreignKey: "IdeaId" });
exports.default = Idea;
//# sourceMappingURL=idea.js.map