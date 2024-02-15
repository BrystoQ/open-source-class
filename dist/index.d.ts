interface DiceTypeInterface {
    6: {
        sides: number;
        name: string;
    };
    10: {
        sides: number;
        name: string;
    };
    20: {
        sides: number;
        name: string;
    };
    100: {
        sides: number;
        name: string;
    };
}

declare class Dice {
    diceTypes: DiceTypeInterface;
    constructor();
    roll(diceType: keyof DiceTypeInterface): void;
}

export { Dice as default };
