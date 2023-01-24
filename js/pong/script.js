$(document).ready(() => {
    const ctx = new scene();
    $("div.tab").hide();
    $("div.game").hide();
    $("div.settings").hide();
    if($("div.tab").is(":visible")) {
        console.log("visible");
    } else {}

    $("body").keydown((e) => {

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

    }); 

    $("input[type=button].button-element.return").click(() => {
        ctx.hideTab();
        ctx.hideSettings();
        ctx.hideGame();
        ctx.showMenu();

        // reset la game.
    });

    $("input[type=button].button-element.play").click(() => {
        ctx.hideMenu();
        ctx.hideTab();
        ctx.hideSettings();
        ctx.showGame();
        // start la game
    });

    $("input[type=button].button-element.settings").click(() => {
        // faire disparaitre la scene et afficher les options
        ctx.hideMenu();
        ctx.hideTab();
        ctx.hideGame();
        ctx.showSettings();
    });



});