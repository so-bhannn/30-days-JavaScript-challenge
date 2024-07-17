//Activity1: Function Declaration
//Task1
function EvenOdd(num) {
    num%2===0?console.log('Even'):console.log('Odd');
}
EvenOdd(5);

//Task2
function Square(num) {
    return num*num
}
console.log(Square(5));

//Activity2: Function Expression
//Task3
function Max(num1,num2) {
    num1>num2?console.log(num1):console.log(num2);;
}
Max(23,5);

//Task4
function Concatenate(str1,str2) {
    str1=String(str1);
    str2=String(str2);
    return str1+str2;
}
console.log(Concatenate('Chai','Code'));

//Activity3: Arrow Functions
//Task5
const Sum=(num1,num2)=>{
    return num1+num2;
}
console.log(Sum(5,7));

//Task6
const Char=(str,char)=>{
    return str.includes(char);
}
console.log(Char("ChaiCode","h"));

//Activity4:Function Parameters and Default Values
//Task7
function Product(num1,num2=2) {
    return num1*num2;
}
console.log(Product(5));

//Task8
function Greet(name,age="20"){
    return `Hello ${name}!!You are ${age} years Young!`
}
console.log(Greet("Gangadhar"));

//Activity5:Higher-Order Functions
//Task9
function repeat(num,func) {
    for(let i=0;i<num;i++){
        func();
    }
}
function msg(){
    console.log("ChaiCode");
}
repeat(5,msg)

//Task10
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}
function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}
console.log(applyFunctions(addOne, square,5));
