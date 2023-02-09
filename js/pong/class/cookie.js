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
        localStorage.setItem('soundLevel', 100);
        localStorage.setItem('musicLevel', 100);
    }

    setMusic(val) {
        localStorage.setItem('musicLevel', val);
    }

    getMusic() {
        return localStorage.getItem('musicLevel');
    }

    setSound(val) {
        localStorage.setItem('soundLevel', val);
    }

    getSound() {
        return localStorage.getItem('soundLevel');
    }
}