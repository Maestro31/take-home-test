export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
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

    if (drug.name == "Herbal Tea" || drug.name == "Fervex") {
      drug.benefit = Math.min(50, drug.benefit + 1);

      if (drug.name == "Herbal Tea") {
        if (drug.expiresIn < 0) {
          drug.benefit = Math.min(50, drug.benefit + 1);
          return drug;
        }
      }

      if (drug.name == "Fervex") {
        if (drug.expiresIn <= 10) {
          drug.benefit = Math.min(50, drug.benefit + 1);
        }
        if (drug.expiresIn <= 5) {
          drug.benefit = Math.min(50, drug.benefit + 1);
        }

        if (drug.expiresIn < 0) {
          drug.benefit = 0;
        }

        return drug;
      }
    } else {
      drug.benefit = Math.max(0, drug.benefit - 1);
    }

    if (drug.expiresIn < 0) {
      drug.benefit = Math.max(0, drug.benefit - 1);
    }
  }
}
