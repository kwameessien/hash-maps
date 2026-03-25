const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(data) {
        const newTail = new Node(data);
        let currentNode = this.head;
        if (!currentNode) {
            this.head = newTail;
        } else {
            while (currentNode.getNextNode() !== null) {
                currentNode = currentNode.getNextNode();
            }
            currentNode.setNextNode(newTail);
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.getData();
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += `${currentNode.data} -> `;
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }

    findNodeIteratively(data) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = currentNode.getNextNode();
        }
        return null;
    }

    findNodeRecursively(data, currentNode = this.head) {
        if (currentNode === null) {
            return null;
        }
        if (currentNode.data === data) {
            return currentNode;
        }
        return this.findNodeRecursively(data, currentNode.getNextNode());
    }
}

module.exports = LinkedList;