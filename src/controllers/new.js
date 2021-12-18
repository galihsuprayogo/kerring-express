const Artist = require("../models/Artist");
const New = require("../models/New");

exports.createNew = async (req, res, next) => {
  const { name, headline, writer, date, content } = req.body;
  try {
    const artist = await Artist.findOne({
      attributes: ["id"],
      where: { name: name },
    });
    await New.create({
      headline: headline,
      writer: writer,
      date: date,
      content: content,
      image: req.file.filename,
      path: req.file.path,
      idArtist: artist.get().id,
    });
    res.status(200).send({ message: "Create new sucessfully" });
  } catch (error) {
    res.status(401).send({ message: "failed" });
  }
};

exports.getAllNew = async (req, res, next) => {
  try {
    const news = await New.findAll({
      order: [["date", "DESC"]],
    });
    res.status(200).send({ message: "get sucessfully", data: news });
  } catch (error) {
   console.log(error)
    res.status(401).send({ message: "failed" });
  }
};
