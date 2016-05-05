// alert("Hello");

var n = 5;
var str = "Hello World!";
var bool = true;
var u;

n = 10;

s = "Hello";
s = s + " Husky!"

b = false;
b = !b;

function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Sanath");

function square(n) {
    return n * n;
}

function circleArea(readius) {
    return Math.PI * square(readius);
}

function isEven(n) {
    
    if (n%2==0) {
        console.log("Even");
    }else{
        console.log("Odd");
    }
    
}

isEven(2);
isEven(5);

var res = circleArea(5);

function iterate() {
    console.log("starting loop");
    for (var i = 0; i < 10; i++) {
        console.log("iteration " + i);
    }
    
    console.log("done!");
}

iterate();

var arr = ["G","PG","PG-13","R"];

console.log(arr.length);

arr.push("NC-17");
arr.push(12);

console.log(arr.length);

for (var index = 0; index < arr.length; index++) {
    var element = arr[index];
    console.log(element);
}

console.log("new");

arr.forEach(console.log.bind(console));

var m = {"red":"#F00","green":"#0F0","blue":"#00F"};

console.log(m);

console.log(m.red);
console.log(m.yellow);

m.yellow = "#FF0";

console.log(m.yellow);