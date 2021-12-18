const Artist = require("../models/Artist");
const path = require("path");
const fs = require("fs");

exports.createArtist = async (req, res, next) => {
  const { name, origin, genre, label, found, status } = req.body;
  try {
    await Artist.create({
      name: name,
      origin: origin,
      genre: genre,
      label: label,
      found: found,
      status: status,
      image: req.file.filename,
      path: req.file.path,
    });
    res.status(200).send({ message: "Create new artist sucessfully" });
  } catch (error) {
    res.status(401).send({ message: "failed" });
  }
};

exports.deleteImage = (req, res, next) => {
  // let dir = "../../public/images";
  // console.log("delete path => ", req.imagePath);
  fs.unlinkSync(req.imagePath);
  res.status(200).send({ message: "Create new artist sucessfully" });
};

exports.getArtist = (req, res, next) => {
  res.json({
    message: "Get all users",
    data: {
      email: "gsy@gmail.com",
      token: "asdasdsafdsf",
    },
  });
};
