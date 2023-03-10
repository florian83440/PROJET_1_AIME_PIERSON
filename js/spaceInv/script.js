$(document).ready(() => {
  const ctx = new scene();
  const cook = new cookie();

  var buttonClick = new Audio('./../assets/sounds/buttonClick.wav');
  var pauseIn = new Audio('./../assets/sounds/pauseIn.wav');
  var pauseOut = new Audio('./../assets/sounds/pauseOut.wav');
  var roundStart = new Audio('./../assets/sounds/roundStart.wav');

  var theme = {
    0 : "./../assets/sounds/songs/T a e Beats - Katalenai.mp3",
    1 : "./../assets/sounds/songs/T a e Beats - Modern days.mp3",
    2 : "./../assets/sounds/songs/T a e Beats - The Spaceman.mp3"
  };

  function newTheme() {
    var audio = theme[Math.floor(Math.random() * 3)];
    var playTheme = null;
    playTheme = new Audio(audio);
    playTheme.volume = (cook.getMusic() / 100);
    playTheme.play();
    return { playTheme, audio };
  }

  var { playTheme, audio } = newTheme();
  setInterval(() => {
    playTheme.volume = (cook.getMusic() / 100);
    if(playTheme.currentTime >= (playTheme.duration)) {
      console.log("start new");
      playTheme = newTheme();
      time = 0;
    } else {
      console.log("playing...");
      var minute = 0;
      var seconde = parseInt(playTheme.currentTime, 0);
      while(seconde > 59) {
        seconde -= 59;
        minute++;
      }
      if(seconde < 10) {
        seconde = "0" + seconde;
      }
      audio = audio.replace("./../assets/sounds/songs/T a e Beats - ", "");
      audio = audio.replace(".mp3", "");
      $(".musicInfo").text("Now Playing \"" + audio + "\" - " + minute + " : " + seconde);
    }
  }, 1000);
    

  ctx.hideTab();
  ctx.hideSettings();
  ctx.hideGame();
  ctx.hideRules(); 
  ctx.hideListPlay(); 
  ctx.hidePlayMenu(); 

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
                pauseOut.volume = (cook.getSound() / 100);
                pauseOut.play();
              } else if(ctx.menu() == false && ctx.tab() == false && ctx.game() == true) {
                ctx.showTab();
                pauseIn.volume = (cook.getSound() / 100);
                pauseIn.play();
              }
      }
  });


  var dev = false;
  if(dev == true) {
    ctx.hideTab();
    ctx.hideSettings();
    ctx.hideGame();
    ctx.hideRules(); 
    ctx.hideMenu(); 
    ctx.hideListPlay(); 
    ctx.hidePlayMenu(); 
    ctx.showGame();
    cook.setModeGame("infinite");
    init("play");
  }




  $("input[type=button].button-element.return").click(() => {
      ctx.hideTab();
      ctx.hideSettings();
      ctx.hideGame();
      ctx.hideRules();
      if(ctx.listPlay() == true) {
        ctx.hideMenu();
        ctx.showPlayMenu(); 
        ctx.hideListPlay(); 
      } else {
        console.log("hide");
        ctx.hidePlayMenu(); 
        ctx.showMenu();
      }

      buttonClick.volume = (cook.getSound() / 100);
      buttonClick.play();
  });

  $("input[type=button].button-element.toPlay").click(() => {
      ctx.hideMenu();
      ctx.hideTab();
      ctx.hideSettings();
      //ctx.showGame();
      ctx.hideRules(); 
      ctx.showPlayMenu();
      buttonClick.volume = (cook.getSound() / 100);
      buttonClick.play();
  });

  $("input[type=button].button-element.infinitePlay").click(() => {
    ctx.hideMenu();
    ctx.hideTab();
    ctx.hideSettings();
    ctx.showGame();
    ctx.hideListPlay(); 
    ctx.hidePlayMenu(); 
    ctx.hideRules(); 
    roundStart.volume = (cook.getSound() / 100);
    roundStart.play();
    init("play");
  });
  
  $("input[type=button].button-element.listPlay").click(() => {
    ctx.hideMenu();
    ctx.hideTab();
    ctx.hideSettings();
    ctx.hideRules(); 
    ctx.hidePlayMenu();
    ctx.showListPlay();
    buttonClick.volume = (cook.getSound() / 100);
    buttonClick.play();
  });

  $("input[type=button].button-element.settings").click(() => {
      // faire disparaitre la scene et afficher les options
      ctx.hideMenu();
      ctx.hideTab();
      ctx.hideGame();
      ctx.hideRules(); 
      ctx.showSettings();
      buttonClick.volume = (cook.getSound() / 100);
      buttonClick.play();
  });

  $("input[type=button].button-element.rules").click(() => {
    // faire disparaitre la scene et afficher les options
    ctx.hideMenu();
    ctx.hideTab();
    ctx.hideGame();
    ctx.showRules();     
    buttonClick.volume = (cook.getSound() / 100);
    buttonClick.play();
  });

  $("input[type=button].button-element.quit").click(() => {
    buttonClick.volume = (cook.getSound() / 100);
    buttonClick.play();
  });
});