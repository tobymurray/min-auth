const routes = require('express').Router();

routes.post('/api/users/sign-in', (req, res) => {
  res.status(200).json({ message: "To-do: implement this..." });
});

routes.post('/api/users/sign-up', (req, res) => {
  res.status(200).json({ message: "To-do: implement this..." });
});

routes.post('/api/users/sign-out', (req, res) => {
  res.status(200).json({ message: "To-do: implement this..." });
});

module.exports = routes;