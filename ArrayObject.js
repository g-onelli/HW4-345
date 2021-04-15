//Dorky, adorable
alert("Magical Portal Detected. Proceed Forward to Adventure?");

//Next reading suggestion, personalized slightly
var suggestion;
var Books = ["Good Omens", "Dealing with Dragons", "The Book Theif", "Crown Duel", "The Rest of Us Just Live Here", "The Children of Blood and Bone", "Of Giants and Ice", "The Golden Compass"];
prompt("Please put in the title of one of the books listed on this page for a new recommandation. Or say none for some new recommandations", suggestion);
if (suggestion === "The Color of Magic" || suggestion === "TheColorofMagic" || suggestion === "Highfire") {
    console.log("You might like reading " + Books[0] + " or " + Books[5]);
} else if (suggestion === "The Starless Sea") {
    console.log("You might enjoy " + Books[2]);
} else if (suggestion === "Chosen One") {
    console.log("You might enjoy " + Books[4]);
} else if (suggestion === "Terrier") {
    console.log("Something you could like is " + Books[3] + " or possibly " + Books[1]);
} else {
    console.log("So here are some good books to try reading: " + Books[5] + ", " + Books[6] + ", or " + Books[7]); 
}  

//Reason for visiting the website question
prompt("Why did you decide to come to my webpage today? Please type one of the options: I was bored, I like books, it looked cool, my teacher made me go on your lame website", response);
if (respnse === "I was bored" || response === "Iwasbored" || respnse === "i was bored"){
    console.log("Then I hope I was able to entertain you");
}
else if (respnse === "I like books" || response === "Ilikebooks" || respnse === "i like books"){
    console.log("You and me both, Friend!");
}
else if (respnse === "It looked cool" || response === "itlookedcool" || respnse === "it looked cool"){
    console.log("Thanks for saying that, I hope you still like it");
}
else if (respnse === "my teacher made me go on your lame website" || response === "myteachermademegoonyourlamewebsite" || respnse === "My teacher made me go on your lame website"){
     var pettyLine = 0
    for(pettyLine;pettyLine<10;pettyLine++){
        if(pettyLine==0 || pettyLine==1) {
            console.log("I can't believe it.");
        } else if(pettyLine<5) {
            console.log("You are so mean");
        } else if(pettyLine == 6) {
            console.log("Are you bored yet?");
        } else {
            console.log("Is my website still lame jerk?")
        } 
       }
      } else {
    console.log("No offense, but you're not very good at following orders.");
}

//A function making a string that is altered
function dothings(){
   var statement = "I'm really happy you visited by website!";
   var loudStatement = statement.toUpperCase();
   console.log(loudStatement);
}

//A function to throw glitter
function glitter(){
    var glit = "*throws glitter in the air*"
    return glit + specialFunctions.reality;
}

//Functions huzzar
var input2 = [1,2,3,4,5,6]
var specialFunctions = {
   reality: function real() {
      var consequences = 0;
    while(consequences<1){
       console.log("Yeah, the glitter is pretty.")
       console.log("Oh no, the glitter is in the tea.")
       console.log("Ahhh, it's getting everywhere.");
       console.log("I'll never get it out of the carpet!");
       console.log("Gahh, this was a terrible idea.");
       console.log("*Flails in distress*");
       consequences++;    
        }
    },
  InputThingy: "This number is likely one.",
  addSubtract: function math1(input2){
    var add = input2[1]+input2[4]+input2[0];
        var subtract = input2.length-input2[3];
        return add, subtract;
  }
}

//Last Function, whoop!
var number = 1
function callStuff(number){
    if(number<2 && number>0){
        console.log(specialFunctions.InputThingy);
    } else{
        return false;
    }
}

//Syke! Real Last Function
var syke = 8;
function Syke(){
    var syke = "Ha ha";
    console.log(syke);
}