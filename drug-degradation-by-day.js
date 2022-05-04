import { MagicPillDegradationByDay } from "./drug-strategies/magic-pill-degradation-by-day";
import { FervexDegradationByDay } from "./drug-strategies/fervex-degradation-by-day";

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
