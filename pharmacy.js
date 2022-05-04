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

    if (drug.name != "Herbal Tea" && drug.name != "Fervex") {
      if (drug.benefit > 0) {
        drug.benefit--;
      }
    } else {
      if (drug.benefit < 50) {
        drug.benefit++;
        if (drug.name == "Fervex") {
          if (drug.expiresIn < 11) {
            if (drug.benefit < 50) {
              drug.benefit++;
            }
          }
          if (drug.expiresIn < 6) {
            if (drug.benefit < 50) {
              drug.benefit++;
            }
          }
        }
      }
    }

    drug.expiresIn = drug.expiresIn - 1;

    if (drug.expiresIn < 0) {
      if (drug.name != "Herbal Tea") {
        if (drug.name != "Fervex") {
          if (drug.benefit > 0) {
            drug.benefit--;
          }
        } else {
          drug.benefit = 0;
        }
      } else {
        if (drug.benefit < 50) {
          drug.benefit++;
        }
      }
    }
  }
}
