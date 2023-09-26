import { incrementString } from "./can-you-get-the-loop";

test("increments string", () => {
  expect(incrementString("foo")).toBe("foo1");
  expect(incrementString("foobar23")).toBe("foobar24");
  expect(incrementString("foo0042")).toBe("foo0043");
  expect(incrementString("fo99obar99")).toBe("fo99obar100");
  expect(incrementString("1")).toBe("2");
  expect(incrementString("009")).toBe("010");
  expect(incrementString("foobar00999")).toBe("foobar01000");
  expect(incrementString("foobar000")).toBe("foobar001");
});
