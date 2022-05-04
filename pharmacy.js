class MagicPillDegradationStrategy {
  apply(drug) {
    return drug;
  }
}

class DefaultDegradationStrategy {
  apply(drug) {
    drug.expiresIn--;

    if (drug.hasExpired()) {
      drug.decrementBenefit(2);
      return drug;
    }

    drug.decrementBenefit();
    return drug;
  }
}

class FervexDegradationStrategy {
  apply(drug) {
    drug.expiresIn--;

    if (drug.expiresIn < 0) {
      drug.benefit = 0;
      return drug;
    }

    if (drug.expiresIn <= 5) {
      drug.incrementBenefit(3);
      return drug;
    }

    if (drug.expiresIn <= 10) {
      drug.incrementBenefit(2);
      return drug;
    }
  }
}

class HerbalTeaDegradationStrategy {
  apply(drug) {
    drug.expiresIn--;

    if (drug.hasExpired()) {
      drug.incrementBenefit(2);
      return drug;
    }

    drug.incrementBenefit();
    return drug;
  }
}

class DrugDegradation {
  constructor() {
    this.strategies = {
      "Magic Pill": new MagicPillDegradationStrategy(),
      Fervex: new FervexDegradationStrategy(),
      "Herbal Tea": new HerbalTeaDegradationStrategy(),
      Dafalgan: new DafalganDegradationStrategy(),
      default: new DefaultDegradationStrategy()
    };
  }

  apply(drug) {
    const strategy = this.strategies[drug.name];

    if (!strategy) {
      return this.strategies.default.apply(drug);
    }

    return strategy.apply(drug);
  }
}

class DafalganDegradationStrategy {
  apply(drug) {
    drug.expiresIn--;

    drug.decrementBenefit(2);
    return drug;
  }
}

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decrementBenefit(count = 1) {
    this.benefit = Math.max(0, this.benefit - count);
  }

  incrementBenefit(count = 1) {
    this.benefit = Math.min(50, this.benefit + count);
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
    this.drugs.forEach(drug => new DrugDegradation().apply(drug));

    return this.drugs;
  }
}
