class Node {
    constructor(value, priority) {
        this.value = value; 
        this.priority = priority; 
    }
}

class PQ {
    constructor() {
        this.nodes = []; 
    }
    
    /**
     * Adds a value to a queue using a particular priority 
     * @param {Any} value 
     * @param {Number} priority 
     * @returns 
     */
    enqueue(value, priority) {
        const node = new Node(value, priority); 
        this.nodes.push(node); 

        let index = this.nodes.length - 1; 
        let element = this.nodes[index] 

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parentNode = this.nodes[parentIndex] 
            if (element.priority <= parentNode.priority) break; 
            
            this.nodes[parentIndex] = element; 
            this.nodes[index] = parentNode;
            index = parentIndex
        }
        return this.nodes; 
    }

    dequeue() {
        const max = this.nodes[0]; 
        const end = this.nodes.pop(); 

        // console.log(max)
        // console.log(end);
        // console.log(this.nodes.length);

        if (this.nodes.length) {
            this.nodes[0] = end 
            let index = 0; 
            let length = this.nodes.length; 
            let element = this.nodes[0]; 
            
            while (true) {
                let leftIndex = 2 * index + 1; 
                let rightIndex = 2 * index + 2; 

                let [leftChild, rightChild, swap] = [null, null, null]; 

                console.log(`length : ${length} , leftIndex :${leftIndex} , rightIndex : ${rightIndex}`);
                if (leftIndex < length) {
                    leftChild = this.nodes[leftIndex];
                    if(leftChild.priority > element.priority) {
                        swap = leftIndex;
                    }
                }

                if (rightIndex < length) {
                    rightChild = this.nodes[rightIndex]; 
                    if (
                        (swap === null && rightChild.priority > element.priority) || 
                        (swap !== null && rightChild.priority > leftChild.priority)
                    ) {
                        swap = rightIndex
                    }
                }
                console.log("swap is "); 
                console.log(swap); 
                if (swap === null) break;
                this.nodes[index] = this.nodes[swap];
                this.nodes[swap] = element;
                index = swap;
            }

        }
        console.log(this.nodes); 
        return max 
    }
}

const n = new PQ();
n.enqueue(4, 3);
n.enqueue(9, 4); 
n.enqueue(1, 5); 
n.enqueue(2, 6); 
n.enqueue(2, 7); 

console.log(n)
n.dequeue()
n.dequeue()
n.dequeue()
n.dequeue()
 n.dequeue()
//console.log(n)