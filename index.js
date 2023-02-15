// The alert dialog box
window.alert("Hello, World the second time");

//The confirm dialog box
let remove = confirm("Remove all data?");
let message = remove ? "Deleting Data" : "Cancelled"

console.log(message);

//the prompt dialog box
let name1 = window.prompt("What is your name ? ", "John Doe");
name1 = name1? name1: "anonymous";

let age = prompt ("Hello "+ name1 + " How old are you?");
alert(name1 + " is " + age + " years old ");

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

    //Conditional operators (for, while and if ... else)
let vessel = {
    LATITUDE : 40.07288,
    LONGITUDE : 154.48535,
    COURSE : 285.0,
    SPEED : 14.0,
    IMO: 9175717,
    NAME: "MARENO"
}
for (let key in vessel){
    console.log(`${key} -> ${vessel[key]}`);
}

let movie =[];
let anotherMovie = true

while(anotherMovie){
    let movieName = prompt("Enter the name of the movie");
    let rating = prompt("Enter the movie's rating");
    if((movieName !=null) && (rating !=null)){
        movie.push({
          title : movieName,
          imdb  : Number(rating)
        }
        );
    } else {
        anotherMovie = false;
    }
    

}

console.log("All movies with a rating of less than 7:")
for(m of movie){
    if(m.imdb < 7){
        console.log(`${m.title} (${m.imdb})`);
    }
}

console.log("All movies with a rating of greater than 7:")
for (n of movie){
    if(n.imdb >= 7){
        console.log(`${n.title} (${n.imdb})`)
    }
}    

//functions as first class members
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function operation (func, first, second){
    return func(first, second);
}

console.log(operation(add, 10, 20));
console.log(operation(multiply, 10, 20));