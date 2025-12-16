// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Solution Big O(n) Time O(1) Space
var middleNode = function(head) {
  let slow = head;
  let fast = head;

  // We move slow by 1 and fast by 2
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};