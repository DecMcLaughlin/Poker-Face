Install Node Modules:
From the VScode menu select Terminal New Terminal

enter npm i

Build the app:
click on Explorer or (click Shift Command E) expand the task runner pane and select build or (click Shift Command B)

Running the app:

Select Run or (click Shift Command D) and select launch program.

Running Tests:

click on Explorer or (click Shift Command E) expand the task runner pane and select test

Poker Face
This program reads input from a file and converts the specified hands
into the name of the corresponding poker hand. The name of the hand will be one of:
High card
One pair
Two pair
Three of a kind
Straight
Flush
Full house
Four of a kind
Straight flush
Royal Flush
The full list of available poker hands is available here:
http://en.wikipedia.org/wiki/List_of_poker_hands .


Each line of the input file will contain 5 valid card descriptions. Each description is in
the form CS, where C is the name of the card (2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A) and
S is the suit (H, D, S, C for Hearts, Diamonds, Spades and Clubs respectively).
Example input:
3H JS 3C 7C 5D
JH 2C JD 2H 4C
9H 9D 3S 9S 9C
9C 3H 9S 9H 3S
Example output:
3H JS 3C 7C 5D => One pair
JH 2C JD 2H 4C => Two pair
9H 9D 3S 9S 9C => Four of a kind
9C 3H 9S 9H 3S => Full house
Notes:
- Aces can be the highest or lowest card of a straight or straight flush i.e. A, 2, 3, 4, 5
or T, J, Q, K, A