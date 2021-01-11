var mina, input, range;
var punteggio = 0;
var mine = [];
var inseriti = [];
var bool = false;
var bool1 = false;
var bool2 = false;

// Function da riutilizzare (generatore random e ricerca elemento nell'arrray)
function randomGenerator(max, min){
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function ricerca(arr, elem){
  var bool = false;
    if(arr.includes(elem)){
      bool = true;
    }
  return bool;
}

// Chiedo difficoltà e quindi setto il range dei valori casuali
var level = parseInt(prompt('scegli il livello da 0 a 2'));

switch (level) {
  case 0:
    range = 100;
    break;
  case 1:
    range = 80;
    break;
  case 2:
    range = 50;
    break;
}

// costruisco array di mine e controllo che tutte abbiano un numero diverso
while (mine.length <= 15){
    bool = false;
    mina = randomGenerator(range, 1);
    bool = ricerca(mine, mina);
    if(!bool){
      mine.push(mina);
    }
  }

// Input Utente e controllo esistenza in mine
while (bool1 === false && punteggio < (range - 16)){
  input = parseInt(prompt('Inserisci un numero fra 1 e ' + range));
    // Controllo che l'utente abbia inserito il numero entro il range del livello selezionato
    if(input < 1 || input > (range - 16)){
      alert('Devi inserire un numero compreso fa 1 e ' + range);
    } else if(input.length === undefined || input.length === null){
      alert('devi inserire almeno un numero')
    } else {
      // Controllo se l'utente ha inserito più di una volta lo stesso numero
      bool2 = ricerca(inseriti, input);
      if (bool2){
        alert('hai già inserito il numero ' + input);
      } else {
        // creazione array degli input dell'utente
        inseriti.push(input);

        // controllo se l'input coincide con la mina
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
