/**
 * Centralized, deterministic business calculations.
 * Monetary values are represented in integer poisha to avoid floating point drift.
 * Quantities use integer base units (e.g. ml, gram, piece) where conversion is configured.
 */
export type DsrDayInput = {
  grossSalesPoisha: number;
  damageValuePoisha: number;
  cashDepositedPoisha: number;
  openingDuePoisha: number;
  previousAdjustmentsPoisha?: number;
};

export type DsrDaySummary = {
  totalSalesPoisha: number;
  damageValuePoisha: number;
  netSalesPoisha: number;
  cashDepositedPoisha: number;
  todayDuePoisha: number;
  previousDuePoisha: number;
  totalDuePoisha: number;
};

function assertNonNegativeInteger(name: string, value: number): void {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new Error(`${name} must be a non-negative safe integer in poisha.`);
  }
}

export function calculateDsrDay(input: DsrDayInput): DsrDaySummary {
  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined) assertNonNegativeInteger(key, value);
  }
  if (input.damageValuePoisha > input.grossSalesPoisha) {
    throw new Error("Damage value cannot exceed gross sales.");
  }
  const netSalesPoisha = input.grossSalesPoisha - input.damageValuePoisha;
  const previousDuePoisha = input.openingDuePoisha;
  const todayDuePoisha = Math.max(
    0,
    netSalesPoisha - input.cashDepositedPoisha + (input.previousAdjustmentsPoisha ?? 0)
  );
  return {
    totalSalesPoisha: input.grossSalesPoisha,
    damageValuePoisha: input.damageValuePoisha,
    netSalesPoisha,
    cashDepositedPoisha: input.cashDepositedPoisha,
    todayDuePoisha,
    previousDuePoisha,
    totalDuePoisha: previousDuePoisha + todayDuePoisha
  };
}

export function addMoney(...values: number[]): number {
  values.forEach((v, i) => assertNonNegativeInteger(`value[${i}]`, v));
  const total = values.reduce((a, b) => a + b, 0);
  if (!Number.isSafeInteger(total)) throw new Error("Money total exceeds safe integer range.");
  return total;
}

export function convertQuantity(
  quantity: number,
  fromFactorToBase: number
): number {
  if (!Number.isFinite(quantity) || quantity < 0 ||
      !Number.isFinite(fromFactorToBase) || fromFactorToBase <= 0) {
    throw new Error("Invalid quantity conversion.");
  }
  const base = quantity * fromFactorToBase;
  if (!Number.isSafeInteger(Math.round(base))) {
    throw new Error("Converted quantity must resolve to a whole base unit.");
  }
  return Math.round(base);
}

export function calculateStock(
  opening: number,
  received: number,
  allocatedIn: number,
  allocatedOut: number,
  sold: number,
  returned: number,
  damaged: number,
  adjustedIn = 0,
  adjustedOut = 0
): number {
  const vals = [opening, received, allocatedIn, allocatedOut, sold, returned, damaged, adjustedIn, adjustedOut];
  vals.forEach((v, i) => assertNonNegativeInteger(`stock[${i}]`, v));
  const closing = opening + received + allocatedIn - allocatedOut - sold + returned - damaged + adjustedIn - adjustedOut;
  if (closing < 0) throw new Error("Insufficient stock: closing stock would be negative.");
  return closing;
}

export function formatBDT(poisha: number): string {
  if (!Number.isSafeInteger(poisha)) throw new Error("Invalid money value.");
  return new Intl.NumberFormat("bn-BD", {
    style: "currency", currency: "BDT", maximumFractionDigits: 2
  }).format(poisha / 100);
}
