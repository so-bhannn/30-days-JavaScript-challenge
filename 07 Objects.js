//Activity1: Object Creation and Access
//Task1
book={
    title:"Alice's Adventure in Wonderland",
    author:"Lewis Carroll",
    year:1865
}
console.log(book);

//Task2
console.log(book.title);
console.log(book.author);

//Activity2: Object Methods
//Task3
function getDetails(){
    return `${book.title} by ${book.author}`
}
console.log(getDetails());

//Task4
function changeYear(year){
    book.year=year;
    return book;
}
console.log(changeYear(1901));

//Activity3: Nested Objects
//Task5
library={
    name:"Old Library",
    books:[
        {title:"Alice's Adventure in Wonderland",author:"Lewis Carroll"},
        {title:"Pride and Prejudice",author:"Jane Austen"},
        {title:"1984",authore:"George Orwell"},
        {title:"Moby Dick",author:"Herman Malville"},
        {title:"The Great Gatsby",author:"F. Scott Fitzgerald"}
    ]
}
console.log(library);

//Task6
console.log(library.name);
for (let i = 0; i < library.books.length; i++) {
    console.log(library.books[i].title);
}

//Activity4: The this Keyword
//Task7
book={
    title:"Alice's Adventure in Wonderland",
    author:"Lewis Carroll",
    year:1865,
    getFunction: function(){
        return `${this.title} was published in the year ${this.year}`
    }
}
console.log(book.getFunction());

//Activity5:Object Iteration
//Task8
for (let property in book) {
    console.log(property + ": " + book[property]);
}

//Task9
console.log(Object.keys(book))
console.log(Object.values(book))
