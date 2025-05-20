window.addEventListener('keydown', function(e) {
    let sound = this.document.querySelector(`audio[data-key="${e.code}"]`);
    let key = this.document.querySelector(`key[data-key="${e.code}"]`);

    if(!sound) return;

    sound.play();
})