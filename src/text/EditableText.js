import envelopeClue from "./../images/envelopeClue.JPG";
import envelopeClueFinal from "./../images/envelopeClueFinal.png";
import sixFold from "./../images/sixFold.jpg";
import starNumber from "./../images/starNumber.png";
import startAtTheCircle from "./../images/startAtTheCircle.JPG";
import mazeNumberTrace from "./../images/mazeNumberTrace.JPG";

export const homePageText =
  "Received one of the cards below? Click on the one you've received to test out your code or view hints!";

export const failMessage =
  "Oops, that's not quite right! Try again, or check the hints below if you're stuck!";

export const inputHeading =
  "When you think you've got the code, enter your four digits below:  👀";

export const birthdayMysteryHints = [
  {
    title: "What's the birthday list on the back of the card for?",
    steps: [
      {
        text: "Have a look at the first letter of each item in the list... does it spell out anything suspicious?",
        image: null,
      },
      {
        text: "It spells out ENVELOPE! Have a good look at the envelope that the card came in to see if you spot anything unusual...",
        image: null,
      },
      {
        text: "If look inside or rip apart the envelope you should find lots of _ symbols and circles around some of them. Can you spot what the _ symbols match up with on the card?",
        image: envelopeClue,
      },
      {
        text: "There are just the right number of _ symbols to match up with the birthday list on the back of the card!",
        image: null,
      },
    ],
    solution: {
      text: "If you match up the _ with the list on the back of the card, certain letters will be circled. You should fine the n, i, n and e circled, spelling out the number NINE.",
      image: envelopeClueFinal,
    },
  },
  {
    title:
      "What are the weird purple shapes inside and on the back of the card?",
    steps: [
      {
        text: "Have you noticed the dashed scissors line on the back of the card? Give that a cut along the line!",
        image: null,
      },
      {
        text: "See if folding different sections of the card over onto each other does anything...",
        image: null,
      },
    ],
    solution: {
      text: "If you fold the flaps in a certain way it gives the number SIX!",
      image: sixFold,
    },
  },
  {
    title: "Why is there colourful bunting?",
    steps: [
      {
        text: "Hmm have you seen these colours / patterns anywhere else on the card..?",
        image: null,
      },
      {
        text: "The stars on the front and back of the card match!",
        image: null,
      },
      {
        text: "Now look carefully at the start of the bunting.. is that a pencil? And an arrow, or direction to... join things up in?",
        image: null,
      },
      {
        text: "Connect the stars on the outside of the card with a pen/pencil in the same order as the flags that appear inside the card in the bunting.",
        image: null,
      },
    ],
    solution: {
      text: "Joining up the stars in the same order as the bunting flags inside the card should reveal a number 2 drawn out over the card!",
      image: starNumber,
    },
  },
  {
    title: "What are the stars for?",
    steps: [
      {
        text: "Hmm have you seen these colours / patterns anywhere else on the card..?",
        image: null,
      },
      {
        text: "The colours of the bunting flags match! If you need any more help have a look at the bunting clues above!",
        image: null,
      },
    ],
  },
  {
    title: "What's that funny barcode on the back of the card?",
    steps: [
      {
        text: "It does look a bit odd doesn't it? Perhaps viewing things from a different perspective might help you see things more clearly...",
        image: null,
      },
      {
        text: "Experiment with angling the card in front of you in different ways",
        image: null,
      },
      {
        text: "If you hold the card flat up to your eyes and look carefully you should be able to read a message... and then rotate it to see if you get a second message...",
        image: null,
      },
      {
        text: "Holding the card angled in front of you, you can read 'START AT THE CIRCLE'. Holding it the other way you read 'END AT THE TRIANGLE'",
        image: startAtTheCircle,
      },
      {
        text: "Can you find a circle or triangle anywhere else on the card..?",
        image: null,
      },
      {
        text: "There's a circle and triangle on the front of the card in the maze! Follow the instructions - use a pen and start at the circle and end at the triangle. Does that give you a number?",
        image: null,
      },
    ],
    solution: {
      text: "By doing the above you trace the number 5.",
      image: mazeNumberTrace,
    },
  },
  {
    title: "What's the maze on the front of the card for?",
    steps: [
      {
        text: "In order to do anything with the maze, you'll first need a starting point from somewhere else on the card...",
        image: null,
      },
      {
        text: "The barcode could be a good place to look for some instructions... If you want more clues have a look at the barcode set of hints above.",
        image: null,
      },
    ],
  },
  {
    title: "I've got 4 numbers! How do I know what order they go in?",
    steps: [
      {
        text: "Great work! I'm sure the poem at the start mentioned something about how to know the order...",
        image: null,
      },
      {
        text: "'Look to the presents tall and small' that was it! You've got 4 numbers and there are 4 presents, perhaps the height of the presents can tell you something?",
        image: null,
      },
      {
        text: "Match each present to the size of your numbers - 9 is the biggest so that matches with the biggest present. 2 is the smallest so that should go where the smallest present is.",
        image: null,
      },
    ],
    solution: {
      text: "Ordering our numbers so they match the size order of the presents, we get the FINAL CODE 6295",
      image: null,
    },
  },
];

export const successPoem =
  "Look at you, you did it!\n" +
  "You solved the puzzle with determination and wit!\n" +
  "br\n" +
  "You cracked the code, the puzzle’s done,\n" +
  "Now it’s time for some birthday fun!\n" +
  "br\n" +
  "Here’s to you, a special cheer,\n" +
  "Happy birthday, I hope the cake is near..! 👀\n";

export const successMessage =
  "Well done on solving this fiendish puzzle! Enjoy the rest of your day celebrating both your birthday and your puzzle solving success!";
