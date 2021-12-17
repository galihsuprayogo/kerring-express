const Artist = require("../models/Artist");

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
    });
    res.status(200).send({ message: "create new artist success" });
  } catch (error) {
    res.status(401).send({ message: "failed" });
  }
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
