class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index < 0 || index >= this.length){
            return -1;
        }

        let curr = this.head;
        for(let i = 0; i < index; i++){
            curr = curr.next;
        }

        return curr ? curr.value : -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = {value : val, next : null};
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = {value : val, next : null};

        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if(index < 0 || index >= this.length){
            return false;
        }

        if(index === 0){
            this.head = this.head.next;
            if(this.length === 0){
                this.tail = null;
            }
        }
        else{
            let curr = this.head;
            for(let i = 0; i < index-1; i++){
                curr = curr.next;
            }

            curr.next = curr.next ? curr.next.next : null;
            if(index === this.length-1){
                this.tail = curr;
            }
        }


        this.length--;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const arr = [];

        let curr = this.head;
        while(curr){
            arr.push(curr.value);
            curr = curr.next;
        }

        return arr;
    }
}
