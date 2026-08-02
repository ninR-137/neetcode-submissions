class LinkedList {
    constructor() {
        this.head = { val: null, next: null }; // Dummy head node
        this.tail = null; // Tail node to keep track of the end of the list
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0) return -1; // Invalid index

        let current = this.head.next; // Start from the first real node
        let count = 0;

        while (current !== null) {
            if (count === index) {
                return current.val; // Return the value at the specified index
            }
            current = current.next;
            count++;
        }

        return -1; // Index out of bounds
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = { val, next: this.head.next };
        this.head.next = newNode;

        if (this.tail === null) {
            this.tail = newNode; // If the list was empty, set tail to the new node
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = { val, next: null };

        if (this.tail === null) {
            this.head.next = newNode; // If the list was empty, set head to the new node
            this.tail = newNode; // Set tail to the new node
        } else {
            this.tail.next = newNode; // Link the current tail to the new node
            this.tail = newNode; // Update tail to the new node
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index < 0) return false; // Invalid index

        let current = this.head;
        let count = 0;

        while (current.next !== null) {
            if (count === index) {
                current.next = current.next.next; // Bypass the node to remove it
                if (current.next === null) {
                    this.tail = current; // Update tail if we removed the last node
                }
                return true; // Successfully removed
            }
            current = current.next;
            count++;
        }

        return false; // Index out of bounds
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const values = [];
        let current = this.head.next; // Start from the first real node

        while (current !== null) {
            values.push(current.val); // Collect values
            current = current.next; // Move to the next node
        }

        return values; // Return all collected values
    }
}