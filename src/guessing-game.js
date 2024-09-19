class GuessingGame {
    constructor() {
        this.minRangeValue = 0;
        this.maxRangeValue = 0;
        this.resultValue = 0;
    }

    setRange(min, max) {
        this.minRangeValue = min;
        this.maxRangeValue = max;
    }

    guess() {
        this.resultValue = Math.round((this.minRangeValue + this.maxRangeValue) / 2);
        return this.resultValue;
    }

    lower() {
        this.maxRangeValue = this.resultValue;
    }

    greater() {
        this.minRangeValue = this.resultValue;
    }
}

module.exports = GuessingGame;
