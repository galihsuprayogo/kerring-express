exports.createUser = (req, res, next) => {
  const {email, password} = req.body;
  res.json({ email: email, password: password });
};

exports.getUser = (req, res, next) => {
  res.json({
    message: "Get all users",
    data: {
      email: "gsy@gmail.com",
      token: "asdasdsafdsf",
    },
  });
};
