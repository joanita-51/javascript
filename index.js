// The alert dialog box
alert();
window.alert("Hello, World the second time");

//The confirm dialog box
let decision = window.confirm("Is it OK?");
console.log(decision);

let remove = confirm("Remove all data?");
let message = remove ? "Deleting Data" : "Cancelled"

console.log(message);

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

//Assignment2
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    
    let newContact={
        name:"Maisie Haley",
        phone:"0913 531 3030",
        email:"risus.Quisque@urna.ca"
    }
    contacts.push(newContact);
    
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    console.log(`${contacts[3].name} / ${contacts[3].phone} / ${contacts[3].email}`);
    console.log(contacts.indexOf(newContact));

    