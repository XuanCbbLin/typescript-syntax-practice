import { expect, it } from "vitest";

const coerceAmount = (amount: number | { amount: number }) => {
  
  // Method 1:
  if(typeof amount === "object") {
    return amount.amount;
  }

  return amount

  // Method 2:
  // if (typeof amount === 'number') {
  //   return amount;
  // }

  // return amount.amount;

};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
