const handleListuser = (req, res, db) => {
  db.select("*")
    .from("users")
    .then(user => {
      res.json(user);
    })
    .catch(err => console.log(err));
};
module.exports = {
    handleListuser
}