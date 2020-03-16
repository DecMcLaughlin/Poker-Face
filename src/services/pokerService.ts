import { HandType, faceValues } from '../models/Enum';
import { Card } from '../models/Card'

export class PokerService {

    public bestHand(hand: Card[]): string {

        let handGroups = this.getHandGroups(hand);

        if (this.isRoyalFlush(hand)) {
            return HandType.Royal_Flush;
        }

        if (this.isStraightFlush(hand)) {
            return HandType.Straight_Flush;
        }
        if (this.isFourOfAKind(handGroups)) {
            return HandType.Four_Of_A_Kind;
        }

        if (this.isFullHouse(handGroups)) {
            return HandType.Full_House;
        }

        if (this.isFlush(hand)) {
            return HandType.Flush;
        }

        if (this.isStraight(hand)) {
            return HandType.Straight;
        }

        if (this.isThreeOfAKind(handGroups)) {
            return HandType.Three_Of_A_Kind;
        }

        if (this.isTwoPair(handGroups)) {
            return HandType.Two_Pair;
        }

        if (this.isOnePair(handGroups)) {
            return HandType.One_Pair;
        }

        return HandType.High_Card;
    }

    private isRoyalFlush(hand: Card[]): boolean {
        return this.isFlush(hand) && this.checkAceHighStraight(hand);
    }

    private isStraightFlush(hand: Card[]): boolean {
        return this.isFlush(hand) && this.isStraight(hand);
    }

    private isFourOfAKind(groups: number[]): boolean {
        return groups[0] === 4;
    }

    private isFullHouse(groups: number[]): boolean {
        return groups[0] === 3 && groups[1] === 2;
    }

    private isThreeOfAKind(groups: number[]): boolean {
        return groups[0] === 3;
    }

    private isFlush(hand: Card[]): boolean {
        return hand.every((card: Card) => card.suit === hand[0].suit);
    }

    private isStraight(hand: Card[]): boolean {
        return this.checkAceHighStraight(hand) || this.checkAceLowStraight(hand);
    }

    private isTwoPair(groups: number[]): boolean {
        return groups[0] === 2 && groups[1] === 2;
    }

    private isOnePair(groups: number[]): boolean {
        return groups[0] === 2;
    }

    private checkAceLowStraight(hand: Card[]): boolean {
        let values: number[] = this.getFaceValues(hand);
        for (let index = 0; index < values.length - 1; index++) {
            if (values[index] + 1 !== values[index + 1])
                return false;
        }
        return true;
    }

    private checkAceHighStraight(hand: Card[]): boolean {
        let values: number[] = this.getFaceValues(hand);
        let hasAce = values.includes(1);
        if (!hasAce) {
            return false;
        } else {
            values.shift();
            values.push(14);
            for (let index = 0; index < values.length - 1; index++) {
                if (values[index] + 1 !== values[index + 1])
                    return false;
            }
            return true;
        }
    }

    private getFaceValues(hand: Card[]): number[] {
        let values: number[] = [];
        hand.map(card => {
            values.push(card.faceValue);
        });
        values.sort((a, b) => a - b );
        return values;
    }

    private getHandGroups(hand: Card[]): number[] {
        let handFaceValues = this.getFaceValues(hand);
        // count the number of occurences of each card in a hand
        var groups = faceValues.map((card, cardindex) => handFaceValues.filter(hand => cardindex === hand).length);
        // sort the groups into highest number of occurences desc
        groups.sort((a, b) => b - a);
        // we're only interested in the first two groups
        groups.length = 2;
        return groups;
    }
}