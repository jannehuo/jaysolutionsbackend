import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const PORT = 8000;
const key = "D0U4RN15LQUG6OIM";

app.use(bodyParser.json());
app.get("/data", (req, res) => {
  axios
    .get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${key}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
