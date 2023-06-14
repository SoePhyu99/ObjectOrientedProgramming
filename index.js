// Exercise - Stop Watch
let interval;
function StopWatch() {
    Object.defineProperty(this, 'duration', {
        get: () => { return duration },
        set: (v) => duration = v
    })
    Object.defineProperty(this, 'isSet', {
        get: () => { return isSet },
        set: (v) => isSet = v
    })
    this.duration = 0;
    this.isSet = false;
}
StopWatch.prototype.start = () => {
    if (this.isSet) {
        throw new Error('It is already starting!')
    }
    interval = setInterval(() => { this.duration++ }, 1000);
    this.isSet = true;
    console.log('starting counting...');
};
StopWatch.prototype.stop = () => {
    if (!this.isSet) {
        throw new Error('It is not starting yet!')
    }
    clearInterval(interval)
    console.log('duration : ', this.duration)
    this.isSet = false;
    console.log(this.duration);
};
StopWatch.prototype.reset = () => {
    this.duration = 0;
}

let watch = new StopWatch();