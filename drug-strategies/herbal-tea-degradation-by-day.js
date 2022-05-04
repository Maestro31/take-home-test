export class HerbalTeaDegradationByDay {
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
