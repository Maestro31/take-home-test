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

export class DrugDegradationByDay {
  apply(drug) {
    const strategy = strategies[drug.name];

    if (!strategy) {
      return new DefaultDegradationByDay().apply(drug);
    }

    return strategy.apply(drug);
  }
}
