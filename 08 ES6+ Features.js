//Activity1: Template Literals
//Task1
let name="Sobhan";
let age=20;
let str=`Hello, my name is ${name} and I am ${age} years old.`;
console.log(str);

//Task2
let str1=`Welcome to Chai and Code
We are learning JavaScript
We are doing the 30 days of JavaScript challenge`;
console.log(str1);

//Activity2: Destructuring
//Task3
let [firstName, lastName, country, city] =['Sobhan','Ghosh','India','Jamshedpur'];
console.log(firstName,lastName);

//Task4
let book={
    title:"Alice's Adventures in Wonderland",
    author:"Lewis Carroll",
}
let {title,author}=book;
console.log(title,author);

//Activity3: Spread and Rest Operator
//Task5
let person=['Sobhan','Ghosh',20,'India'];
const about=[...person,'Jamshedpur','Male','Student'];
console.log(about);

//Task6
function sum(...args){
    return args.reduce((acc,curr)=>acc+curr,0);
}
console.log(sum(1,2,3,4,5));

//Activity4: Default Parameters
//Task7
function product(a,b=1){
    return a*b;
}
console.log(product(5,5));
console.log(product(5));

//Activity5: Enhanced Object Literals
//Task8
let book1={
    title:"A Monk Who Sold His Ferrari",
    author:"Robin Sharma",
    year:1997,
    genre:"Self-help",
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
}
console.log(book1.getSummary());

//Task9
let key1='name';
let key2='age';
let key3='country';
const person1={
    [key1]:'Sobhan',
    [key2]:20,
    [key3]:'India'
}
console.log(person1);