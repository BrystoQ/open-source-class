import { DiceTypeInterface } from "./DiceType.interface";

class Dice {
  diceTypes: DiceTypeInterface;
  constructor() {
    this.diceTypes = {
      6: { sides: 6, name: "6-sided dice" },
      10: { sides: 10, name: "10-sided dice" },
      20: { sides: 20, name: "20-sided dice" },
      100: { sides: 100, name: "100-sided dice" },
    };
  }

  roll(diceType: keyof DiceTypeInterface): void {
    const selectedDice = this.diceTypes[diceType];
    if (!selectedDice) {
      console.log("Invalid dice type. Available types are: 6, 10, 20, 100.");
      return;
    }

    const { sides, name } = selectedDice;
    const result = Math.floor(Math.random() * sides) + 1;
    console.log(`Rolled a ${name} and got: ${result}`);
  }
}

export default Dice;
