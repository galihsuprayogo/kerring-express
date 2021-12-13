
exports.createUser = (req, res, next) => {
               res.json({ email: "gsy@gmail.com", password: "123456" })
               next();
}

exports.getUser = (req, res, next) => {
               res.json({
                              message: 'Get all users',
                              data: {
                                             email: "gsy@gmail.com",
                                             token: "asdasdsafdsf"
                              }
               })
               next();
}