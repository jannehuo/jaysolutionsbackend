import { expect } from "chai";
import { createDataForOhlcChart } from "../utils/stock";
import stockData from "./testData/stockData";
import "mocha";

const expected = [
  [1601769600000, 120.07, 123.7, 110.89, 120.96],
  [1601683200000, 126.91, 128.84, 120.5, 120.88],
  [1601596800000, 137.59, 137.98, 127.0, 131.4],
  [1601510400000, 132.76, 134.8, 130.53, 134.18],
  [1601510400000, 127.58, 131.0, 126.0, 129.04],
];

describe("Test stock functions", () => {
  it("should return data for ohlc chart", () => {
    const data = createDataForOhlcChart(stockData);
    expect(data).to.deep.equal(expected);
  });
});
