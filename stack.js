class Stack {
    constructor(){
        this.items = [] 
        this.count = 0
    }

    push(element){
        this.items[this.count] = element 
        console.log(`${element} added to ${this.count}`)
        this.count++
        return this.count - 1
    }
    
    pop(){
        if(this.count === 0) undefined 
        let deletedItem = this.items[this.count - 1] 
        this.count -= 1
        console.log(`${deletedItem} removed`)
        this.items.length = this.count
        return deletedItem
    }
    peek(){
      if(this.count === 0) undefined 
      return this.items[this.count - 1]
    }
    size(){
        return this.count
    }
    isEmpty(){
        return this.count === 0
    }

    print(){
        let str = "" 
        for(let i = 0 ; i < this.count ; i++){
            str += this.items[i] + " "
        }
        return str
    }

    clear(){
        this.items = [] 
        this.count = 0 
        return this.items
    }

}

const stack = new Stack() 
console.log(stack.isEmpty())
stack.push(1)
stack.push(2)
stack.push(4)
stack.pop()
console.log(stack , stack.size() , stack.isEmpty())
console.log(stack.peek())