import { get, converToFloat, converToUTC } from "../utils";

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
// value keys in chart: x,open,high,low,close
export const createDataForOhlcChart = (data: OhlcData) => {
  const timeSeries = data["Time Series (Daily)"];
  const dateKeys = Object.keys(timeSeries);
  const ohlcChartData = dateKeys.map((dateKey) => [
    converToUTC(dateKey),
    converToFloat(get(timeSeries[dateKey], "1. open")),
    converToFloat(get(timeSeries[dateKey], "2. high")),
    converToFloat(get(timeSeries[dateKey], "3. low")),
    converToFloat(get(timeSeries[dateKey], "4. close")),
  ]);
  // Reverse the array so that it starts from oldest data points
  return ohlcChartData.reverse();
};
