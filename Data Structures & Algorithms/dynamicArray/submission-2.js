class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.arr = new Array(capacity).fill(0);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.size === this.capacity){
            this.resize();
        }

        this.arr[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        const value = this.arr[this.size - 1];
        this.size--;

        return value;
    }

    /**
     * @returns {void}
     */
    resize() {
        let newArr = new Array(this.capacity * 2).fill(0);
        for(let i = 0; i < this.size; i++){
            newArr[i] = this.arr[i];
        }

        this.capacity = this.capacity * 2;

        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}


const myArray = new DynamicArray(4);
console.log(myArray)