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
            }
            else{
                console.log("Invalid index")
            }
        
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
        showContact(contacts, contacts.length-1);    
    };
    
    console.log(showContact(contacts, 0));
    console.log(showAllContacts(contacts));
    console.log(addNewContact(contacts, "Anita", 78964321, "nakityoanita@gmail.com"));
    