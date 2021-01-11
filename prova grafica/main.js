
//dichiaro varibili
var mina, input, punteggio = 0;
var mine = [];
var inseriti = [];
var bool = false;
var bool1 = false;
var bool2 = false;
var cicliDafare;
var range;
var level;

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
// Function per il controllo dell'esistenza della mina
function controlloMina() {
  var valore = document.getElementsByTagName('li').value;

  console.log('ciao, hai cliccato il numero ' + parseInt(valore));
}


//  setto valori per bottoni scelta del livello
  document.getElementById('livello0').addEventListener('click', function() {
   level = 0;
   function randomGenerator(){
     return Math.floor(Math.random() * (100 + 1 - 1) + 1);
   }
   cicliDafare = 84;
   range = 100;

   var box = document.getElementById('contenitoreUl');
   var arrayTotale = [];
   var z = 0;
   // costruisco array con tutti i numeri di tutte le caselle
   while(arrayTotale.length < 100){
    bool=false;
    mina = randomGenerator();

    bool = ricerca(arrayTotale, mina);

    if(bool === false){
      arrayTotale.push(mina);
      z += 1;
      box.innerHTML += '<li class="box" onclick="controlloMina()" value="' + mina + '">'+ mina + '</li>';
    }
   }
   // costruisco array di mine e controllo che tutte abbiano un numero diverso
     while (mine.length <= 15){
       bool = false;

       mina  = randomGenerator();

       bool = ricerca(mine, mina);

       if(bool === false){
         mine.push(mina);
       }
     }
   // Fine Costruzione array
   console.log(mine);
  })
  document.getElementById('livello1').addEventListener('click', function() {
  level = 1;
  })
  document.getElementById('livello2').addEventListener('click', function() {
  level = 2;
  })

  // // Input Utente e controllo esistenza in mine
  // while (bool1 === false && punteggio < cicliDafare){
  //   input = parseInt(prompt('Inserisci un numero fra 1 e ' + range));
  //
  //     // Controllo che l'utente abbia inserito il numero entro il range del livello selezionato
  //     if(input < 1 || input > cicliDafare){
  //       alert('Devi inserire un numoer compreso fa 1 e ' + range);
  //     } else {
  //       // Controllo se l'utente ha inserito più di una volta lo stesso numero
  //       bool2 = ricerca(inseriti, input);
  //
  //       if (bool2){
  //         alert('hai già inserito il numero ' + input);
  //       } else {
  //         // creazione array degli input dell'utente
  //         inseriti.push(input);
  //
  //         // controllo se l'imput coincide con la mina
  //         bool1 = ricerca(mine, input);
  //
  //         if(bool1 !== false){
  //           alert('Hai perso! Il tuo punteggio è ' + (punteggio + 1));
  //         } else {
  //           alert('Sei ancora salvo!!!');
  //         }
  //         punteggio++;
  //       }
  //     }
  // }
