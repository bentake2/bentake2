import { greet } from '../src/greet.js';

const message = greet('Cloud Agent');
console.log(message);
if (!message.includes('Cloud Agent')) {
  process.exit(1);
}