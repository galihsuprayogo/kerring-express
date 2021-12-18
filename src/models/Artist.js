const dbConnection = require("../config/database");
const { DataTypes } = require("sequelize");

const Artist = dbConnection.define(
  "artists",
  {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      field: "id",
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING(50), field: "name", allowNull: false },
    origin: { type: DataTypes.STRING(50), field: "origin", allowNull: false },
    genre: { type: DataTypes.STRING(50), field: "genre", allowNull: false },
    label: { type: DataTypes.STRING(50), field: "label", allowNull: false },
    found: { type: DataTypes.STRING(10), field: "found", allowNull: false },
    status: { type: DataTypes.STRING(10), field: "status", allowNull: false },
  },
  { timestamps: false, tableName: "artists" }
);

module.exports = Artist;
