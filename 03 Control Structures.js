//Activity1:If-Else Statements

//Task1
var num=10;
if(num>0){
    console.log('Number is Positive');
}else if(num<0){
    console.log('Number is Negative');
}
else{
    console.log('Number is Zero');
}

//Task2
var age=18;
if(age>=18){
    console.log('Person is eligible to vote');
}
else{
    console.log('Person is not eligible to vote');
}

//Activity2:Nested If-Else Statements

//Task3
var num1=10;
var num2=20;
var num3=30;
if(num1>num2){
    if(num1>num3){
        console.log('num1 is largest');
    }
    else{
        console.log('num3 is largest');
    }
}
else{
    if(num2>num3){
        console.log('num2 is largest');
    }
    else{
        console.log('num3 is largest');
    }
}

//Activity3:Switch Case

//Task4
var num=9;
switch (num) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;

    default:
        console.log('Enter a Valid Number between 1 and 7');
        break;
}

//Task5
var score=100;
var scoreQuotient=Math.floor(score/10)
switch (scoreQuotient){
    case 10:
    case 9:
        console.log('Grade is A');
        break;
    case 8:
        console.log('Grade is B');
        break;
    case 7:
        console.log('Grade is C');
        break;
    case 6:
        console.log('Grade is D');
        break;
    default:
        console.log('Grade is F')
        break;
}

//Activity4:Conditional(Ternary) Operator

//Task6
num1=8;
num1%2==0?console.log('Number is Even'):console.log('Number is Odd');

//Task7
year=1900
year = 1900;
if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}