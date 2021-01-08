
//dichiaro varibili
var mina;
var mine = [];
var bool = false;
var i = 0;

// costruisco array di mine e controllo che tutte abbiano un numoer diverso
while (mine.length <= 15){
    mina = Math.floor(Math.random() * (100 + 1 - 1) + 1);
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
