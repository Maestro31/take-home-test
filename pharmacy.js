import { DrugDegradationByDay } from "./drug-degradation-by-day";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  hasExpired() {
    return this.expiresIn < 0;
  }

  increaseBenefitBy(count) {
    this.benefit = Math.min(50, this.benefit + count);
  }

  decreaseBenefitBy(count) {
    this.benefit = Math.max(0, this.benefit - count);
  }
}
export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => new DrugDegradationByDay().apply(drug));
    return this.drugs;
  }
}
