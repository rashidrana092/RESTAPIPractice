const getUsersList = (async = (req, res) => {
  res.status(200).json({ msg: "this is users list" });
});

module.exports = { getUsersList };
