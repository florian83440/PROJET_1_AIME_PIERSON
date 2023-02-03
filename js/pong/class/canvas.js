
const updatePlayer1Score = () => {
  player1Score += 1;
};

const updatePlayer2Score = () => {
  player2Score += 1;
};

const getScore = () => {
  return `${player1Score} | ${player2Score}`;
};


function rand(int) {
  return Math.floor(Math.random() * int);
}

 class ball {


   constructor(x, y, l, h, c) {
     this.x = x;
     this.y = y;
     this.l = l;
     this.h = h;
     this.c = c;
     if(rand(2) == 1) {
       this.vitesseX = 2.5;
       this.vitesseY = 3;       
     } else {
       this.vitesseX = 3;
       this.vitesseY = 2.5;
     }

   }

   draw(ctx) {
     ctx.fillStyle = this.c;
     ctx.fillRect(this.x, this.y, this.l, this.h);
   }

   move() {
     this.x += this.vitesseX;
     this.y += this.vitesseY;
   }
 }

class player {
  
   constructor(x, y, l, h, c) {
     this.x = x;
     this.y = y;
     this.l = l;
     this.h = h;
     this.c = c;
   } 
  
  draw(ctx) {
     ctx.fillStyle = this.c;
     ctx.fillRect(this.x, this.y, this.l, this.h);
  }
  
}

//window.onload = init;
 let canvas, ctx;
 let inputs = {};
const gameScene = new scene();
// random x, random y
let o = new ball(20, 20, 25, 25, "white");
let playerOne = new player(10, 200, 25, 400, "white");   
let playerTwo = new player(50, 200, 25, 400, "white");
  let player1Score = 0;
  let player2Score = 0;
  

 function init(val) {
   // programme principal appelé quand toute la page et ses ressources
   // ont été chargées
  if(val == "play") {
    player1Score = 0;
    player2Score = 0;

    playerOne.y = 200;
    playerTwo.y = 200;
    playerOne.h = 400;
    playerTwo.h = 400;

    if(rand(2) == 1) {
      o.vitesseX = 2.5;
      o.vitesseY = 3;       
    } else {
      o.vitesseX = 3;
      o.vitesseY = 2.5;
    }
  }

   canvas = document.querySelector("#pong");
   $(".game-score .score").text(getScore);
   // Pour dessiner on a besoin d'un contexte
   ctx = canvas.getContext("2d");
   ctx.canvas.width  = window.innerWidth;
   ctx.canvas.height = window.innerHeight;

   //x
   switch(rand(3)) {
      case 0 :
        x = Math.floor((canvas.width - (canvas.width / 4)));
        break;
      case 1 :
        x = Math.floor((canvas.width / 2));
        break;
      case 2 : 
        x = Math.floor((canvas.width / 4));
        break;
   }

   //y
   switch(rand(3)) {
    case 0 :
      y = Math.floor((canvas.height - (canvas.height / 4)));
      break;
    case 1 :
      y = Math.floor((canvas.height / 2));
      break;
    case 2 : 
      y = Math.floor((canvas.height / 4));
      break;
  }
   o.x = x;
   o.y = y;

   key();
   requestAnimationFrame(animationloop);
 }




 function key() {
  window.onkeyup = keyUp;
  window.onkeydown = keyDown;
}

function keyUp(e) {
  switch(e.key) {
      case "z" :
          inputs.z = false;
      break;
      case "s" : 
          inputs.s = false;
      break;
      case "ArrowUp" :
          inputs.arUp = false;
      break;
      case "ArrowDown" : 
          inputs.arDown = false;
      break;
  }
}

