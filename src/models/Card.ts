import { faceValues, Suit } from './Enum';

export class Card {
    public readonly suit: number;
    public readonly faceValue: number;

    constructor(faceValue: string, suit: string) {
        this.suit = Suit[suit];
        this.faceValue = faceValues.indexOf(faceValue) + 1;
    }  
}