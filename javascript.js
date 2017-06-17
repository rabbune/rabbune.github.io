


var characters = [
  {name: "Nala", age: "both", gender: "female"}, {name: "Kiara", age: "both", gender: "female"}, {name: "Sarafina", age: "adult", gender: "female"},
  {name: "Sarabi", age: "adult", gender: "female"}, {name: "Vitani", age: "both", gender: "female"}, {name: "Zira", age: "adult", gender: "female"},
  {name: "Aleu", age: "both", gender: "female"}, {name: "Jenna", age: "adult", gender: "female"}, {name: "Faline", age: "both", gender: "female"},
  {name: "Vixey", age: "adult", gender: "female"}, {name: "Lady", age: "both", gender: "female"}, {name: "Angel", age: "young", gender: "female"},
  {name: "Duchess", age: "adult", gender: "female"}, {name: "Perdita", age: "adult", gender: "female"}, {name: "Dixie", age: "adult", gender: "female"},
  {name: "Rita", age: "adult", gender: "female"}, {name: "Sasha", age: "adult", gender: "female"}, {name: "Georgette", age: "adult", gender: "female"},
  {name: "Nita", age: "adult", gender: "female"}, {name: "Simba", age: "both", gender: "male"}, {name: "Kovu", age: "both", gender: "male"},
  {name: "Nuka", age: "adult", gender: "male"}, {name: "Mufasa", age: "adult", gender: "male"}, {name: "Kenai", age: "adult", gender: "male"},
  {name: "Koda", age: "young", gender: "male"}, {name: "The Great Prince", age: "adult", gender: "male"}, {name: "Bambi", age: "both", gender: "male"},
  {name: "Spirit", age: "both", gender: "male"}, {name: "Tod", age: "both", gender: "male"}, {name: "Copper", age: "both", gender: "male"},
  {name: "Balto", age: "adult", gender: "male"}, {name: "Steele", age: "adult", gender: "male"}, {name: "Thomas O'Malley", age: "adult", gender: "male"},
  {name: "Pongo", age: "adult", gender: "male"}, {name: "Patch", age: "young", gender: "male"}, {name: "Charlie", age: "adult", gender: "male"},
  {name: "Itchy", age: "adult", gender: "male"}, {name: "Dodger", age: "adult", gender: "male"}, {name: "Tito", age: "adult", gender: "male"},
  {name: "Buster", age: "adult", gender: "male"}, {name: "Cash", age: "adult", gender: "male"}, {name: "Tramp", age: "adult", gender: "male"},
  {name: "Francis", age: "adult", gender: "male"}, {name: "Scamp", age: "young", gender: "male"}, {name: "Bagheera", age: "adult", gender: "male"},
  {name: "Oliver", age: "young", gender: "male"}];




var youngchars = characters.filter(function (el) {
    return (el.age === "young" || el.age === "both");     
});

var adultchars = characters.filter(function (el) {
    return (el.age === "adult" || el.age === "both");     
});
  

var youngm = characters.filter(function (el) {
  return (el.gender === "male" && (el.age === "young" || el.age === "both"));
});
 
var youngf = characters.filter(function (el) {
  return (el.gender === "female" && (el.age === "young" || el.age === "both"));
});


var adultm = characters.filter(function (el) {
  return (el.gender === "male" && (el.age === "adult" || el.age === "both"));
});

var adultf = characters.filter(function (el) {
  return (el.gender === "female" && (el.age === "adult" || el.age === "both"));
});
  

var i = 1;

document.getElementById("newship").addEventListener("click", newPairing);




