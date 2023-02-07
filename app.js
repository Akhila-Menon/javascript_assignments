import { compoundInterest } from './compound.js';
import { simple } from './simple.js';

const principal = 2000;
const time = 5;
const rate = .08;
const n = 12;

console.log('Simple interest: ', simple(principal, time, rate));
console.log('Compound interest: ', compoundInterest(principal, time, rate, n));
