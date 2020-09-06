import { expect } from "chai";
import { createDataForChart } from "../utils/stock";
import "mocha";

describe("First test", () => {
  it("should return true", () => {
    const data = createDataForChart({});
    expect(data).to.equal(1);
  });
});
