import { get } from "../utils";

// TODO: Better interface
interface MetaData {
  [key: string]: string;
}

interface Stock {
  [key: string]: string;
}

interface TimeSeries {
  [key: string]: Stock;
}

interface OhlcData {
  "Meta Data": MetaData;
  "Time Series (Daily)": TimeSeries;
}

// https://api.highcharts.com/highstock/series.ohlc.data
export const createDataForOhlcChart = (data: OhlcData) => {
  const timeSeries = data["Time Series (Daily)"];
  const dateKeys = Object.keys(timeSeries);
  const ohlcChartData = dateKeys.map((key) => ({
    x: key,
    open: get(timeSeries[key], "1. open"),
    high: get(timeSeries[key], "2. high"),
    low: get(timeSeries[key], "3. low"),
    close: get(timeSeries[key], "4. close"),
  }));
  return ohlcChartData;
};
