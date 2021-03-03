const express = require("express");
const cors = require("cors");
const webhook = require("webhook-discord");

const app = express();
const Hook = new webhook.Webhook("https://discord.com/api/webhooks/816775080683896883/mk1r1FmIW1YbFbKMcYz6zXh_UL8rtIQm0aTSeIWSu34o067Ao_2rD4k6SAKheQ1Fni8L")

app.use(express.json());
app.use(cors());

app.get("/webhook", (request, response) => {
  const { message } = request.query;
  console.log(message)
  Hook.warn("Redis", message.replace('||||', '\r\n')); 

  return response.send();
});

module.exports = app;