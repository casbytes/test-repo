import { it, expect, describe } from "vitest";
describe("Test suite 1 ", () => {
  it("should work", () => {
    expect(1).toBe(1);
  });

  it("should work", () => {
    expect(1).toBe(2);
  });
});

describe("Test suite 2 ", () => {
  it("should work", () => {
    expect(1).toBe(1);
  });

  it("should work", () => {
    expect(1).toBe(4);
  });
});
