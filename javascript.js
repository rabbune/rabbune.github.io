var fem = ["Nala", "Kiara", "Sarafina", "Sarabi", "Vitani", "Zira", "Aleu", "Jenna", "Faline", "Vixey", "Lady", "Angel", "Duchess", "Perdita", "Dixie", "Rita", "Sasha", "Georgette", "Nita"]

var ma = ["Simba", "Kovu", "Nuka", "Mufasa", "Kenai", "Koda", "The Great Prince", "Bambi", "Spirit", "Tod", "Copper", "Balto", "Steele", "Thomas O'Malley", "Pongo", "Patch", "Charlie", "Itchy", "Dodger", "Tito", "Buster", "Cash", "Tramp", "Francis", "Scamp", "Bagheera", "Oliver"]

var mf = ["Nala", "Kiara", "Sarafina", "Sarabi", "Vitani", "Zira", "Aleu", "Jenna", "Faline", "Vixey", "Lady", "Angel", "Duchess", "Perdita", "Dixie", "Rita", "Sasha", "Georgette", "Nita", "Simba", "Kovu", "Nuka", "Mufasa", "Kenai", "Koda", "The Great Prince", "Bambi", "Spirit", "Tod", "Copper", "Balto", "Steele", "Thomas O'Malley", "Pongo", "Patch", "Charlie", "Itchy", "Dodger", "Tito", "Buster", "Cash", "Tramp", "Francis", "Scamp", "Bagheera", "Oliver"]

var young = ["Patch", "Scamp", "Angel", "Ronno", "Koda", "Oliver"]

var simbafam = ["Simba", "Kiara", "Nala", "Scar", "Mufasa"]

var kovufam = ["Kovu", "Zira", "Vitani", "Nuka", "Scar"]

var bambfam = ["Bambi", "The Great Prince"]

var kenaifam = ["Kenai", "Koda"]

var baltofam = ["Aleu", "Balto", "Jenna"]

var ladyfam = ["Scamp", "Lady", "Tramp"]





function newPairing() {
    
  
    

    if ($("#femaleOp1").is(':checked') == true && $("#maleOp1").is(':checked') == true) {  
      
          if ($("#femaleOp2").is(':checked') == true && $("#maleOp2").is(':checked') == true) {
       	var randomNumber = Math.floor(Math.random() * (mf.length));
       	var randomNumber2 = Math.floor(Math.random() * (mf.length));            
        document.getElementById('pairingDisplay').innerHTML = mf[randomNumber] + ' x ' + mf[randomNumber2];          
          }
          else if ($("#femaleOp2").is(':checked') == true && $("#maleOp2").is(':checked') == false) {
       	var randomNumber = Math.floor(Math.random() * (mf.length));
       	var randomNumber2 = Math.floor(Math.random() * (fem.length));            
        document.getElementById('pairingDisplay').innerHTML = mf[randomNumber] + ' x ' + fem[randomNumber2];          
          }
          else if ($("#femaleOp2").is(':checked') == false && $("#maleOp2").is(':checked') == true) {
       	var randomNumber = Math.floor(Math.random() * (mf.length));
       	var randomNumber2 = Math.floor(Math.random() * (ma.length));            
        document.getElementById('pairingDisplay').innerHTML = mf[randomNumber] + ' x ' + ma[randomNumber2];          
          }   
                else if ($("#femaleOp2").is(':checked') == false && $("#maleOp2").is(':checked') == false) {
       	alert("Please choose gender(s) for character #2.");}
        
    }
  else if ($("#femaleOp1").is(':checked') == true && $("#maleOp1").is(':checked') == false) {  
      
          if ($("#femaleOp2").is(':checked') == true && $("#maleOp2").is(':checked') == true) {
       	var randomNumber = Math.floor(Math.random() * (fem.length));
       	var randomNumber2 = Math.floor(Math.random() * (mf.length));            
        document.getElementById('pairingDisplay').innerHTML = fem[randomNumber] + ' x ' + mf[randomNumber2];          
          }
          else if ($("#femaleOp2").is(':checked') == true && $("#maleOp2").is(':checked') == false) {
       	var randomNumber = Math.floor(Math.random() * (fem.length));
       	var randomNumber2 = Math.floor(Math.random() * (fem.length));            
        document.getElementById('pairingDisplay').innerHTML = fem[randomNumber] + ' x ' + fem[randomNumber2];          
          }
          else if ($("#femaleOp2").is(':checked') == false && $("#maleOp2").is(':checked') == true) {
       	var randomNumber = Math.floor(Math.random() * (fem.length));
       	var randomNumber2 = Math.floor(Math.random() * (ma.length));            
        document.getElementById('pairingDisplay').innerHTML = fem[randomNumber] + ' x ' + ma[randomNumber2];          
          } 
          else if ($("#femaleOp2").is(':checked') == false && $("#maleOp2").is(':checked') == false) {
       	alert("Please choose gender(s) for character #2.");}
    }  
  else if ($("#femaleOp1").is(':checked') == false && $("#maleOp1").is(':checked') == true) {  
      
          if ($("#femaleOp2").is(':checked') == true && $("#maleOp2").is(':checked') == true) {
       	var randomNumber = Math.floor(Math.random() * (ma.length));
       	var randomNumber2 = Math.floor(Math.random() * (mf.length));            
        document.getElementById('pairingDisplay').innerHTML = ma[randomNumber] + ' x ' + mf[randomNumber2];          
          }
          else if ($("#femaleOp2").is(':checked') == true && $("#maleOp2").is(':checked') == false) {
       	var randomNumber = Math.floor(Math.random() * (ma.length));
       	var randomNumber2 = Math.floor(Math.random() * (fem.length));            
        document.getElementById('pairingDisplay').innerHTML = ma[randomNumber] + ' x ' + fem[randomNumber2];          
          }
          else if ($("#femaleOp2").is(':checked') == false && $("#maleOp2").is(':checked') == true) {
       	var randomNumber = Math.floor(Math.random() * (ma.length));
       	var randomNumber2 = Math.floor(Math.random() * (ma.length));            
        document.getElementById('pairingDisplay').innerHTML = ma[randomNumber] + ' x ' + ma[randomNumber2];          
          }  
              else if ($("#femaleOp2").is(':checked') == false && $("#maleOp2").is(':checked') == false) {
       	alert("Please choose gender(s) for character #2.");}
    }  
 
  else if ($("#femaleOp1").is(':checked') == false && $("#maleOp1").is(':checked') == false) {
           	alert("Please choose gender(s) for character #1.");}  


  
  else if ($("#femaleOp1").is(':checked') == false && $("#maleOp1").is(':checked') == false && $("#femaleOp2").is(':checked') == false && $("#maleOp2").is(':checked') == false) {
       	alert("Please choose genders for your characters.");}  
  

 

 
  
}


