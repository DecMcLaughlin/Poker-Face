import * as lineReader from 'line-reader';
import * as path from 'path';
import { PokerService } from './services/pokerService';
import { Card } from '../src/models/Card'

let service = new PokerService();

lineReader.eachLine(path.join(__dirname, "hands.txt"), (line: string) => {
        let cards: Card[] = [];
        let cardsSplit: string[] = line.split(' ');
        cardsSplit.map(card => cards.push(new Card(card[0], card[1])));
        console.log(line + ' => ' + service.bestHand(cards));
});