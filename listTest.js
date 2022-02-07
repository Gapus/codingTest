class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    find(value) {
        let currNode = this.head;
        while (currNode.value !== value) {
            currNode = currNode.next;
        }
        return currNode;
    }

    append(newValue) {
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    insert(node, newValue) {
        const newNode = new Node(newValue);
        newNode.next = node.next;
        node.next = newNode;
    }

    remove(value) {
        let preNode = this.head;
        while (preNode.next.value !== value) {
            preNode = preNode.next;
        }
        if (preNode.next !== null) {
            preNode.next = preNode.next.next;
        }
    }

    display() {
        let currNode = this.head;
        let displayString = "[";
        while (currNode !== null) {
            displayString += `${currNode.value}, `;
            currNode = currNode.next;
        }
        displayString = displayString.substr(0, displayString.length - 2);
        displayString += "]";
        console.log(displayString);
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10); //추가는 상수 이지만 내부에 find 로 O(n)이 최고 차수이기 때문에 시간복잡도는 O(n)
linkedList.display();