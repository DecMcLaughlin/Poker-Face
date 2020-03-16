import { PokerService } from '../src/services/pokerService';
import { Card } from '../src/models/Card';

describe('Poker Service', function () {
  var service: PokerService;

  beforeEach(function () {
    service = new PokerService();
  });

  it('Should return royal flush when all suits match & all cards are in sequence and there is an ace in a hand', function () {
    let cards: Card[] = getHand("JH KH QH TH AH");
    var result = service.bestHand(cards);
    expect(result).toBe('Royal Flush');
  });

  it('Should return straight flush when all suits match & all cards in sequence', function () {
    let cards: Card[] = getHand("JH KH QH TH 9H");
    var result = service.bestHand(cards);
    expect(result).toBe('Straight flush');
  });

  it('Should return four of a kind when four cards have the same value', function () {
    let cards: Card[] = getHand("9H 9D 9C 9S 8H");
    var result = service.bestHand(cards);
    expect(result).toBe('Four of a kind');
  });

  it('Should return full house when there is a pair and three of a kind', function () {
    let cards: Card[] = getHand("3H JH 3D JS 3C");
    var result = service.bestHand(cards);
    expect(result).toBe('Full house');
  });

  it('Should return flush when all suits match in a hand', function () {
    let cards: Card[] = getHand("9C 6C 3C QC KC");
    var result = service.bestHand(cards);
    expect(result).toBe('Flush');
  });

  it('Should return straight when all cards in sequence', function () {
    let cards: Card[] = getHand("AC 2H 3S 4H 5S");
    var result = service.bestHand(cards);
    expect(result).toBe('Straight');
  });

  it('Should return three of a kind when three cards have the same value', function () {
    let cards: Card[] = getHand("3H TH 3D JS 3C");
    var result = service.bestHand(cards);
    expect(result).toBe('Three of a kind');
  });

  it('Should return Two pair when the hand contains two pairs with the same value', function () {
    let cards: Card[] = getHand("3H TH 3D JS JC");
    var result = service.bestHand(cards);
    expect(result).toBe('Two pair');
  });

  it('Should return One pair when the hand contains one pair with the same value', function () {
    let cards: Card[] = getHand("3H TH 3D JS 9C");
    var result = service.bestHand(cards);
    expect(result).toBe('One pair');
  });

  it('Should return high card when there are no better hands', function () {
    let cards: Card[] = getHand("3H TH QD JS 9C");
    var result = service.bestHand(cards);
    expect(result).toBe('High card');
  });

  function getHand(line: string): Card[] {
    let cards: Card[] = [];
    let cardsSplit: string[] = line.split(' ');
    cardsSplit.map(card => cards.push(new Card(card[0], card[1])));
    return cards;
  }
});