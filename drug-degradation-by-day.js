import { MagicPillDegradationByDay } from "./drug-strategies/magic-pill-degradation-by-day";
import { FervexDegradationByDay } from "./drug-strategies/fervex-degradation-by-day";
import { HerbalTeaDegradationByDay } from "./drug-strategies/herbal-tea-degradation-by-day";
import { DefaultDegradationByDay } from "./drug-strategies/default-degradation-by-day";
import { DafalganDegradationByDay } from "./drug-strategies/dafalgan-degradation-by-day";

const strategies = {
  "Magic Pill": new MagicPillDegradationByDay(),
  "Herbal Tea": new HerbalTeaDegradationByDay(),
  Dafalgan: new DafalganDegradationByDay(),
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
