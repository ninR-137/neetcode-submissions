/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(!list1) return list2;
        if(!list2) return list1;

        let l1 = list1.val >= list2.val ? list1 : list2;
        let l2 = list1.val < list2.val ? list1 : list2;

        let head = l2;
        l2 = l2.next;

        let curr = head;

        while(l1 && l2){
            const val1 = l1.val;
            const val2 = l2.val;

            if(val1 <= val2){
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }

            curr = curr.next;
        }

        curr.next = l1 ? l1 : l2;


        return head;
    }
}
