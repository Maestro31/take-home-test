export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  hasExpired() {
    return this.expiresIn < 0;
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
        drug.benefit = Math.min(50, drug.benefit + 2);
        return drug;
      }

      drug.benefit = Math.min(50, drug.benefit + 1);
      return drug;
    }

    if (drug.name == "Fervex") {
      if (drug.hasExpired()) {
        drug.benefit = 0;
        return drug;
      }

      if (drug.expiresIn <= 5) {
        drug.benefit = Math.min(50, drug.benefit + 3);
        return drug;
      }

      if (drug.expiresIn <= 10) {
        drug.benefit = Math.min(50, drug.benefit + 2);
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
