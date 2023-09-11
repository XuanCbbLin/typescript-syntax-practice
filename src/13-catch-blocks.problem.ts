import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
    // method 1. use any type
  } catch (e: any) {
    return e.message;
  }

  // method 2. use as type assertion
  // } catch (e) {
  //   return (e as Error).message;
  // }

  // method 3. use type guard
  // } catch (e) {
  //   if (e instanceof Error) {
  //     return e.message;
  //   }
  // }

  // method 4. use unknown type
  // } catch (e: unknown) {
  //   if (e instanceof Error) {
  //     return e.message;
  //   }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
