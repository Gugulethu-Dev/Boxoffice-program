import readline from 'readline/promises';
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
})

 
function Baseprice(age, moviePrice){
    let finalprice = 0;
    if(age < 12){
       finalprice = moviePrice - 50; 
    }
    else if(age >= 12 && age <= 64){
        finalprice = moviePrice;
    }
    else{
        finalprice = moviePrice -30;
    }
    return finalprice;
}


let totalRevenue = 0;
let totalTicketsSold = 0;

while(true){
console.clear();

console.log("Welcome to GREAT MOMENTS Theatre");
console.log("Book Your Ticket Now And Enjoy Later With FF (family and friends)");
console.log();

console.log("Please follow the steps carefully and respond in UPPERCASES only");
console.log();
console.log();


console.log("Available Theatre:");
const Theatre = [
    "1.IMax Theatre",
    "2.Standard Theatre",
    "3.VIP Theatre"
]

for(let choice in Theatre){
    console.log(Theatre[choice]);
}

console.log();

const theatre = {
    screen1: {
        name : "IMAX Theatre",
        schedule : {
            MONDAY : {Movie: "The Gentlement", Price : 100 , Time : "18:00"},
            TUESDAY : {Movie: "Spy", Price : 80 , Time : "20:00"},
            WEDNESDAY : {Movie: "The Other Guys", Price : 150, Time : "20:00"},
            THURSDAY : {Movie: "Men In Black", Price : 150, Time : "21:00"},
            FRIDAY : {Movie: "Free Guy", Price : 85, Time : "20:30"},
            SATURDAY : {Movie: "Hancock", Price : 200, Time : "21:00"},
            SUNDAY : {Movie: "Code 3", Price : 200, Time : "19:00"},
        }
    },

    screen2: {
        name : "Standard",
        schedule : {
            MONDAY : {Movie: "Fargo", Price : 120 , Time : "20:00"},
            TUESDAY : {Movie: "Ocean's 8", Price : 100 , Time : "20:00"},
            WEDNESDAY : {Movie: "Men in Black", Price : 200, Time : "20:00"},
            THURSDAY : {Movie: "Focus", Price : 175, Time : "22:00"},
            FRIDAY : {Movie: "Get Smart", Price : 200, Time : "20:30"},
            SATURDAY : {Movie: "Lift", Price : 250, Time : "21:00"},
            SUNDAY : {Movie: "American Hustle", Price : 200, Time : "18:00"},
        }
    },

    screen3: {
        name : "VIP",
        schedule : {
            MONDAY : {Movie: "The Gentlement", Price : 300 , Time : "20:00"},
            TUESDAY : {Movie: "Spy", Price : 250 , Time : "19:00"},
            WEDNESDAY : {Movie: "Tower Heist", Price : 400, Time : "20:00"},
            THURSDAY : {Movie: "Men In Black", Price : 200, Time : "21:00"},
            FRIDAY : {Movie: "Wrath of Man", Price : 300, Time : "20:30"},
            SATURDAY : {Movie: "Fast and Farious 9", Price : 400, Time : "21:00"},
            SUNDAY : {Movie: "Commando", Price : 200, Time : "19:00"},
        }
    }

}



let chosen = await rl.question("Select Theatre of YOUR choice: ");
if(chosen == "1" || chosen == "IMax Theatre"){
    console.log("\n-----Menu-----");
    console.log("Theatre: IMax Theatre")

    const Menu = [
        "1.View Movies",
        "2.Book Tickets",
        "3.View Reports",
        "4.Exit"
    ]

    for(let option in Menu){
        console.log(Menu[option]);
    }
    let option = await rl.question("Choose an option: ");
    let optionNum = parseInt(option);

    if(optionNum == 1){
        console.log("\nWeekly Schedule:\n")
        console.log();
        for (const day in theatre.screen1.schedule) {
            console.log(`${day}: ${theatre.screen1.schedule[day].Movie} at ${theatre.screen1.schedule[day].Time},Price: (R${theatre.screen1.schedule[day].Price})`);
        }
    }
    else if(optionNum == 2){
        console.log("Lets Grab Your Ticket: ");

            let Day = await rl.question("Enter the day of booking in Uppercases:");
            let price = 0;
            price = theatre.screen1.schedule[Day].Price;

            let input = await rl.question("Enter your age :");
            let age = parseInt(input);
           
            let TicketPrice = Baseprice(age ,price);
             
            let Newprice = 0;
            if(Day == "WEDNESDAY"){
                Newprice = TicketPrice - 15;
            }
            else if(Day == "SATURDAY" || Day =="SUNDAY"){
                Newprice = TicketPrice + 20;
            }
            else{
                Newprice = TicketPrice;
            }

            let Promoprice = 0;
            if(age >= 15 && age <= 60){
            let Additionally = await rl.question("Do you have the student code? answer is uppercases : ");
            if(Additionally == "YES"){
            let StudentCode = await rl.question("Enter the code: ");
            if(StudentCode == "STUDENT20"){
                Promoprice = Newprice - (Newprice * 0.2);
                console.log("Your ticket is : R",Promoprice,".");
                totalRevenue += Promoprice;
            }
            else{
                console.log("The code does not exist, Try again later!");
                console.log("Your ticket is : R ", Newprice , ".");
                totalRevenue += Newprice;
            }
            }
            else if(Additionally == "NO"){
            console.log("Your ticket is : R",Newprice,".");
            totalRevenue += Newprice;
            }
            else{
            console.log("Invalid reponse, Please type either YES or NO");
            }
            }

            else{
            console.log("Your ticket is : R",Newprice,".");
            totalRevenue += Newprice;
            }
            totalTicketsSold += 1;
            

    }
    else if(optionNum == 3){
        console.log("---Summary For IMax Theatre---");
        console.log();
        console.log("Number of tickets sold: ", totalTicketsSold);
        console.log("Total Revenue: R",totalRevenue);

    }

    else if(optionNum == 4){
        rl.close();
        break;
    }

    else{
        console.log("Please select valid option!");
    }

}


else if(chosen == "2" || chosen == "Standard Theatre"){
    console.log("-----Menu-----");
    console.log("Theatre: Standard Theatre")

    const Menu = [
        "1.View Movies",
        "2.Book Tickets",
        "3.View Reports",
        "4.Exit"
    ]

    for(let option in Menu){
        console.log(Menu[option]);
    }
    let option = await rl.question("Choose an option: ");
    let optionNum = parseInt(option);

    if(optionNum == 1){
        console.log("Weekly Schedule:")
        console.log();
        for (const day in theatre.screen2.schedule) {
            console.log(`${day}: ${theatre.screen2.schedule[day].Movie} at ${theatre.screen2.schedule[day].Time},Price: (R${theatre.screen2.schedule[day].Price})`);
        }
    }
    else if(optionNum == 2){
        console.log("Lets Grab Your Ticket: ");

            let Day = await rl.question("Enter the day of booking in Uppercases:");
            let price = 0;
            price = theatre.screen2.schedule[Day].Price;

            let input = await rl.question("Enter your age :");
            let age = parseInt(input);
           
            let TicketPrice = Baseprice(age ,price);
             
            let Newprice = 0;
            if(Day == "WEDNESDAY"){
                Newprice = TicketPrice - 15;
            }
            else if(Day == "SATURDAY" || Day =="SUNDAY"){
                Newprice = TicketPrice + 20;
            }
            else{
                Newprice = TicketPrice;
            }

            let Promoprice = 0;
            if(age >= 15 && age <= 60){
            let Additionally = await rl.question("Do you have the student code? answer is uppercases : ");
            if(Additionally == "YES"){
            let StudentCode = await rl.question("Enter the code: ");
            if(StudentCode == "STUDENT20"){
                Promoprice = Newprice - (Newprice * 0.2);
                console.log("Your ticket is : R",Promoprice,".");
                totalRevenue += Promoprice;
            }
            else{
                console.log("The code does not exist, Try again later!");
                console.log("Your ticket is : R ", Newprice , ".");
                totalRevenue += Newprice;

            }
            }
            else if(Additionally == "NO"){
            console.log("Your ticket is : R",Newprice,".");
            totalRevenue += Newprice;

            }
            else{
            console.log("Invalid reponse, Please type either YES or NO");
            }
            }

            else{
            console.log("Your ticket is : R",Newprice,".");
            totalRevenue += Newprice;
            }
            totalTicketsSold += 1;
            
    }
    else if(optionNum == 3){
        console.log("---Summary For Standard Theatre---");
        console.log();
        console.log("Number of tickets sold: ", totalTicketsSold);
        console.log("Total Revenue: R",totalRevenue);
    }

    else if(optionNum == 4){
        rl.close();
        break;
    }

    else{
        console.log("Please select valid option!");
    }

}


else if(chosen == "3" || chosen == "VIP Theatre"){
    console.log("-----Menu-----");
    console.log("Theatre: VIP Theatre")

    const Menu = [
        "1.View Movies",
        "2.Book Tickets",
        "3.View Reports",
        "4.Exit"
    ]

    for(let option in Menu){
        console.log(Menu[option]);
    }
    let option = await rl.question("Choose an option: ");
    let optionNum = parseInt(option);

    if(optionNum == 1){
        console.log("Weekly Schedule:")
        console.log();
        for (const day in theatre.screen3.schedule) {
            console.log(`${day}: ${theatre.screen3.schedule[day].Movie} at ${theatre.screen3.schedule[day].Time},Price: (R${theatre.screen3.schedule[day].Price})`);
        }
    }
    else if(optionNum == 2){
        console.log("Lets Grab Your Ticket: ");

            let Day = await rl.question("Enter the day of booking in Uppercases:");
            let price = 0;
            price = theatre.screen3.schedule[Day].Price;

            let input = await rl.question("Enter your age :");
            let age = parseInt(input);
           
            let TicketPrice = Baseprice(age ,price);
             
            let Newprice = 0;
            if(Day == "WEDNESDAY"){
                Newprice = TicketPrice - 10;
            }
            else if(Day == "SATURDAY" || Day =="SUNDAY"){
                Newprice = TicketPrice + 50;
            }
            else{
                Newprice = TicketPrice;
            }

            let Promoprice = 0;
            if(age >= 15 && age <= 60){
            let Additionally = await rl.question("Do you have the student code? answer is uppercases : ");
            if(Additionally == "YES"){
            let StudentCode = await rl.question("Enter the code: ");
            if(StudentCode == "STUDENT20"){
                Promoprice = Newprice - (Newprice * 0.2);
                console.log("Your ticket is : R",Promoprice,".");
                totalRevenue += Promoprice;
            }
            else{
                console.log("The code does not exist, Try again later!");
                console.log("Your ticket is : R ", Newprice , ".");
                totalRevenue += Newprice;
            }
            }
            else if(Additionally == "NO"){
            console.log("Your ticket is : R",Newprice,".");
            totalRevenue += Newprice;
            }
            else{
            console.log("Invalid reponse, Please type either YES or NO");
            }
            }

            else{
            console.log("Your ticket is : R",Newprice,".");
            totalRevenue += Newprice;
            }
            totalTicketsSold += 1;
            
            

    }
    else if(optionNum == 3){
        console.log("---Summary For VIP Theatre---");
        console.log();
        console.log("Number of tickets sold: ", totalTicketsSold);
        console.log("Total Revenue: R",totalRevenue);
    }

    else if(optionNum == 4){
        rl.close();
        break;
    }

    else{
        console.log("Please select valid option!");
    }   
}

else{
    console.log("Please select valid option!");
}

}
