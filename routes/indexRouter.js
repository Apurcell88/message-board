const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString(),
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date().toLocaleString(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const { messageText, userName } = req.body;

  messages.push({ text: messageText, user: userName, added: new Date() });
  res.redirect("/");
});

module.exports = indexRouter;
