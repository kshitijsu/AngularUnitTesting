import { addition } from "./addition";

describe("Addition Testing", () => {
  it("Testing for addition", () => {
    // addition(10,15) === 25;
    expect(addition(10, 15)).toBe(25);
  });
});
