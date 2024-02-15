"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var open_source_class_exports = {};
__export(open_source_class_exports, {
  default: () => open_source_class_default
});
module.exports = __toCommonJS(open_source_class_exports);
var Dice = class {
  constructor() {
    this.diceTypes = {
      6: { sides: 6, name: "6-sided dice" },
      10: { sides: 10, name: "10-sided dice" },
      20: { sides: 20, name: "20-sided dice" },
      100: { sides: 100, name: "100-sided dice" }
    };
  }
  roll(diceType) {
    const selectedDice = this.diceTypes[diceType];
    if (!selectedDice) {
      console.log("Invalid dice type. Available types are: 6, 10, 20, 100.");
      return;
    }
    const { sides, name } = selectedDice;
    const result = Math.floor(Math.random() * sides) + 1;
    console.log(`Rolled a ${name} and got: ${result}`);
  }
};
var open_source_class_default = Dice;
