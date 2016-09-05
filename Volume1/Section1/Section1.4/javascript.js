var numbers = [1,2,3,4,5];

//doesn't work
Math.min(numbers);
numbers.reduce(function(p, n){ return Math.min(p,n); });

//ES2015
numbers.reduce((p,n) => Math.min(p,n));
Math.min(...numbers);
