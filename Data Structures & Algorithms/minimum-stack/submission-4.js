class MinStack {

    constructor() {
        this.arr = [];
        this.minimum = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
        
        // If the minimum stack is empty or the new value is less than or equal to the current minimum, push it onto the minimum stack
        if (this.minimum.length === 0 || val <= this.minimum[this.minimum.length - 1]) {
            this.minimum.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.arr.pop();


        if(this.minimum.length > 0 && val === this.minimum[this.minimum.length - 1]) {
            this.minimum.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        if (this.arr.length === 0) {
            return null; // or throw an error
        }
        return this.arr[this.arr.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.minimum.length === 0) {
            return null; // or throw an error
        }
        return this.minimum[this.minimum.length - 1];
    }

    log() {
        console.log(`Stack: ${this.arr}`);
        console.log(`Minimum Stack: ${this.minimum}`);
    }
}