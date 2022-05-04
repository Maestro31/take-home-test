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

class DefaultDegradationByDay {
  apply(drug) {
    drug.expiresIn--;

    if (drug.hasExpired()) {
      drug.decreaseBenefitBy(2);
      return drug;
    }

    drug.decreaseBenefitBy(1);
  }
}

class MagicPillDegradationByDay {
  apply(drug) {
    return drug;
  }
}

class HerbalTeaDegradationByDay {
  apply(drug) {
    drug.expiresIn--;

    if (drug.hasExpired()) {
      drug.increaseBenefitBy(2);
      return drug;
    }

    drug.increaseBenefitBy(1);
    return drug;
  }
}

class FervexDegradationByDay {
  apply(drug) {
    drug.expiresIn--;

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
}

const strategies = {
  "Magic Pill": new MagicPillDegradationByDay(),
  "Herbal Tea": new HerbalTeaDegradationByDay(),
  Fervex: new FervexDegradationByDay()
};
class DrugDegradationByDay {
  apply(drug) {
    const strategy = strategies[drug.name];

    if (!strategy) {
      return new DefaultDegradationByDay().apply(drug);
    }

    return strategy.apply(drug);
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
      return new DrugDegradationByDay().apply(drug);
    }

    if (drug.name == "Herbal Tea") {
      return new DrugDegradationByDay().apply(drug);
    }

    if (drug.name == "Fervex") {
      return new DrugDegradationByDay().apply(drug);
    }

    return new DrugDegradationByDay().apply(drug);
  }
}
