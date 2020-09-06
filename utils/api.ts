import express from "express";
import axios from "axios";
import { API_KEY } from "../constants";
import { createDataForOhlcChart } from "../utils/stock";

export const loadData = (url: string) => {
  return axios
    .get(url)
    .then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error));
};

export const getStockData = (req: express.Request, res: express.Response) => {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=full&apikey=${API_KEY}`;
  loadData(url)
    .then((response) => {
      res.send(createDataForOhlcChart(response.data));
    })
    .catch((err) => {
      if (err.response) {
        res.sendStatus(err.response.status);
      } else if (err.request) {
        res.sendStatus(500);
      } else {
        res.sendStatus(500);
      }
    });
};
