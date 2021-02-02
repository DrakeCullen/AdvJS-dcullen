class Square {
    constructor() {
        this.visible = true;
        this.value = 0;
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        if (this.visible) {
            if(this.value == -1)
                return 'X';
            return this.value;
        }
        return '?';
    }

    makeVisible() {
        this.visible = true;
    }
}

module.exports = Square;