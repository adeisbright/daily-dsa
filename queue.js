class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}

class Queue {
    constructor(){
        this.front = null 
        this.back = null
    }
    enqueue(value){
        let node = new Node(value)
        if (this.isEmpty()){
            this.front = this.back = node
        }else{
            this.back.next = node 
            this.back = node
        }
        this.print()
    }
    isEmpty(){
        return this.front === null 
    }
    print(){
        let str = "" 
        if (this.isEmpty()){
            console.log("Queue is Empty")
            return 
        }
        let currentNode = this.front 
        while(currentNode){
            str += currentNode.value + " "
            currentNode = currentNode.next
        }
        console.log(str)

    }
    dequeue(){
        if (this.isEmpty()){
            console.log("Queue is Empty")
            return 
        }
        let node  = this.front
        this.front = this.front.next 
        this.back = null

        this.print()
        return node

    }
}

const queue = new Queue() 
queue.enqueue(10) 
queue.enqueue(5)
queue.enqueue(4)
queue.enqueue(6)
queue.dequeue()
queue.dequeue()