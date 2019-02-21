var x=+prompt("Enter number",);
var B=(1+Math.sqrt(5))/2;
var num= (Math.pow(B,x)-Math.pow(-B,-x))/(2*B-1);
alert(num);

function fib(n) {
    var a = 1,
      b = 0,
      x;
    for (i = 0; i < n; i++) {
      x = a + b;
      a = b
      b = x;
    }
    return b;
  }
  alert(fib(77));
  
