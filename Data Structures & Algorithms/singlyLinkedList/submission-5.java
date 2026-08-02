public class ListNode{
    public int val;
    public ListNode next;

    public ListNode(int val){
        this.val = val;
        next = null;
    }
}


class LinkedList {

    ListNode head;
    ListNode tail;

    public LinkedList() {
        head = null;
        tail = null;
    }

    public int get(int index) {
        int i = 0;
        ListNode curr = head;

        while(i != index && curr != null){
            i++;
            curr = curr.next;
        }

        int val = (curr == null) ? -1 : curr.val;

        return val;
    }

    public void insertHead(int val) {
        ListNode newNode = new ListNode(val);
        
        newNode.next = head;
        head = newNode;

        if(tail == null){
            tail = head;
        }

    }

    public void insertTail(int val) {
        ListNode newNode = new ListNode(val);
        // tail.next = newNode;
        if(tail == null){
            head = newNode;
            tail = newNode;
        }
        
        tail.next = newNode;
        tail = newNode;
    }

    public boolean remove(int index) {
        int i = 0;
        ListNode curr = head;

        if(i == index && curr != null){
            head = curr.next;
            return true;
        }

        while(i < index - 1 && curr != null){
            i++;
            curr = curr.next;
        }

        
        //curr.next is the one we want to remove
        if(curr != null && curr.next != null){
            if(curr.next == tail){
                tail = curr;
            }

            curr.next = curr.next.next;
            return true;
        }

        return false;
    }

    public ArrayList<Integer> getValues() {
        ArrayList<Integer> list = new ArrayList<Integer>();

        ListNode curr = head;
        while(curr != null){
            list.add(curr.val);
            curr = curr.next;
        }

        return list;
    }
}
