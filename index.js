// Exercise - Stop Watch
let interval;
function StopWatch() {
    this.duration = 0;
    this.isSet = false;
    this.start = () => {
        if (this.isSet) {
            throw new Error('It is already starting!')
        }
        interval = setInterval(() => this.duration++, 1000);
        this.isSet = true;
        console.log('starting counting...');
    };
    this.stop = () => {
        if (!this.isSet) {
            throw new Error('It is not starting yet!')
        }
        clearInterval(interval)
        console.log('duration : ', this.duration)
        this.isSet = false;
    };
    this.reset = () => {
        this.duration = 0;
    }
}

let watch = new StopWatch();