class Square {
    constructor() {
        this.visible = false;
        this.value = 0;
        this.flag = false;
    }

    isVisible() { return this.visible; }

    isFlag() { return this.flag; }

    getValue() { return this.value; }
    
    makeVisible() {
        this.visible = true;
        this.flag = false;
    }

    setValue(value) { this.value = value; }

    makeFlag() { this.flag = !this.flag; }

    printSquare() {
        if (this.visible) {
            if(this.value == -1)
                return 'X';
            return this.value;
        } else if(this.flag)
            return '*';
        return '?';
    }
}

module.exports = Square;