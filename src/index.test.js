import { it, expect, describe } from "vitest";
describe("Test suite 1 ", () => {
  it("should work 1", () => {
    expect(1).toEqual(1);
  });

  it("should work 2", () => {
    expect(1).toEqual(2);
  });
});

describe("Test suite 2 ", () => {
  it("should work 3", () => {
    expect(1).toEqual(1);
  });

  it("should work 4", () => {
    expect(1).toEqual(4);
  });
});
