#Numbers
parseInt
parseFloat
isNan
isFinite

#Boolean
Boolean

#Strings
var
indexOf
substr
slice
split
trim

#Regular Expressions
new RegExp("[aA]{2,}")
search
replace

#Objects
var o1 = {}; // Declare

var user = { first_name: "Bhanu" , last_name: "kolli"};

user.birthdate= "Jan 01"; //add
delete user.birthdate ;

Objects.keys(user).length;


#JSON
{ "first_name": "Bhanu" , "last_name": "kolli"}


#Array

var arr = [];

arr.lenght ; //length

Array.isArray(arr); // Return boolean

arr.push('jjj') // Push new element in array

delete arr[2]; // Clear the value at the position

splice() // Removes and modifies the length of the array

pop() // Remove last array element

shift() // Removes first array element

unshift() // Adds element in first place

join()

sort();

sort( function(a,b) {
  var a1 = a.lowerCase(), b1 = b.toLowerCase();
  if (a1 < b1) return -1
  if (a1 > b1) return 1;
  return 0;
  })

#Functions

function hello(name) {
  console.log("Hello "+name );
}

function noargs(){
  console.log(noargs);
}

(function() {
  var x = "bhanu";
  name = x ;
  })();  // Anonymous function and execute function
Name is accessible out side function but x is not, function scope.


#Language Constructs

== vs ===

var x = today ? "now" : "never";

& | ~ ^

# Classes prototypes and inheritance  

prototype is used for inheritance.

function shape(){

}
shape.prototype.X = 0 ;
shape.prototype.X = 12 ;

shape.prototype.move = function(x,y){
  this.X = x;
  this.Y = y;
}

shape.prototype.area = function (){
}

var s = new shape;
s.move(10,10);

#Error handling

throw new Error("bad"); / Traditional

try {

}   catch (e) {
  console.log("Error" + e.message);
}


#Node JS Globals

globbal.fish ="Glod"; // Global object

process.exit(-1); // Process object
process.env
process.env.LANG

#New functions in JS

var x = function (a,b) { return a + b; } // Previous

var x = (a,b) => a +b ; // New way

var x = (a,b) => { return a +b ;} // New way arrow functions

x(1,2) // Results 3

for...in vs for..of
for (idx in x ){ console.log(x[idx])}
for (value of x ){ console.log(value)}

#Asynchronous Programming







####