function newPairing() {


 
     document.getElementById('xx').style.display = "inline-block";

   
            if ($("#youngOp1").is(':checked') === false && $("#adultOp1").is(':checked') === false && $("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === false && $("#femaleOp2").is(':checked') === false && $("#femaleOp1").is(':checked') === false && $("#maleOp1").is(':checked') === false && $("#maleOp2").is(':checked') === false) {
                        alert("check some boxes dude");}

           else if ($("#femaleOp2").is(':checked') === false && $("#femaleOp1").is(':checked') === false && $("#maleOp1").is(':checked') === false && $("#maleOp2").is(':checked') === false) {
                        alert("Please choose genders for your characters.");}

           else if (($("#femaleOp1").is(':checked') === false && $("#maleOp1").is(':checked') === false) && ($("#femaleOp2").is(':checked') === true || $("#maleOp2").is(':checked') === true)) {
                        alert("Please choose gender(s) for character #1.");}
      
           else if (($("#femaleOp1").is(':checked') === true || $("#maleOp1").is(':checked') === true) && ($("#femaleOp2").is(':checked') === false && $("#maleOp2").is(':checked') === false)) {
                        alert("Please choose gender(s) for character #2.");}
  
           else if ($("#youngOp1").is(':checked') === false && $("#adultOp1").is(':checked') === false && $("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === false) {
                        alert("Please choose ages for your characters.");}
    
           else if (($("#youngOp1").is(':checked') === false && $("#adultOp1").is(':checked') === false) && ($("#youngOp2").is(':checked') === true || $("#adultOp2").is(':checked') === true)) {
                        alert("Please choose age(s) for character #1.");}
      
           else if (($("#youngOp1").is(':checked') === true || $("#adultOp1").is(':checked') === true) && ($("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === false)) {
                        alert("Please choose age(s) for character #2.");}
  
  
  
  
    if ($("#femaleOp1").is(':checked') === true && $("#maleOp1").is(':checked') === true) {  
            if ($("#youngOp1").is(':checked') === true && $("#adultOp1").is(':checked') === false) {
                  var randomNumber = Math.floor(Math.random() * (youngchars.length));
                if (youngchars[randomNumber].age === "both") {
                  document.getElementById('char1Display').innerHTML = "Young " + youngchars[randomNumber].name;}
                else if (youngchars[randomNumber].age === "young") {
                  document.getElementById('char1Display').innerHTML = youngchars[randomNumber].name;}}
      
      /*  */
            if ($("#youngOp1").is(':checked') === false && $("#adultOp1").is(':checked') === true) {
                  var randomNumber2 = Math.floor(Math.random() * (adultchars.length));
                  document.getElementById('char1Display').innerHTML = adultchars[randomNumber2].name;}
      
            if ($("#youngOp1").is(':checked') === true && $("#adultOp1").is(':checked') === true) {
                  var randomNumber3 = Math.floor(Math.random() * (characters.length));
                  document.getElementById('char1Display').innerHTML = characters[randomNumber3].name;}
      
    }
          else if ($("#femaleOp1").is(':checked') === false && $("#maleOp1").is(':checked') === true) {
            if ($("#youngOp1").is(':checked') === true && $("#adultOp1").is(':checked') === false) {
            var randomNumber4 = Math.floor(Math.random() * (youngm.length));
                if (youngm[randomNumber4].age === "both") {
                  document.getElementById('char1Display').innerHTML = "Young " + youngm[randomNumber4].name;}
                else if (youngm[randomNumber4].age === "young") {
                  document.getElementById('char1Display').innerHTML = youngm[randomNumber4].name;}}
            else if ($("#youngOp1").is(':checked') === false && $("#adultOp1").is(':checked') === true) {
            var randomNumber7 = Math.floor(Math.random() * (adultm.length));
                  document.getElementById('char1Display').innerHTML = adultm[randomNumber7].name;}}
              
          else if ($("#femaleOp1").is(':checked') === true && $("#maleOp1").is(':checked') === false) {
            if ($("#youngOp1").is(':checked') === true && $("#adultOp1").is(':checked') === false) {
            var randomNumber5 = Math.floor(Math.random() * (youngf.length));
                if (youngf[randomNumber5].age === "both") {
                  document.getElementById('char1Display').innerHTML = "Young " + youngf[randomNumber5].name;}
                else if (youngf[randomNumber5].age === "young") {
                  document.getElementById('char1Display').innerHTML = youngf[randomNumber5].name;}}
            else if ($("#youngOp1").is(':checked') === false && $("#adultOp1").is(':checked') === true) {
            var randomNumber6 = Math.floor(Math.random() * (adultf.length));
                  document.getElementById('char1Display').innerHTML = adultf[randomNumber6].name;}}
  
    if ($("#femaleOp2").is(':checked') === true && $("#maleOp2").is(':checked') === true) {  
            if ($("#youngOp2").is(':checked') === true && $("#adultOp2").is(':checked') === false) {
                  var randomNumber8 = Math.floor(Math.random() * (youngchars.length));
                if (youngchars[randomNumber8].age === "both") {
                  document.getElementById('char2Display').innerHTML = "Young " + youngchars[randomNumber8].name;}
                else if (youngchars[randomNumber8].age === "young") {
                  document.getElementById('char2Display').innerHTML = youngchars[randomNumber8].name;}}
      
      /*  */
            if ($("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === true) {
                  var randomNumber9 = Math.floor(Math.random() * (adultchars.length));
                  document.getElementById('char2Display').innerHTML = adultchars[randomNumber9].name;}
      
      
            if ($("#youngOp2").is(':checked') === true && $("#adultOp2").is(':checked') === true) {
                  var randomNumber10 = Math.floor(Math.random() * (characters.length));
                  document.getElementById('char2Display').innerHTML = characters[randomNumber10].name;}
      
    }
          else if ($("#femaleOp2").is(':checked') === false && $("#maleOp2").is(':checked') === true) {
            if ($("#youngOp2").is(':checked') === true && $("#adultOp2").is(':checked') === false) {
            var randomNumber11 = Math.floor(Math.random() * (youngm.length));
                if (youngm[randomNumber11].age === "both") {
                  document.getElementById('char2Display').innerHTML = "Young " + youngm[randomNumber11].name;}
                else if (youngm[randomNumber11].age === "young") {
                  document.getElementById('char2Display').innerHTML = youngm[randomNumber11].name;}}
            else if ($("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === true) {
            var randomNumber12 = Math.floor(Math.random() * (adultm.length));
                  document.getElementById('char2Display').innerHTML = adultm[randomNumber12].name;}}
          
              
              
          else if ($("#femaleOp2").is(':checked') === true && $("#maleOp2").is(':checked') === false) {
            if ($("#youngOp2").is(':checked') === true && $("#adultOp2").is(':checked') === false) {
            var randomNumber13 = Math.floor(Math.random() * (youngf.length));
                if (youngf[randomNumber13].age === "both") {
                  document.getElementById('char2Display').innerHTML = "Young " + youngf[randomNumber13].name;}
                else if (youngf[randomNumber13].age === "young") {
                  document.getElementById('char2Display').innerHTML = youngf[randomNumber13].name;}}
            else if ($("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === true) {
            var randomNumber14 = Math.floor(Math.random() * (adultf.length));
                  document.getElementById('char2Display').innerHTML = adultf[randomNumber14].name;}}


}
