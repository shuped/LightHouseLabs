var start = Date.now(); 

function fib(cb) {
  var a=1; 
  var b=1;
  var old = 1; 
  for(i=0;i<200000;i++){
    old=b;
    b=a+b;
    a=old
    if (a > 10**300) {
      a = b = old = 1
    }

    if (i === 200000 -1) {
      cb(a);
    }
  };
}
fib(a => {
  var end = Date.now();
  console.log(a, end-start);
})
