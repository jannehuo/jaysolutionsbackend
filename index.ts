import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getStockData } from "./utils/api";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());

app.get("/data", (req, res) => {
  getStockData(req, res);
});

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
