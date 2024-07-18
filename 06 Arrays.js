//Activity1:Array Creatiion and Access
//Task1
let a=[];
for(let i=1;i<=5;i++){
    a[i-1]=i;
}
console.log(a);

//Task2
let first=a[0];
let last=a[(a.length)-1];
console.log(`first element= ${first} and last element= ${last}`);

//Activity2: Array Methods(Basic)
//Task3
a.push(6)
console.log(a);

//Task4
a.pop();
console.log(a);

//Task5
a.shift();
console.log(a);

//Task6
a.unshift(1);
console.log(a);

//Activity3:Array Methods(Intermediate)
//Task7
const mappedArray=a.map(element=>element*2);
console.log(mappedArray);

//Task8
const filteredArray=a.filter(element=>element%2===0)
console.log(filteredArray);

//Task9
const sum=a.reduce((acc,i)=>acc+i)
console.log(`Sum= ${sum}`);

//Activity4:Array Iteration
//Task10
for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

//Task11
a.forEach(element => console.log(element));

//Activity5: Multi-dimensional Array
//Task12
let multiArray=[];
let k=1;
for(i=0;i<4;i++){
    multiArray[i]=[];
    for(j=0;j<4;j++){
        multiArray[i][j]=k;
        k++;
    }
}
console.log(multiArray);

//Task13
console.log(multiArray[3][3]);