class cookie {

    isCookieExist() {
        let music = this.getMusic();
        let sound = this.getSound();

        console.log(music);
        console.log(sound);

        if(music !== null && sound !== null) {
            return true;
        } else {
            return false;
        }
    }

    defaultCookie() {
        localStorage.setItem('pongSoundLevel', 100);
        localStorage.setItem('pongMusicLevel', 100);
    }

    setMusic(val) {
        localStorage.setItem('pongMusicLevel', val);
    }

    getMusic() {
        return localStorage.getItem('pongMusicLevel');
    }

    setSound(val) {
        localStorage.setItem('pongSoundLevel', val);
    }

    getSound() {
        return localStorage.getItem('pongSoundLevel');
    }
}