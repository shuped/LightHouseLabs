// calculator for day 1 week 1 lighthouse labs course
// sums command line arguments and prints results

var args = process.argv.slice(2);
console.log(Number(args[0]) + Number(args[1]));