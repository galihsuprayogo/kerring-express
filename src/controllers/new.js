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
      artistId: artist.get().id,
    });
    res.status(200).send({ message: "Create new sucessfully" });
  } catch (error) {
    console.log('error news ', error)
    res.status(401).send({ message: "failed" });
  }
};

exports.getAllNew = async (req, res, next) => {
  try {
    const news = await New.findAll({
      order: [["date", "DESC"]],
      include:{
        model: Artist,
        as: 'artist',
        attributes: ["name"]
      }
    });
    res.status(200).send({ message: "get sucessfully", data: news });
  } catch (error) {
   console.log(error)
    res.status(401).send({ message: "failed" });
  }
};

exports.updateReadNew = async (req, res, next) => {
  const {idNews} = req.body;
 try {
  const news = await New.findOne({
    attributes: ["read"],
    where: { id : idNews },
  });
  const newRead = news.get().read + 1;
  await New.update({read: newRead}, {where: {
    id: idNews
  }})
  res.status(200).send({ message: "update sucessfully"});
 } catch (error) {
  console.log(error)
  res.status(401).send({ message: "failed" });
 }
}

exports.getAllByRead = async (req, res, next) => {
  try {
    const news = await New.findAll({
      order: [["read", "DESC"]],
      include:{
        model: Artist,
        as: 'artist',
        attributes: ["name"]
      }
    });
    res.status(200).send({ message: "get sucessfully", data: news });
  } catch (error) {
   console.log(error)
    res.status(401).send({ message: "failed" });
  }
}