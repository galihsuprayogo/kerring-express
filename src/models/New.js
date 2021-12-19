const dbConnection = require("../config/database");
const { DataTypes } = require("sequelize");
const Artist = require("../models/Artist");

const New = dbConnection.define(
  "news",
  {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      field: "id",
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    headline: {
      type: DataTypes.STRING(500),
      field: "headline",
      allowNull: false,
    },
    writer: { type: DataTypes.STRING(100), field: "writer", allowNull: false },
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.DATEONLY,
      field: "date",
      allowNull: true,
    },
    content: {
      type: DataTypes.STRING(10000),
      field: "content",
      allowNull: false,
    },
    read: {
      type: DataTypes.NUMBER,
      defaultValue: 0,
      allowNull: false
    },
    image: { type: DataTypes.STRING(100), field: "image", allowNull: false },
    path: { type: DataTypes.STRING(200), field: "path", allowNull: false },
    artistId: {
      type: DataTypes.UUIDV4,
      field: "artistId",
      allowNull: true,
      references: { model: Artist, key: "id" },
    },
  },
  { timestamps: false, tableName: "news" }
);

module.exports = New;
