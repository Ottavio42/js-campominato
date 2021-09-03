function numeroCasuale(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


var numero = parseInt(prompt("Campo Minato scrivi 100 per la difficoltà bassa, 80 per la difficoltà intermedia e 50 per la difficoltà alta :"));
while(numero != 50 && numero != 80 && numero != 100){
    numero = parseInt(prompt("scrivi un numero tra 50, 80, e 100 :"));
}

for ( var i=1; i <= numero ; i++){

    document.getElementById("campo").innerHTML += "<div class= \"quadrato\">" + i + "</div>";

}
var bombe = [];
while(bombe.length < 16){
    var bombeR = numeroCasuale(1, numero);
    if(bombe.indexOf(bombeR) === -1){
        bombe.push(bombeR);
    } 
}
console.log(bombe);

var numeriGiocatore = [];

document.getElementById("campo").addEventListener("click" , 
function(event){

    let clickGiocatore = event.target.innerHTML;

    event.target.classList.add("cliccato");

    if (numeriGiocatore.includes(event.target.innerHTML) )
    {
        alert("Seleziona una casella che non hai precedentemente cliccato...");

    } 
    else {
    numeriGiocatore.push(event.target.innerHTML)
    }
    for (i=1; i <= bombe.length; i++) {
        
        if(clickGiocatore == bombe[i]) {
            event.target.classList.add("esploso");
            alert("Hai totalizzato il punteggio di : " + (numeriGiocatore.length) + " , ricarica e prova a totalizzare il massimo del punteggio!");
        }
        if (numeriGiocatore.length == (numero) - 16){
            alert( " Hai totalizzato il punteggio massimo, ricarica la pagina e continua a giocare!")
        }
    }
    
}
);