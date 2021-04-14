/* chiedo all utente una parola */

var parola_utente = prompt("inserisci una parola");


/* for(var i = parola_utente.length - 1; i>=0; i-- ){
    palindroma += parola_utente[i];
    if(parola_utente == palindroma){
        document.getElementById("res").innerHTML="la parola " + parola_utente + " è palindroma: " + parola_utente + "=" + palindroma;
    }else{
        document.getElementById("res").innerHTML="la parola " + parola_utente + " non è palindroma: " + parola_utente + "!=" + palindroma;
    }

} */

console.log(word(parola_utente));

function word (par_ut){
    var palindroma= "" ;
    for(var i = parola_utente.length - 1; i>=0; i-- ){
        palindroma += parola_utente[i];
        if(parola_utente == palindroma){
            document.getElementById("res").innerHTML= parola_utente + " è palindroma: " + palindroma ;
        }else{
            document.getElementById("res").innerHTML= parola_utente + " non è palindroma: " + palindroma ;
        }
    
    }
   return palindroma;

}





