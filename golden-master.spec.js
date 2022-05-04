import fs from "fs";
import { Drug, Pharmacy } from "./pharmacy";

describe("Gloden test", () => {
  it("output should be the same", () => {
    const data = fs.readFileSync("./output.txt", "utf-8");

    const originalOutput = JSON.parse(`[${data}]`);

    const drugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 5, 40),
      new Drug("Magic Pill", 15, 40)
    ];

    const trial = new Pharmacy(drugs);

    const log = [];

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      log.push(JSON.parse(JSON.stringify(trial.updateBenefitValue())));
    }

    expect(originalOutput).toStrictEqual(log);
  });
});
