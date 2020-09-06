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
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=compact&apikey=${key}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
