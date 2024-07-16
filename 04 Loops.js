//Activity1: For Loop
//Task1
for(var i=1;i<=10;i++){
    process.stdout.write(i+" ");
}console.log();
//Task2
var m
for(var i=1;i<=10;i++){
    m=5*i;
    console.log(`5 x ${i} = ${m}`);
}

//Activity2: While Loop
//Task3
var i=1;
var sum=0;
while (i<=10) {
    sum=sum+i;
    i++;
}
console.log(sum);

//Task4
var i=10;
var x="";
while (i>0) {
    process.stdout.write(i+" ");
    i--;
}console.log();

//Activity3:Do...While Loop
//Task5
var i=1;
do {
    process.stdout.write(i+" ");
   i++;
} while (i<=5);
console.log();

//Task6
var num=5;
var fact=1;
i=1;
do {
    fact=fact*i;
    i++;
} while (i<=num);
console.log(fact);

// Activity4: Nested Loops
//Task7
for(var i=1;i<=5;i++){
    for(var j=1;j<=i;j++){
        process.stdout.write("*");
    }
    console.log();
}

//Activity5: Loop Control Structures
//Task8
for (let i = 1; i <= 10; i++){
    if(i===5){
        continue;
    }
    process.stdout.write(i+" ");
}console.log();

//Task9
for (let i = 1; i <= 10; i++){
    if(i===7){
        break;
    }
    process.stdout.write(i+" ");
}
