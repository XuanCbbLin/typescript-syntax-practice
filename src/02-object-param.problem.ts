import { expect, it } from "vitest";

// use interface
interface AddTwoNumbersParams {
  first: number;
  second: number;
}

// or use type alias

// type AddTwoNumbersParams = {
//   first: number;
//   second: number;
// };

export const addTwoNumbers = (params: AddTwoNumbersParams) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
