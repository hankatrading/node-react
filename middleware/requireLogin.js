module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ rc: 401, error: "You must logged in" });
  }

  next();
};
