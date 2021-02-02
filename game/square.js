class Square {
    constructor() {
        this.visible = true;
        this.value = 0;
        this.flag = false;
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

    makeFlag() {
        this.flag = !this.flag;
    }

    isFlag() {
        return this.flag;
    }
}

module.exports = Square;