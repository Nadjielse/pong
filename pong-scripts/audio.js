const sound = {
    strike: null,
    strongStrike: null,
    wallBounce: null
};

function playSfx(soundName) {
    const sfx = new Audio("assets/sfx/" + soundName);
    sfx.play();
    return sfx;
}

function playStrongStrikeSfx() {
    const intensity = Math.abs(ball.hSpeed) - ball.startSpeed;
    return playSfx(`strong-strike-${intensity}.wav`);
}