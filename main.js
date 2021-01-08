
//dichiaro varibili
var mina, input, punteggio = 0;
var mine = [];
var inseriti = [];
var bool = false;
var bool1 = false; 
var bool2 = false;

console.log(bool, bool1, bool2);
// Function da riutilizzare
function randomGenerator(){
  return Math.floor(Math.random() * (100 + 1 - 1) + 1);
}

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

console.log('sono arrivato');
// Input Utente e controllo esistenza in mine
while (bool1 === false && punteggio < 84){
  input = parseInt(prompt('Inserisci un numero fra 1 e 100'));

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
