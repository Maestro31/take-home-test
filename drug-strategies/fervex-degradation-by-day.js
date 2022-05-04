export class FervexDegradationByDay {
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
