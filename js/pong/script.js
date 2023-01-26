$(document).ready(() => {
    const ctx = new scene();
    $("div.tab").hide();
    $("div.game").hide();
    $("div.settings").hide();
    if($("div.tab").is(":visible")) {
        console.log("visible");
    } else {}

    /*$("body").keydown((e) => {

        z = 90;
        s = 83;
        echap = 27;
        up = 38;
        down = 40;
        
        if(z == e.keyCode) {
            if($(".player-one").css("margin").split("px ")[0] >= 0) {
                let height = $(".player-one").css("margin").split("px ")[0] - 25;
                $(".player-one").css("margin", height + "px 20px");
            }
        } else if(s == e.keyCode) {
            if($(".player-one").css("margin").split("px ")[0] <= 500) {
                let height = $(".player-one").css("margin").split("px ")[0] - 1;
                height = height + 26;
                $(".player-one").css("margin", height + "px 20px");
            }
        } else if(echap == e.keyCode) { 
                console.log(ctx.game() + " | " + ctx.tab());
                if(ctx.tab() == true && ctx.game() == true) ctx.hideTab();
                else if(ctx.tab() == false && ctx.game() == true) ctx.showTab();
        } else if(up == e.keyCode) {
            if($(".player-two").css("margin").split("px ")[0] >= 0) {
                let height = $(".player-two").css("margin").split("px ")[0] - 25;
                $(".player-two").css("margin", height + "px 20px");
            }
        } else if(down == e.keyCode) {
            if($(".player-two").css("margin").split("px ")[0] <= 500) {
                let height = $(".player-two").css("margin").split("px ")[0] - 1;
                height = height + 26;
                $(".player-two").css("margin", height + "px 20px");
            }
        }

    }); */

    $("input[type=button].button-element.return").click(() => {
        ctx.hideTab();
        ctx.hideSettings();
        ctx.hideGame();
        ctx.showMenu();
        ctx.showSnow();
        // reset la game.
    });

    $("input[type=button].button-element.play").click(() => {
        ctx.hideMenu();
        ctx.hideTab();
        ctx.hideSettings();
        ctx.showGame();
        ctx.hideSnow();
        // start la game
    });

    $("input[type=button].button-element.settings").click(() => {
        // faire disparaitre la scene et afficher les options
        ctx.hideMenu();
        ctx.hideTab();
        ctx.hideGame();
        ctx.showSettings();
        ctx.showSnow();
    });



    var Snow = {
        el: "#snow", 
        density: 10000, // higher = fewer bits
        maxHSpeed: 5, // How much do you want them to move horizontally
        minFallSpeed: 2,
          canvas: null,
          ctx: null, 
        particles: [],
        colors: [],
        mp: 1,
        quit: false,
        init(){
          this.canvas = document.querySelector(this.el);
          this.ctx = this.canvas.getContext("2d");
          this.reset();
          requestAnimationFrame(this.render.bind(this));
          window.addEventListener("resize", this.reset.bind(this));
        },
        reset(){
          this.w = window.innerWidth;
          this.h = window.innerHeight;
          this.canvas.width = this.w;
          this.canvas.height = this.h;
          this.particles = [];
          this.mp = Math.ceil(this.w * this.h / this.density);
              for(var i = 0; i < this.mp; i++)
              {
                  var size = Math.random()*4+5;
                  this.particles.push({
                      x: Math.random()*this.w, //x-coordinate
                      y: Math.random()*this.h, //y-coordinate
                      w: size,
                      h: size,
                      vy: this.minFallSpeed + Math.random(), //density
                      vx:(Math.random()*this.maxHSpeed) - this.maxHSpeed/2,
                      fill: "#ffffff",
                      s: (Math.random() * 0.2) - 0.1
                  });
              }
        },
        
        render(){
              this.ctx.clearRect(0, 0, this.w, this.h);
              this.particles.forEach((p,i) => {
            p.y += p.vy;
                  p.x += p.vx;
                  this.ctx.fillStyle = p.fill;
                  this.ctx.fillRect(p.x, p.y, p.w, p.h);
            if(p.x > this.w+5 || p.x < -5 || p.y > this.h){
              p.x = Math.random()*this.w;
              p.y = -10;
                  }
          });
          if(this.quit){
            return;
          }
              requestAnimationFrame(this.render.bind(this));
        },
        destroy(){
          this.quit = true;
        }
          
      };
      
      var confetti = Snow.init();

});