let ticket = {
    "from":"Wandegeya",
    "to":"Ntinda",
    "price":1000,
}
console.log(`Ticket from: ${ticket.from}`);
console.log(`Ticket to: ${ticket.to}`);
console.log (`Ticket price: ${ticket.price}`);

let person={
};
person.firstName="Joanita";
person.lastName="Nakityo";
console.log(person.firstName, person.lastName);

let books = [
    {
        "title":"Speaking JavaScript",
        "author":"Axel Rauschmayer",
        "pages":460
    },
    {
        "title":"Programming JavaScript Applications",
        "author":"Eric Elliott",
        "pages":254
    },
    {
        "title":"Understanding ECMAScript 6",
        "author":"Nicholas C. Zakas",
        "pages":352
    }
];

books.push({
    "title":"Learning JavaScript Design Patterns",
    "author":"Addy Osmani",
    "pages":254
});

console.log (books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);

let lastTwoBooks = books.slice(-2);


let lostBook = books.shift(1);
console.log(books.length);

let pageSum = books[0].pages + books[1].pages + books[2].pages;
console.log(`pages: ${pageSum}`);