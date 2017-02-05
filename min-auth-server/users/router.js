module.exports = function (router, knex) {
  var signIn = function (req, res) {
    res.status(200).json({ message: "To-do: implement this..." });
  }

  var signUp = function (req, res) {
    res.status(200).json({ message: "To-do: implement this..." });
  }

  var signOut = function (req, res) {
    res.status(200).json({ message: "To-do: implement this..." });
  }

  router.post('/users/sign-in', signIn);
  router.post('/users/sign-up', signUp)
  router.post('/users/sign-out', signOut)

  return router;
}
