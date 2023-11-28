import { fruits } from './foods';
import { choice, remove } from './helpers';

// Randomly draw fruit
const randomFruit = choice(fruits);

// Log the messages
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log("Yum! May I have another?!");

// remove fruit from the array
remove(fruits, randomFruit);

// Log the remaining fruits
console.log(`I'm sorry, we're all out of ${randomFruit}. We have these fruits left: ${fruits.join(", ")}`);