
//dichiaro varibili
var mina, input, punteggio = 0;
var mine = [];
var inseriti = [];
var bool = false;
var bool1 = false;
var bool2 = false;
var cicliDafare;
var range;
// Chiedo difficoltà e quindi setto il range dei valori casuali
var level = parseInt(prompt('scegli il livello da 0 a 2'));

switch (level) {
  case 0:
    function randomGenerator(){
      return Math.floor(Math.random() * (100 + 1 - 1) + 1);
    }
    cicliDafare = 84;
    range = 100;
    break;
  case 1:
    function randomGenerator(){
      return Math.floor(Math.random() * (80 + 1 - 1) + 1);
    }
    cicliDafare = 64;
    range = 80;
    break;
  case 2:
    function randomGenerator(){
      return Math.floor(Math.random() * (50 + 1 - 1) + 1);
    }
    cicliDafare = 34;
    range = 50;
    break;
}

// Function ricerca array da riutilizzare
function ricerca(arr, elem){
  var bool = false;
  for (var j = 0; j <= arr.length; j++){
    if(arr[j] === elem){
      bool = true;
      break;
    }
  }
  return bool;
}
// Fine function

// costruisco array di mine e controllo che tutte abbiano un numero diverso
while (mine.length <= 15){
    bool = false;
    mina = randomGenerator();

    bool = ricerca(mine, mina);

    if(bool === false){
      mine.push(mina);
    }
  }
// Fine Costruzione array

// Input Utente e controllo esistenza in mine
while (bool1 === false && punteggio < cicliDafare){
  input = parseInt(prompt('Inserisci un numero fra 1 e ' + range));

    // Controllo che l'utente abbia inserito il numero entro il range del livello selezionato
    if(input < 1 || input > cicliDafare){
      alert('Devi inserire un numoer compreso fa 1 e ' + range);
    } else {
      // Controllo se l'utente ha inserito più di una volta lo stesso numero
      bool2 = ricerca(inseriti, input);

      if (bool2){
        alert('hai già inserito il numero ' + input);
      } else {
        // creazione array degli input dell'utente
        inseriti.push(input);

        // controllo se l'imput coincide con la mina
        bool1 = ricerca(mine, input);

        if(bool1 !== false){
          alert('Hai perso! Il tuo punteggio è ' + (punteggio + 1));
        } else {
          alert('Sei ancora salvo!!!');
        }
        punteggio++;
      }
    }
}
