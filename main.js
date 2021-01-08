
//dichiaro varibili
var mina;
var mine = [];
var bool = false;
var i = 0;

function randomGenerator(){
  return Math.floor(Math.random() * (100 + 1 - 1) + 1);
}
mina = randomGenerator();
mine.push(mina)

// costruisco array di mine e controllo che tutte abbiano un numoer diverso
while (mine.length < 16){
    mina = randomGenerator();
    console.log('Il numero generato è ' + mina);

    for(var j = 0; j <= mine.length; j++){
      if(mine[j] === mina){
        bool = true;
      }
    }

    if(bool === false){
      mine.push(mina);
    }

}
console.log(mina);

var bool1 = false;
var imput;
var x = 0;

while (bool1 = false || x <= 84){
  imput = prompt('Inserisci un numero fra 1 e 100');
  for(var y = 0; y < mine.length; y++){
    if(mine[y] === imput){
      bool1 = true;
    }
  }
  if(bool === false){
    alert('Sei ancora salvo!!');
  } else {
    alert('Hai perso!!!');
  }
  x++
}
