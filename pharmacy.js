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
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(this.updateDrug.bind(this));
    return this.drugs;
  }

  updateDrug(drug) {
    if (drug.name == "Magic Pill") {
      return drug;
    }

    drug.expiresIn--;

    if (drug.name == "Herbal Tea") {
      if (drug.hasExpired()) {
        drug.increaseBenefitBy(2);
        return drug;
      }

      drug.increaseBenefitBy(1);
      return drug;
    }

    if (drug.name == "Fervex") {
      if (drug.hasExpired()) {
        drug.benefit = 0;
        return drug;
      }

      if (drug.expiresIn <= 5) {
        drug.increaseBenefitBy(3);
        return drug;
      }

      if (drug.expiresIn <= 10) {
        drug.increaseBenefitBy(2);
        return drug;
      }
    }

    if (drug.hasExpired()) {
      drug.benefit = Math.max(0, drug.benefit - 2);
      return drug;
    }

    drug.benefit = Math.max(0, drug.benefit - 1);
  }
}
