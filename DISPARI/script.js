
var pari_dispari = prompt("scegli tra pari e dispari");
var numero_utente = parseInt(prompt("inserisci un numero da 1 a 5"));



function gioco (num){
    var numero_pc = Math.floor(Math.random() * 5) + 1;
    var somma = numero_utente + numero_pc;
    if(somma % 2==0 && pari_dispari == "pari"){
        
    }else if(somma % 2 == 0 && pari_dispari == "dispari"){
        
    }else if(somma % 2 !== 0 && pari_dispari == "dispari"){
        
    }else{
        
    }
   
   return num;
}


/* document.getElementById("res").innerHTML="HAI VINTO"
document.getElementById("res").innerHTML="HAI PERSO" */