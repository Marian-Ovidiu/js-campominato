var mina, input, range;
var punteggio = 0;
var mine = [];
var inseriti = [];
var bool = false;
var bool1 = false;
var bool2 = false;
var popUp = document.getElementById('popUp');
// Function ricerca array da riutilizzare
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

function costruttoreArray(range, limite){
  var array = [];
  var elemento;
  while (array.length <= limite){
    bool = false;
    elemento  = randomGenerator(range, 1);
    bool = ricerca(array, elemento);
    if(!bool){
      array.push(elemento);
    }
  }
  return array;
}
// -------------------------------LIVELLO 0----------------------------------------------
  document.getElementById('livello0').addEventListener('click', function() {
  var box = document.getElementById('contenitoreUl');
  box.innerHTML = '';
  popUp.style.display = 'none';
  range = 100;
   // costruisco array di mine e controllo che tutte abbiano un numero diverso
   mine = costruttoreArray(range, 15);

   var arrayTotale = [];
   // costruisco array con tutti i numeri di tutte le caselle
   arrayTotale = costruttoreArray(range, 99);

   // assoccio le mine e l'arrayTotale alle rispettive caselle
   for(var z = 0; z < range; z++){
     if(mine.includes(arrayTotale[z])){
       box.innerHTML += '<li class="box boom" id="' + arrayTotale[z] + '">'+ arrayTotale[z] + '</li>';
     } else {
       box.innerHTML += '<li class="box good" id="' + arrayTotale[z] + '">'+ arrayTotale[z] + '</li>';
     }
   }

   var punt = document.getElementById('punteggio');
   var arrayCliccati = [0];
   var clickUtente = document.getElementsByClassName('box');

   // al click sulla casella controllo esistenza mina
   for (var r = 0; r < clickUtente.length; r++){
     clickUtente[r].addEventListener('click', function(){

       var quadrato = this.className;
       var scelta = this.id;
       if(arrayCliccati.includes(scelta)){
         punteggio = punteggio;
       } else {
         arrayCliccati.push(scelta);
         if(quadrato === 'box boom'){
           // alert('Hai perso!! il tuo punteggio è: ' + (punteggio));
           popUp.style.display = 'block';
           punteggio = 0;
           arrayCliccati = [];
           this.style.paddingTop = '0.6%';
           this.style.fontSize = '25px';
           this.style.color = 'red';
           punt.innerText = 'Il tuo punteggio: ' + punteggio;
         } else {
           this.style.paddingTop = '0.6%';
           this.style.fontSize = '25px';
           this.style.color = 'green';
           punteggio += 1;
           punt.innerText = 'Il tuo punteggio: ' + punteggio;
         }
       }

     })
   }

  })
  // -------------------------------LIVELLO 1----------------------------------------------
  document.getElementById('livello1').addEventListener('click', function() {
    var box = document.getElementById('contenitoreUl');
    box.innerHTML = '';
    popUp.style.display = 'none';
    range = 80;
    // costruisco array di mine e controllo che tutte abbiano un numero diverso
    mine = costruttoreArray(range, 15);
    var arrayTotale = [];
    // costruisco array con tutti i numeri di tutte le caselle
    arrayTotale = costruttoreArray(range, 79);

    // assoccio le mine e l'arrayTotale alle rispettive caselle
    for(var z = 0; z < range; z++){
      if(mine.includes(arrayTotale[z])){
        box.innerHTML += '<li class="box boom" id="' + arrayTotale[z] + '">'+ arrayTotale[z] + '</li>';
      } else {
        box.innerHTML += '<li class="box good" id="' + arrayTotale[z] + '">'+ arrayTotale[z] + '</li>';
      }
    }

    var punt = document.getElementById('punteggio');
    var arrayCliccati = [0];
    var clickUtente = document.getElementsByClassName('box');

    // al click sulla casella controllo esistenza mina
    for (var r = 0; r < clickUtente.length; r++){
      clickUtente[r].addEventListener('click', function(){

        var quadrato = this.className;
        var scelta = this.id;

        if(arrayCliccati.includes(scelta)){
          punteggio = punteggio;
        } else {
          arrayCliccati.push(scelta);
          if(quadrato === 'box boom'){
            // alert('Hai perso!! il tuo punteggio è: ' + (punteggio));
            popUp.style.display = 'block';
            punteggio = 0;
            arrayCliccati = [];
            this.style.paddingTop = '0.6%';
            this.style.fontSize = '25px';
            this.style.color = 'red';
            punt.innerText = 'Il tuo punteggio: ' + punteggio;
          } else {
            this.style.paddingTop = '0.6%';
            this.style.fontSize = '25px';
            this.style.color = 'green';
            punteggio += 1;
            punt.innerText = 'Il tuo punteggio: ' + punteggio;
          }
        }
      })
    }
  })
  // -------------------------------LIVELLO 2----------------------------------------------
  document.getElementById('livello2').addEventListener('click', function() {
    var box = document.getElementById('contenitoreUl');
    box.innerHTML = '';
    popUp.style.display = 'none';
    range = 50;
    // costruisco array di mine e controllo che tutte abbiano un numero diverso
    mine = costruttoreArray(range, 15);
    var arrayTotale = [];
    // costruisco array con tutti i numeri di tutte le caselle
    arrayTotale = costruttoreArray(range, 49);

    // assoccio le mine e l'arrayTotale alle rispettive caselle
    for(var z = 0; z < range; z++){
      if(mine.includes(arrayTotale[z])){
        box.innerHTML += '<li class="box boom" id="' + arrayTotale[z] + '">'+ arrayTotale[z] + '</li>';
      } else {
        box.innerHTML += '<li class="box good" id="' + arrayTotale[z] + '">'+ arrayTotale[z] + '</li>';
      }
    }

    var punt = document.getElementById('punteggio');
    var arrayCliccati = [0];
    var clickUtente = document.getElementsByClassName('box');

    // al click sulla casella controllo esistenza mina
    for (var r = 0; r < clickUtente.length; r++){
      clickUtente[r].addEventListener('click', function(){

        var quadrato = this.className;
        var scelta = this.id;

        if(arrayCliccati.includes(scelta)){
          punteggio = punteggio;
        } else {
          arrayCliccati.push(scelta);
          if(quadrato === 'box boom'){
            // alert('Hai perso!! il tuo punteggio è: ' + (punteggio));
            popUp.style.display = 'block';
            punteggio = 0;
            arrayCliccati = [];
            this.style.paddingTop = '0.6%';
            this.style.fontSize = '25px';
            this.style.color = 'red';
            punt.innerText = 'Il tuo punteggio: ' + punteggio;
          } else {
            this.style.paddingTop = '0.6%';
            this.style.fontSize = '25px';
            this.style.color = 'green';
            punteggio += 1;
            punt.innerText = 'Il tuo punteggio: ' + punteggio;
          }
        }
      })
    }
  })
