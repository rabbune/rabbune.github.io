var fem = ["Nala", "Kiara", "Sarafina", "Sarabi", "Vitani", "Zira", "Aleu", "Jenna", "Faline", "Vixey", "Lady", "Angel", "Duchess", "Perdita", "Dixie", "Rita", "Sasha", "Georgette", "Nita"]

var ma = ["Simba", "Kovu", "Nuka", "Mufasa", "Kenai", "Koda", "The Great Prince", "Bambi", "Spirit", "Tod", "Copper", "Balto", "Steele", "Thomas O'Malley", "Pongo", "Patch", "Charlie", "Itchy", "Dodger", "Tito", "Buster", "Cash", "Tramp", "Francis", "Scamp", "Bagheera", "Oliver"]

var mf = ["Nala", "Kiara", "Sarafina", "Sarabi", "Vitani", "Zira", "Aleu", "Jenna", "Faline", "Vixey", "Lady", "Angel", "Duchess", "Perdita", "Dixie", "Rita", "Sasha", "Georgette", "Nita", "Simba", "Kovu", "Nuka", "Mufasa", "Kenai", "Koda", "The Great Prince", "Bambi", "Spirit", "Tod", "Copper", "Balto", "Steele", "Thomas O'Malley", "Pongo", "Patch", "Charlie", "Itchy", "Dodger", "Tito", "Buster", "Cash", "Tramp", "Francis", "Scamp", "Bagheera", "Oliver"]








function newPairing() {


    if ($("#femaleOp").is(':checked') == true && $("#maleOp").is(':checked') == true) {
       	var randomNumber = Math.floor(Math.random() * (mf.length));
       	var randomNumber2 = Math.floor(Math.random() * (mf.length));
	document.getElementById('pairingDisplay').innerHTML = mf[randomNumber] + " x " + mf[randomNumber2];
      
      
    } else if ($("#femaleOp").is(':checked') == true && $("#maleOp").is(':checked') == false) {
       	var randomNumber = Math.floor(Math.random() * (fem.length));
        var randomNumber2 = Math.floor(Math.random() * (fem.length));
	document.getElementById('pairingDisplay').innerHTML = fem[randomNumber] + " x " + fem[randomNumber2];

      
      
    } else if ($("#femaleOp").is(':checked') == false && $("#maleOp").is(':checked') == true) {
       	var randomNumber = Math.floor(Math.random() * (ma.length));
       	var randomNumber2 = Math.floor(Math.random() * (ma.length));
	document.getElementById('pairingDisplay').innerHTML = ma[randomNumber] + " x " + ma[randomNumber2];
      
      
      
    } else if ($("#femaleOp").is(':checked') == false && $("#maleOp").is(':checked') == false) {
       	alert("Please choose something.");

    }

}