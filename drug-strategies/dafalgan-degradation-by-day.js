export class DafalganDegradationByDay {
  apply(drug) {
    drug.expiresIn--;
    drug.decreaseBenefitBy(2);
    return drug;
  }
}
