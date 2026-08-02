/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode curr = head;
        ListNode prev = null;
        //Singly LinkedList
        //We only care about the next pointer
        while(curr != null){
            ListNode tmp = curr.next;
            curr.next = prev;

            //We want to assign prev to the curr
            //We want to assign the curr to its next : tmp
            prev = curr;
            curr = tmp;
        }


        //curr will now be pointing to null
        return prev;
    }
}
