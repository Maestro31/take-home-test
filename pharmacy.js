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

    if (drug.name == "Herbal Tea" || drug.name == "Fervex") {
      drug.benefit = Math.min(50, drug.benefit + 1);

      if (drug.name == "Fervex") {
        if (drug.expiresIn <= 10) {
          drug.benefit = Math.min(50, drug.benefit + 1);
        }
        if (drug.expiresIn <= 5) {
          drug.benefit = Math.min(50, drug.benefit + 1);
        }
      }
    } else {
      drug.benefit = Math.max(0, drug.benefit - 1);
    }

    drug.expiresIn--;

    if (drug.expiresIn < 0) {
      if (drug.name == "Herbal Tea") {
        drug.benefit = Math.min(50, drug.benefit + 1);
      } else {
        if (drug.name == "Fervex") {
          drug.benefit = 0;
        } else {
          drug.benefit = Math.max(0, drug.benefit - 1);
        }
      }
    }
  }
}
