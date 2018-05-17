// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let fast = list.getFirst();
    let slow = list.getFirst();

    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) { // compare reference of the object not data
            return true;
        }
    }

    return false;
}

module.exports = circular;
