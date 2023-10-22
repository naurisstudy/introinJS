import { expect } from "chai";
import { NumbersValidator } from "../../app/numbers.js";
import { assert } from "chai";

describe("test 1  - is Number Even positive test", () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });
  it("should return true when provided with an even number", () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });
});

function getEvenNumbersFromArray(arrayOfNumbers) {
  if (
    Array.isArray(arrayOfNumbers) &&
    arrayOfNumbers.every((item) => typeof item === "number")
  ) {
    return arrayOfNumbers.filter((item) => item % 2 === 0);
  }
  throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
}

describe("test 2 - get Even Numbers From Array", () => {
  it("should return even numbers from the array", () => {
    const result = getEvenNumbersFromArray([1, 2, 3, 4, 5, 6]);
    assert.deepStrictEqual(result, [2, 4, 6]);
  });
});

function isAllNumbers(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers)) {
    throw new Error(`[${arrayOfNumbers}] is not an array`);
  }
  return arrayOfNumbers.every((n) => typeof n === "number");
}

describe("test 3 - isAllNumbers", () => {
  it("should return true for an array of numbers", () => {
    const result = isAllNumbers([1, 2, 3, 4, 5, 6]);
    assert.isTrue(result);
  });
});

class numVal {
  isInteger(n) {
    if (typeof n !== "number") {
      throw new Error(`[${n}] is not a number`);
    }
    return Number.isInteger(n);
  }
}

describe("test 4 - NumbersValidator", () => {
  const validator = new numVal();

  it("should return true for an integer", () => {
    const result = validator.isInteger(42);
    assert.isTrue(result);
  });

  it("should return false for a non-integer number", () => {
    const result = validator.isInteger(3.14);
    assert.isFalse(result);
  });
});
