
 //window.onload = init;
 let canvas, ctx;
 let inputs = {};
 const gameScene = new scene();

  let player1Score = 0;
  let player2Score = 0;
  
  const updatePlayer1Score = () => {
    player1Score += 1;
  };
  
  const updatePlayer2Score = () => {
    player2Score += 1;
  };
  
  const getScore = () => {
    return `${player1Score} | ${player2Score}`;
  };

 function init(val) {
   // programme principal appelé quand toute la page et ses ressources
   // ont été chargées
  if(val == "play") {
    player1Score = 0;
    player2Score = 0;
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
       this.vitesseX = 1.5;
       this.vitesseY = 2;       
     } else {
       this.vitesseX = 2;
       this.vitesseY = 1.5;
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

function key() {
    window.onkeyup = keyUp;
    window.onkeydown = keyDown;
}

function keyUp(e) {
    switch(e.key) {
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
        case "ArrowUp" :
            inputs.arUp = true;
        break;
        case "ArrowDown" : 
            inputs.arDown = true;
        break;
    }
}


                // random x, random y
let o = new ball(20, 20, 25, 25, "white");
let playerOne = new player(10, 100, 25, 400, "white");   
let playerTwo = new player(50, 150, 25, 400, "white");

 function animationloop(tempsEcoule) {
   // 1 - On efface le contenu du canvas
   //ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.fillStyle = "rgb(0, 0, 0, 0.3)";
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   o.draw(ctx);

   if(inputs.z == true) playerOne.x - 10;
   if(inputs.s == true) playerOne.x + 10;
   if(inputs.arUp == true) playerTwo.x - 10;
   if(inputs.arDown == true) playerTwo.x + 10;
   
   playerOne.draw(ctx);
   playerTwo.x = ((canvas.width - playerTwo.l) - 10);
   playerTwo.draw(ctx);
   if(gameScene.menu() == false && gameScene.tab() == false && gameScene.game() == true) {
    o.move();
   }
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
    init("")
   }
 }