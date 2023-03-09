class cookie {

    isCookieExist() {
        let music = this.getMusic();
        let sound = this.getSound();

        if(music !== null && sound !== null) {
            return true;
        } else {
            return false;
        }
    }

    defaultCookie() {
        localStorage.setItem('spaceInvSoundLevel', 100);
        localStorage.setItem('spaceInvMusicLevel', 100);
    }

    setMusic(val) {
        localStorage.setItem('spaceInvMusicLevel', val);
    }

    getMusic() {
        return localStorage.getItem('spaceInvMusicLevel');
    }

    setSound(val) {
        localStorage.setItem('spaceInvSoundLevel', val);
    }

    getSound() {
        return localStorage.getItem('spaceInvSoundLevel');
    }

    setModeGame(val) {
        localStorage.setItem('gameMode', val);
    }

    getModeGame() {
        return localStorage.getItem('gameMode');
    }
}
