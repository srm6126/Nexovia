import { describe, expect, it } from "vitest";
import { calculateDsrDay, calculateStock, convertQuantity } from "./calculations";

describe("DSR calculation", () => {
  it("subtracts damage exactly once", () => {
    const r = calculateDsrDay({
      grossSalesPoisha: 100000,
      damageValuePoisha: 10000,
      cashDepositedPoisha: 50000,
      openingDuePoisha: 20000
    });
    expect(r.netSalesPoisha).toBe(90000);
    expect(r.todayDuePoisha).toBe(40000);
    expect(r.totalDuePoisha).toBe(60000);
  });
  it("rejects damage greater than sales", () => {
    expect(() => calculateDsrDay({
      grossSalesPoisha: 1000, damageValuePoisha: 1001,
      cashDepositedPoisha: 0, openingDuePoisha: 0
    })).toThrow();
  });
});

describe("stock and unit conversion", () => {
  it("calculates carry forward stock", () => {
    expect(calculateStock(100, 20, 0, 0, 30, 5, 2)).toBe(93);
  });
  it("converts one litre to 1000 ml when factor is 1000", () => {
    expect(convertQuantity(1, 1000)).toBe(1000);
  });
  it("rejects negative closing stock", () => {
    expect(() => calculateStock(2,0,0,0,5,0,0)).toThrow();
  });
});
