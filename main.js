
//dichiaro varibili
var mina;
var mine = [];
var bool = false;
var i = 0;

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
    bool= false;
    mina = randomGenerator();
    console.log('Il numero generato è ' + mina);

    bool = ricerca(mine, mina);

    if(bool === false){
      mine.push(mina);
    }
  }
// Fine Costruzione array

var bool1 = false;
var input;
var x = 0;

// Input Utente e controllo esistenza in mine
while (bool1 === false && x <= 3){
  input = parseInt(prompt('Inserisci un numero fra 1 e 100'));

  bool1 = ricerca(mine, input);

  if(bool1 !== false){
    alert('Hai perso!!');
  } else {
    alert('Sei ancora salvo!!!');
  }
  x++;
}
