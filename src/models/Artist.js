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
    name: { type: DataTypes.STRING(50), field: "title" },
    origin: { type: DataTypes.STRING(50), field: "origin" },
    genre: { type: DataTypes.STRING(50), field: "genre" },
    label: { type: DataTypes.STRING(50), field: "label" },
    found: { type: DataTypes.STRING(10), field: "found" },
    status: { type: DataTypes.STRING(10), field: "status" },
  },
  { timestamps: false, tableName: "artists" }
);

module.exports = Artist;
