function randomizeSignal() {
    const rNum = parseInt(Math.random() * 10) % 2;
    if(rNum == 0) return 1;
    else return -1;
}