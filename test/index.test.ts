import { get } from "../utils";
import { expect } from "chai";
import "mocha";

describe("Test genral utility functions", () => {
  it("Test getting data from object", () => {
    const testObject = {
      foo: "bar",
    };
    const data = get(testObject, "foo");
    expect(data).to.equal("bar");
  });
});
