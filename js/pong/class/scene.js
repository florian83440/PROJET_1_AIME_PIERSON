class scene {

    constructor() {
    }

    game() {
        if($("div.game").css("display") == "none") {
            return false;
        }
        return true;
    }

    tab() {
        if($("div.tab").css("display") == "none") {
            return false;
        }
        return true;
    }

    menu() {
        if($("div.menu").css("display") == "none") {
            return false;
        }
        return true;
    }

    settings() {
        if($("div.settings").css("display") == "none") {
            return false;
        }
        return true;
    }

    settings() {
        if($("canvas#snow").css("display") == "none") {
            return false;
        }
        return true;
    }

    showTab() { $("div.tab").show(); }
    hideTab() { $("div.tab").hide(); }

    showSnow() { $("canvas#snow").show(); }
    hideSnow() { $("canvas#snow").hide(); }

    showMenu() { $("div.menu").show(); }
    hideMenu() { $("div.menu").hide(); }

    showRules() { $("div.rules").show(); }
    hideRules() { $("div.rules").hide(); }

    showGame() { $("div.game").show(); }
    hideGame() { $("div.game").hide(); }

    showSettings() { $("div.settings").show(); }
    hideSettings() { $("div.settings").hide(); }

}