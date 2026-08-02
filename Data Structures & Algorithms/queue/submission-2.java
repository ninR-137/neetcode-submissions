public class ListNode{
    ListNode prev;
    ListNode next;
    int val;

    public ListNode(int val){
        this.val = val;
        prev = null;
        next = null;
    }
}

class Deque {
    ListNode head;
    ListNode tail;

    public Deque() {
        this.head = null;
        this.tail = null;
    }

    public boolean isEmpty() {
        return this.head == null;
    }

    public void append(int value) {
       ListNode node = new ListNode(value);

       if(isEmpty()){
            this.head = node;
            this.tail = node;
            return;
       }

       this.tail.next = node;
       node.prev = this.tail;
       this.tail = node;
    }


    public void appendleft(int value) {
        ListNode node = new ListNode(value);

        if(isEmpty()){
            this.head = node;
            this.tail = node;
            return;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    public int pop() {
        if(isEmpty()) return -1;

        int val = this.tail.val;
        this.tail = this.tail.prev;

        if(this.tail == null){
            this.head = null;
        } else {
            this.tail.next = null;
        }

        return val;
    }

    public int popleft() {
        if(isEmpty()) return -1;

        int val = this.head.val;
        this.head = this.head.next;
        
        if(this.head == null){
            this.tail = null;
        } else {
            this.head.prev = null;
        }

        return val;
    }
}
