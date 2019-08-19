const handleProfile = (req, res, db) => {
  const { id } = req.params;
  // database.users.forEach(user => {
  //   if (user.id === id) {
  //     return res.json(user);
  //   }
  // });
  // res.status(400).json("Not found");
  db.select("*")
    .from("users")
    .where({ id })
    .then(user => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("Not found");
      }
    })
    .catch(err => console.log(err));
};
module.exports = {
    handleProfile
}
