let canvas, ctx;
let cook = new cookie();
let inputs = {};
let projectil = [];
let enemies = [];
var enemieDestroy = new Audio('./../assets/sounds/borderHit.wav');
var shoot = new Audio('./../assets/sounds/playerHit.wav');

const updatePlayer1Score = (val) => {
    player1Score += val;
  };
  
  const updatePlayer2Score = (val) => {
    player2Score += val;
  };



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
      ctx.beginPath();     //Begin a path..
      // top
      ctx.moveTo(this.x + (this.l / 2), this.y - this.h);  //Startpoint (x, y)
      // droite
      ctx.lineTo(this.x + this.h, this.y); //Point 1    (x, y)
      // gauche
      ctx.lineTo(this.x, this.y);  //Point 2    (x, y)
      ctx.closePath();
      ctx.fill();

//      ctx.fillStyle = this.c;
//      ctx.fillRect(this.x, this.y, this.l, this.h);
    }  
}

class enemie {
  constructor(x, y, l, h, type) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.h = h;
    this.type = type;
  } 

  draw(ctx) {
    if(this.type == "carré") {
      const rectangle = new Path2D();
      rectangle.fillStyle = "white";
      ctx.fillRect(this.x, this.y, this.l, this.h);
    } else {
      const circle = new Path2D();
      circle.fillStyle = "white";
      circle.arc(this.x, this.y, this.l, 0, 2 * Math.PI);
      ctx.fill(circle);
    }
  }  


}



class projectile {
  constructor(x, y, l, h, c, time, player) {
    this.x = (x - (l/2));
    this.y = y;
    this.l = l;
    this.h = h;
    this.c = c;
    this.time = time;
    this.player = player;
  }

  move() {
    this.y -= 10;
  }

  draw() {
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.l, this.h);
  }
}

class gameMap {
  constructor(array) {
    this.array = new Set();
    this.array.add({ 
      "x" : "1/4",
      "y" : "0",
      "width" : "20",
      "height" : "",
      "color" : "white"
    });
    this.array.add({ 
      "x" : "3/4",
      "y" : "0",
      "width" : "20",
      "height" : "",
      "color" : "white"
    });
  }

  draw(ctx) {
    this.array.forEach((element) => {
      let posX = 0;
      let height = 0;

      ctx.fillStyle = element.color;

      if(element.x == "1/4") {
        //Left menu
        posX = ((ctx.canvas.width / 4)  - element.width);

        ctx.font = "36px Pixel";
        ctx.fillText("Player 1", 75, 50);
        ctx.fillText("Player 2", 75, 200);
        
        ctx.font = "12px Pixel";
        ctx.fillText("Lives : 0", 50, 100);
        ctx.fillText("Lives : 0", 50, 250);
        ctx.fillText("Score : "+player1Score, 200, 100);
        ctx.fillText("Score : "+player2Score, 200, 250);
      }
      if(element.x == "3/4") {
        //Right menu
        posX = (((ctx.canvas.width / 4) * 3)  - element.width);

        ctx.font = "24px Pixel";
        ctx.fillText("Niveau : 0", posX+75, 50);
        ctx.fillText("Score : 999999", posX+75, 100);
      }
      if(element.height == "") {
        height = ctx.canvas.height;
      }

      ctx.fillRect(posX, element.y, element.width, height);

      
    })
  }
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
      case "q" :
          inputs.q = false;
      break;
      case "s" : 
          inputs.s = false;
      break;
      case "d" : 
          inputs.d = false;
      break;
      case "ArrowUp" :
          inputs.arUp = false;
      break;
      case "ArrowLeft" :
          inputs.arLeft = false;
      break;
      case "ArrowDown" : 
          inputs.arDown = false;
      break;
      case "ArrowRight" : 
          inputs.arRight = false;
      break;
      case "Enter" : 
          inputs.enter = false;
      break;
      case " " : 
          inputs.space = false;
      break;
  }
}

function keyDown(e) {
  switch(e.key) {
      case "z" :
          inputs.z = true;
      break;
      case "q" :
          inputs.q = true;
      break;
      case "s" : 
          inputs.s = true;
      break;
      case "d" : 
          inputs.d = true;
      break;
      case "ArrowUp" :
          inputs.arUp = true;
      break;
      case "ArrowLeft" :
          inputs.arLeft = true;
      break;
      case "ArrowDown" : 
          inputs.arDown = true;
      break;
      case "ArrowRight" : 
          inputs.arRight = true;
      break;
      case "Enter" : 
          //inputs.enter = true; 
          var bride = false;
          time = new Date().getUTCSeconds();

          for(var i = 0; i < projectil.length;i++) {
            if(projectil[i].player == "two") {
              if(projectil[i].time == time) {
                bride = true;
              }
            }
          }

          if(bride == false) {
            projectil[projectil.length] = new projectile((playerTwo.x + (playerTwo.l / 2)), playerTwo.y, 10, 10, "white", time, "two");
            shoot.volume = (cook.getSound() / 100);
            shoot.play();
          }
      break;
      case " " : 
          //inputs.space = true;
          var bride = false;
          time = new Date().getUTCSeconds();

          for(var i = 0; i < projectil.length;i++) {
            if(projectil[i].player == "one") {
              if(projectil[i].time == time) {
                bride = true;
              }
            }
          }

          if(bride == false) {
            projectil[projectil.length] = new projectile((playerOne.x + (playerOne.l / 2)), playerOne.y, 10, 10, "white", time, "one");
            shoot.volume = (cook.getSound() / 100);
            shoot.play();
          }
      break;
  }
}

