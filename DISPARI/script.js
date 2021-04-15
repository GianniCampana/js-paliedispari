
var pari_dispari = prompt("scegli tra pari e dispari");
var numero_utente = parseInt(prompt("inserisci un numero da 1 a 5"));
var num_pc = gioco(5);
var somma = numero_utente + num_pc;

console.log(num_pc);
console.log(somma);

console.log(checkPariDispari(somma))

console.log("il tuo numero è: " + numero_utente);
console.log("il numero del pc è " + num_pc);
console.log("la somma totale è: " + somma);

if(pari_dispari == checkPariDispari(somma)){
    console.log("hai vinto")
}else{
    console.log("hai perso");
}

function checkPariDispari(num){

    if(num % 2 === 0){
        return "pari"
    }else{
        return "dispari"
    }
}

function gioco (max){
    var num_random = Math.ceil(Math.random() * 5);
    return num_random;
}


