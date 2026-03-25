class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (!(node instanceof Node)) {
            throw new Error('Next node must be an instance of Node');
        }
        this.next = node;
    }

    setNext(data) {
        this.next = data;
    }
    getNextNode() {
        return this.next;
    }
}

module.exports = Node;
