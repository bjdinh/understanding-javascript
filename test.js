//This will change the "print" command in the code to "console.log" if "print"  
//is undefined.
if (typeof print == 'undefined') {
  print = function(msg) { console.log(msg); }
}

//Variables are bits of data types given names to be called upon whenever needed
var newcode = "Hello World" + "!";
var old = "Goodbye World" + "!";
print(newcode);
print(old);

//A new code a new beginning!

//This is a Boolean it can be either true or false
var palascanusedualtwohanded = false

//This will check the Boolean to see if it is true or false and then run code
//depending on the circumstances.
if(palascanusedualtwohanded = true) {
     alert("Palas are soooo friggin OP");
} else {
     alert("Phew, that was a close one");
}

