import { add } from './math.js';
import { state } from './store.js';

console.log(add(state.value, 2));
