class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0;
        this.arr = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        if(i > this.length) return;

        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        if(i > this.length) return;

        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        //check if the length === the capacity
        if(this.length === this.capacity){
            this.resize();
        }

        this.arr[this.length] = n;
        this.length++;
    }

    /**
     * @returns {number}
     */
    popback() {
        if(this.length < 1) {
            return;
        }

        const val = this.arr[this.length - 1];
        this.arr[this.length - 1] = 0;
        this.length--;
        return val;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity * 2;
        const newArray = new Array(this.capacity);

        for(let i = 0; i < this.capacity; i++){
            newArray[i] = this.arr[i];
        }

        this.arr = newArray;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}