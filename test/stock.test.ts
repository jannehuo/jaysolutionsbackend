import { expect } from "chai";
import { createDataForOhlcChart } from "../utils/stock";
import stockData from "./testData/stockData";
import "mocha";

const expected = [
  {
    x: "2020-09-04",
    open: "120.0700",
    high: "123.7000",
    low: "110.8900",
    close: "120.9600",
  },
  {
    x: "2020-09-03",
    open: "126.9100",
    high: "128.8400",
    low: "120.5000",
    close: "120.8800",
  },
  {
    x: "2020-09-02",
    open: "137.5900",
    high: "137.9800",
    low: "127.0000",
    close: "131.4000",
  },
  {
    x: "2020-09-01",
    open: "132.7600",
    high: "134.8000",
    low: "130.5300",
    close: "134.1800",
  },
  {
    x: "2020-08-31",
    open: "127.5800",
    high: "131.0000",
    low: "126.0000",
    close: "129.0400",
  },
];

describe("Test stock functions", () => {
  it("should return data for ohlc chart", () => {
    const data = createDataForOhlcChart(stockData);
    expect(data).to.deep.equal(expected);
  });
});