function keyDown(e) {
  switch(e.key) {
      case "z" :
          inputs.z = true;
      break;
      case "s" : 
          inputs.s = true;
      break;
      case "ArrowUp" :
          inputs.arUp = true;
      break;
      case "ArrowDown" : 
          inputs.arDown = true;
      break;
  }
}

  function rules(player, num, oldScore, o) {
    if(player == null) {
      if(o.vitesseX < 0) {
        o.vitesseX += -0.2;
      } else {
        o.vitesseX += 0.2;
      }

      if(o.vitesseY < 0) {
        o.vitesseY += -0.2;
      } else {
        o.vitesseY += 0.2;
      }
      console.log("vitesse bal : " + o.vitesseX + " | " + o.vitesseY);
      return o;
    } else {
        if(parseInt(getScore().split(" | ")[num]) !== parseInt(oldScore.split(" | ")[num])) {
          switch(parseInt(getScore().split(" | ")[num])) {
            case 1:
              player.h -=30;
            break;
            case 2:
              player.h -=30;
            break;
            case 3:
              player.h -=30;
            break;
            case 4:
              player.h -=30;
            break;
            case 5:
              player.h -=30;
            break;
            case 6:
              player.h -=30;
            break;
            case 7:
              player.h -=30;
            break;
            case 8:
              player.h -=30;
            break;
            case 9:
              player.h -=30;
            break;
          }
        }
        return player;
      }
  }



 function animationloop(tempsEcoule) {
   // 1 - On efface le contenu du canvas
   //ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.fillStyle = "rgb(0, 0, 0, 0.3)";
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   o.draw(ctx);
   oldScore = getScore();
   if(gameScene.menu() == false && gameScene.tab() == false && gameScene.game() == true) {

    if(inputs.z == true) playerOne.y -= 10;
    if(inputs.s == true) playerOne.y += 10;
    if(inputs.arUp == true) playerTwo.y -= 10;
    if(inputs.arDown == true) playerTwo.y += 10;
    
    o.move();
   }

   playerOne.draw(ctx);
   playerTwo.x = ((canvas.width - playerTwo.l) - 10);
   playerTwo.draw(ctx);

   result = true;
  
   if ((o.x + o.l) > canvas.width - playerTwo.l) {
     e = (playerTwo.y + playerTwo.h);
     if(playerTwo.y < (o.y + o.h) && (playerTwo.y + playerTwo.h) > (o.y + o.h)) {
       // Droite
       o.vitesseX = -o.vitesseX;
       this.x = canvas.width - o.l - (canvas.width - playerTwo.x);
     } else {
       result = false;
       updatePlayer1Score();
     }
   } else if(o.x < 0 + playerOne.l) {
     e = (playerOne.y + playerOne.h);
     if(playerOne.y < (o.y + o.h) && (playerOne.y + playerOne.h) > (o.y + o.h)) {
        // Gauche
       o.vitesseX = -o.vitesseX;
       o.x = o.x + playerOne.l;
     } else {
       result = false;
       updatePlayer2Score();
     }
   } else if((o.y + o.h) > canvas.height) {
     // Bas
     o.vitesseY = - o.vitesseY;
     o.y = canvas.height - o.h;
   } else if(o.y < 0) {
     // Plafond
     o.vitesseY = - o.vitesseY;
     o.y = 0;
   }

   // On demande au navigateur de rappeler cette fonction
   // dans 1/60ème de seconde
   if(result == true) {
     requestAnimationFrame(animationloop);
   } else {
    if(getScore().split(" | ")[0] >= 10 || getScore().split(" | ")[1] >= 10) {
      // show aussi le score avec un récap etc ....
      gameScene.showTab();

      scoreOne = getScore().split(" | ")[0];
      scoreTwo = getScore().split(" | ")[1];
      
      if(scoreOne > 10) scoreOne = 10;
      if(scoreTwo > 10) scoreTwo = 10;

      $(".game-score .score").text(`${scoreOne} | ${scoreTwo}`);

    } else {    
      playerOne = rules(playerOne, 0, oldScore, o);
      playerTwo = rules(playerTwo, 1, oldScore, o);
      o = rules(null, 0, null, o);
      init("");
    }
   }
 }