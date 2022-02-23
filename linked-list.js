class Node {
    constructor(value , next = null){
        this.value = value 
        this.next = next
    }
}
class LinkedList {
    constructor(){
        this.head = null 
        this.tail = null
        this.size = 0
    }
    /**
    * @description adds a value to the end of a linked list
     */
    hasHead(){
        return this.head
    }
    hasTail(){
        return this.tail
    }
    append(val){
        const node = new Node(val)
        if(!this.hasHead()){
            this.head = node
        }
        if(this.hasTail()){
            this.tail.next = node
        }
        this.tail = node
        this.size++
    }

    /** 
    * @description adds an element to the beginning of a list
    */
    prepend(val){
        const node = new Node(val) 
        const currentHead = this.head 
        this.head = node
        this.head.next = currentHead
        if (!this.hasTail()){
            this.tail  = node
        }
        this.size++
        
    }
    toArray(){
        if(!this.hasHead()){
            return "Linked List is Empty"
        }
        const elements = [] 
        
        let currentNode = this.head 
        while(currentNode){
            elements.push(currentNode.value)
            currentNode = currentNode.next
        }
        return elements
    }

    delete(val){
        if (!this.head){
            throw new Error("Empty Linked List")
        }

        while(this.head && this.head.value === val){
            this.head = this.head.next
        }
        let currentNode = this.head 

        while(currentNode.next){
            if (currentNode.next.value === val){
                currentNode.next = currentNode.next.next
            }else {
                currentNode = currentNode.next
            }
        }
        if (this.tail.value === val){
            this.tail = currentNode
        }
    }

    find(val){
        if (!this.head){
            return null
        }
        let currentNode = this.head 
        while(currentNode.next){
            if (currentNode.next.value === val){
                return currentNode.next
            }
            currentNode = currentNode.next
        }
        return null
    }

    insertAfter(value , afterValue){
        const existingNode = this.find(afterValue)
        
        if (existingNode){
            const node = new Node(value)
            node.next = existingNode.next 
            existingNode.next = node
            return 
        }
    }
}

const linkedList = new LinkedList() 
linkedList.append(1) 
linkedList.append(2) 
linkedList.append(3) 

linkedList.prepend(5)
linkedList.prepend(5)
linkedList.append(4)
linkedList.append(6) 
console.log(linkedList.toArray())

linkedList.delete(5)
linkedList.delete(3)
linkedList.insertAfter(25 , 2)
console.log(linkedList.toArray())
// console.log(linkedList.find(5))

