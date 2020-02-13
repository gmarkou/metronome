class Metronome {
    constructor() {
        this.context = null;
        this.contextClass = null;
        this.interval_id = null;
        this.bpm = 60;
        this.RenderNext = this.renderNext.bind(this);
    }

    setBpm (new_bpm) {
        this.bpm = new_bpm;
        this.bpm = Math.max(this.bpm, 30);
        this.bpm = Math.min(this.bpm, 400);
        this.interval = 60.0 / this.bpm;
        return this.bpm;
    }

    createContext() {
        this.contextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
        if (this.contextClass) {
            this.context = new this.contextClass();
            if (this.context) {
                return true;
            }
        }
        return false;
    }

    start() {
        this.stop();

        this.interval = 60.0/this.bpm;
        this.next_tick_time = this.context.currentTime + this.interval;
        this.scheduleTick(0);
        this.interval_id = setInterval(() => this.renderNext(0.35), 25);
    }

    started() {
        return this.interval_id !== null;
    }

    stop() {
        if (this.started()) {
            clearInterval(this.interval_id);
            this.interval_id = null;
            return;
        }
    }

    scheduleTick(t) {
        let sfx = this.context.createBufferSource();
        sfx.buffer = this.buffer;
        sfx.connect(this.context.destination);
        sfx.start(t);
    }
    
    renderNext(sec) {
         let now_time = this.context.currentTime;

         while (this.next_tick_time < now_time) {
             this.next_tick_time += this.interval;
         }
         while (this.next_tick_time < now_time + sec) {
             this.scheduleTick(this.next_tick_time);
             this.next_tick_time += this.interval;
         }
     }
};

export default Metronome;
