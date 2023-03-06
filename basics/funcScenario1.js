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
    
    //Function number One
    
    let showContact= (contacts, index) =>{
        //Check if contacts is an array
        if(contacts instanceof Array){
            
        //Check if index argument is valid
            if(index>=0 && index<contacts.length){
                console.log(`Name: ${contacts[index].name}`);
                console.log(`Phone: ${contacts[index].phone}`);
                console.log(`Email: ${contacts[index].email}`);
                console.log(" ");
            }
            else{
                console.log("Invalid index")
            }
            console.log(contacts[index]);
        }
        else{
            console.log("Invalid contact list")    
        }
    
    }
    
    //function number two
    
    let showAllContacts = (contacts) =>{
        if(contacts instanceof Array){
            for (contact of contacts){
                console.log(`Name: ${contact.name}`);
                console.log(`Phone: ${contact.phone}`);
                console.log(`Email: ${contact.email}`);
                console.log(" ");
            }
        }
        else {
            console.log("Invalid Array");
        }
    }
    
    //Function number three
    let addNewContact =(contacts, name, phone, email)=>{
        if(contacts instanceof Array ){
            if(name !=null && phone != null && email != null){
                contacts.push({
                    name:name,
                    phone:phone,
                    email:email
                });
            } else {
                console.log("One of the arguments doesn't have any value");
            }
        } else {
            console.log("Invalid Contact list");
        };
        console.log(`New Contact: ${JSON.stringify(contacts[contacts.length -1])}`);
    };

    //sorting functionality
    let sortContacts = (contacts, sortBy)=>{
        switch(sortBy){
            case "name":
                contacts.sort((a,b)=>a.name.localeCompare(b.name));
                console.log(contacts);
                break;
            case "phone":
                contacts.sort((a,b)=>a.phone.localeCompare(b.phone));
                console.log(contacts);
                break;
            case "email":
                contacts.sort((a,b)=>a.email.localeCompare(b.email));
                console.log(contacts);
                break;
            default :
                console.log("Invalid Sort Option")
        }
    
    }

    //Combining all the functions
    setTimeout(()=>{
        let running = true;
        let option = prompt ("Enter your preferred option:");
        switch(option){
            case "1":
                let index = prompt("Enter the contact index ");
                showContact(contacts, index);
            break;
            case "2":
                showAllContacts(contacts);
            break;
            case "3":
                let name = prompt("Enter name:");
                let phone = prompt("Enter phone:");
                let email = prompt("Enter email");
                addNewContact(contacts, name, phone, email);
            break;
            case "4":
                let sortBy = prompt("Choose option: name, phone, or email");
                sortContacts(contacts, sortBy);
            break;
            case "5" :
                running = false;
                console.log("Thank you for using our app");
            break;
            default:
                console.log("Invalid Option");
            break;
        }
    },1000);

    
 