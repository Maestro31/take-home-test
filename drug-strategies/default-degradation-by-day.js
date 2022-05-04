export class DefaultDegradationByDay {
  apply(drug) {
    drug.expiresIn--;

    if (drug.hasExpired()) {
      drug.decreaseBenefitBy(2);
      return drug;
    }

    drug.decreaseBenefitBy(1);
  }
}
