const add = require("./index.js");

test("Sum of empty string will be 0", () => {
  expect(add("")).toBe(0);
});

test("Sum of 1 will be 1", () => {
  expect(add("1")).toBe(1);
});

test("Sum of 1,5 will be 6", () => {
  expect(add("1,5")).toBe(6);
});

test("Sum of 1\n2, 3", () => {
  expect(add("1\n2, 3")).toBe(6);
});

test("Sum of //;\n1;2", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("Sum of negative not allowed", () => {
  expect(() => add("//;\n1;-2, -3")).toThrow(
    /negative numbers not allowed [-\s\n,]/,
  );
});
