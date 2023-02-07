var interest = 0;
export function compoundInterest(p, t, r, n) {
    const amount = p * (Math.pow((1 + (r / n)), (n * t)));
    interest = amount - p;
    return interest;
};