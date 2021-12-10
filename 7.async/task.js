

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, func, id) {
        if (id == undefined) {
            throw new Error('не передан параметр ID');
        }
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].id == id) {
                console.error('звонок с уже существующим id');
            }
        }
        let alarm = {
            id: id,
            time: time,
            callback: func,
        }
        this.alarmCollection.push(alarm);
    }
    removeClock(id) {
        let arrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(elem => elem.id !== id);
        if (arrLength == this.alarmCollection.length) {
            return false;
        }
        return true;
    }
    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return hours + ':' + minutes
    }
    checkClock(alarm) {
        if (this.getCurrentFormattedTime() == alarm.time) {
            alarm.callback();
        }
    }
    start() {
        if (this.timerId == null) {
            this.timerId = setInterval(this.runAlarms, 1000);
        }
    }
    runAlarms() {
        for (let i = 0; i < this.alarmCollection.length; i++) {
            this.checkClock(this.alarmCollection[i]);
        }
    }
    stop() {
        if (timerId !== null) {
            clearInterval(timerId);
            timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(elem => console.log(elem.id + ':' + elem.time));
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}