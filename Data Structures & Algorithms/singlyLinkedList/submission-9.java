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
        tail = head;
    }

    public int get(int index) {
        int i = 0;
        ListNode curr = head;

        while(i != index && curr != null){
            i++;
            curr = curr.next;
        }

        return curr == null ? -1 : curr.val;
    }

    public void insertHead(int val) {
        ListNode newNode = new ListNode(val);

        //If no Nodes are found in list
        if(head == null){
            head = newNode;
            tail = head;
            return;
        }

        newNode.next = head;
        head = newNode;
    }

    public void insertTail(int val) {
        ListNode newNode = new ListNode(val);

        //If no Nodes are found in List
        if(tail == null){
            tail = newNode;
            head = tail;
            return;
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

        //We want to remove curr.next from the list
        //curr points to the Node before the one we want to remove
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

        ArrayList<Integer> list = new ArrayList<>();
        ListNode curr = head;

        while(curr != null){
            list.add(curr.val);
            curr = curr.next;
        }

        return list;
    }
}