const gameScene = new scene();
let map = new gameMap();
let playerOne = new player(400, 70, 50, 50, "white");   
let playerTwo = new player(600, 70, 50, 50, "white");


let player1Score = 0;
let player2Score = 0;

function init(val) {
    canvas = document.querySelector("#spaceInv");
    //$(".game-score .score").text(getScore);
    // Pour dessiner on a besoin d'un contexte
    ctx = canvas.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
 
    if(val == "play") {
      playerOne.x = ((canvas.width / 6) * 2);
      playerOne.y = (canvas.height - 100);
      playerTwo.x = ((canvas.width / 6) * 4) - 25;
      playerTwo.y = (canvas.height - 100);   
    }
    if(val == "play" || val == "infinite") {
      var posX = 0;
      var posY = 0;
      for(var i = 0; i < 32; i++) {
        if(i % 2 == 0) {
          var pEn = new enemie((window.innerWidth / 4) + 50, 70, 40, 40, "carré");
        } else {
          var pEn = new enemie((window.innerWidth / 4) + 70, 90, 20, 20, "rond");
        }
        var newX = 0;
        var newY = 0;
        var gauche = (window.innerWidth / 4); 
        var droite = (window.innerWidth / 4) + (window.innerWidth / 2) - 50;

        var limite = droite - gauche;
        var espacement =  (limite - (50 * 8)) / 8 + 50;
        console.log(espacement);
        if(posX > 0) {
          newX = posX * espacement;
        }
        if(posY > 0) {
          newY = 75 * posY;
        }
        pEn.x += newX;
        pEn.y += newY;
        if(posX >= 7) {
          posX = 0;
          posY++;
        } else {
          posX++;
        }

        enemies[i] = pEn;
      }

      console.log(enemies);
    }

    key();
    requestAnimationFrame(animationloop);
}

function animationloop(tempsEcoule) {
  ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
   
  map.draw(ctx);
  
  if(gameScene.menu() == false && gameScene.tab() == false && gameScene.game() == true) {
    if((((ctx.canvas.width / 4) * 3) - 20 - playerOne.l) > playerOne.x) { if(inputs.d == true) playerOne.x += 10; } 
    if(playerOne.x > (ctx.canvas.width / 4)) { if(inputs.q == true) playerOne.x -= 10; }
    if((ctx.canvas.height - playerOne.h) > playerOne.y) { if(inputs.s == true) playerOne.y += 10; }
    if((ctx.canvas.height / 2) < playerOne.y) { if(inputs.z == true) playerOne.y -= 10; }

    if((((ctx.canvas.width / 4) * 3) - 20 - playerTwo.l) > playerTwo.x) { if(inputs.arRight == true) playerTwo.x += 10; } 
    if(playerTwo.x > (ctx.canvas.width / 4)) { if(inputs.arLeft == true) playerTwo.x -= 10; }
    if((ctx.canvas.height - playerTwo.h) > playerTwo.y) { if(inputs.arDown == true) playerTwo.y += 10; }
    if((ctx.canvas.height / 2) < playerTwo.y) { if(inputs.arUp == true) playerTwo.y -= 10; }

    //if(inputs.enter == true) projectil[projectil.length] = new projectile((playerTwo.x + (playerTwo.l / 2)), playerTwo.y, 10, 10, "white");
    //if(inputs.space == true) projectil[projectil.length] = new projectile((playerOne.x + (playerOne.l / 2)), playerOne.y, 10, 10, "white");
  }

  
  for(var i = 0; i < enemies.length; i++) { 
    if(enemies[i] !== null) {
      for(var o = 0; o < projectil.length; o++) {   
        if(enemies[i] !== null) {
          if(enemies[i].type == "rond") {
            var l = (enemies[i].x - enemies[i].l);
          } else {
            var l = (enemies[i].x);
          }
          if(l < projectil[o].x && (enemies[i].x + enemies[i].l) > projectil[o].x) {
            if((enemies[i].y - enemies[i].h) < projectil[o].y  && (enemies[i].y + enemies[i].h) > projectil[o].y) {
              if(enemies[i].type == "carré") var enScore = 50;
              if(enemies[i].type == "rond") var enScore = 25;
              enemies[i] = null;
              if(projectil[o].player == "one") {
                updatePlayer1Score(enScore);
              } else {
                updatePlayer2Score(enScore);
              }
              projectil.shift();
              enemieDestroy.volume = (cook.getSound() / 100);
              enemieDestroy.play();
            }
          }
        }
      }

      if(enemies[i] !== null) {
        enemies[i].draw(ctx);
      }
    }
  }

  for(var i = 0; i < projectil.length;i++) {
    if(projectil[i].y <= 0) {
      projectil.shift();
    } else {
      projectil[i].move();
      projectil[i].draw();
    }
  }

  playerOne.draw(ctx);
  playerTwo.draw(ctx);

  var length = 0;
  for(var i = 0; i < enemies.length; i++) {
    if(enemies[i] == null) length++;
  }

  if(length !== enemies.length) {
    requestAnimationFrame(animationloop);
  } else {
    if(cook.getModeGame() == "infinite") {
      init("infinite");
    }
  }
}
