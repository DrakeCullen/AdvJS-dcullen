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
        return this.value;
    }

    isVisible() {
        return this.visible;
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

    printSquare() {
        if (this.visible) {
            if(this.value == -1)
                return 'X';
            return this.value;
        } else if(this.flag)
            return '*';
        return '?';
    }

    //For testing
    makeInvisible() {
        this.visible = false;
    }
}

module.exports = Square;