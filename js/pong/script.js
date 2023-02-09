$(document).ready(() => {
    const ctx = new scene();
    const cook = new cookie();

    var buttonClick = new Audio('./../assets/sounds/buttonClick.wav');
    var pauseIn = new Audio('./../assets/sounds/pauseIn.wav');
    var pauseOut = new Audio('./../assets/sounds/pauseOut.wav');
    var roundStart = new Audio('./../assets/sounds/roundStart.wav');

    $("div.tab").hide();
    $("div.game").hide();
    $("div.settings").hide();
    $("div.rules").hide();
    if($("div.tab").is(":visible")) {
        console.log("visible");
    } else {}

    if(cook.isCookieExist() == false) {
      cook.defaultCookie();
    } else {
      $(".musicconfig").val(cook.getMusic());
      $(".soundconfig").val(cook.getSound());
    }

    $(".musicconfig").change(() => {
      cook.setMusic($(".musicconfig").val())
    })

    $(".soundconfig").change(() => {
      cook.setSound($(".soundconfig").val())
    })

    $("body").keydown((e) => {
        echap = 27;
        if(echap == e.keyCode) { 
                console.log(ctx.menu() + " | " + ctx.game() + " | " + ctx.tab());
                if(ctx.menu() == false && ctx.tab() == true && ctx.game() == true) { 
                  ctx.hideTab();
                  pauseOut.play();
                } else if(ctx.menu() == false && ctx.tab() == false && ctx.game() == true) {
                  ctx.showTab();
                  pauseIn.play();
                }
        }
    });

    $("input[type=button].button-element.return").click(() => {
        ctx.hideTab();
        ctx.hideSettings();
        ctx.hideGame();
        ctx.hideRules(); 
        ctx.showMenu();
        ctx.showSnow();
        buttonClick.play();
    });

    $("input[type=button].button-element.play").click(() => {
        ctx.hideMenu();
        ctx.hideTab();
        ctx.hideSettings();
        ctx.showGame();
        ctx.hideSnow();
        ctx.hideRules(); 
        roundStart.play();
        init("play");
    });

    $("input[type=button].button-element.settings").click(() => {
        // faire disparaitre la scene et afficher les options
        ctx.hideMenu();
        ctx.hideTab();
        ctx.hideGame();
        ctx.hideRules(); 
        ctx.showSettings();
        ctx.showSnow();
        buttonClick.play();
    });

    $("input[type=button].button-element.rules").click(() => {
      // faire disparaitre la scene et afficher les options
      ctx.hideMenu();
      ctx.hideTab();
      ctx.hideGame();
      ctx.showRules();     
      buttonClick.play();
    });

    $("input[type=button].button-element.quit").click(() => {
      buttonClick.play();
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