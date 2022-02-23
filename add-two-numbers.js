const numifyLinkedList = linkedList => {
    let str = "" 
  
    let i = 0
    let currentNode = linkedList
    while(currentNode){
        if (i === 0){
             str += linkedList.val
            i++
        }else {
            
            if (currentNode.next){
                str += currentNode.next.val
                currentNode = currentNode.next
            }else{
                break;
            }
        }
       
    }
    return Number(str)
}
var addTwoNumbers = function(l1, l2) {
    let result = numifyLinkedList(l1) + numifyLinkedList(l2)
    console.log( String(result).split("").reverse())
    return String(result).split("").reverse()
    
};

var addTwoNumbers = function(l1, l2) {
    let currNode1 = l1
    let currNode2 = l2
    let newNode = null
    let carry = 0
    do {
        let c1 = (currNode1 !== null)? currNode1.val : 0
        let c2 = (currNode2 !== null)? currNode2.val : 0
        let sum =  c1 + c2 + carry
        
        if(sum >= 10) {
            let rem = sum%10
            carry = parseInt(sum/10)
            sum = rem
        } else {
            carry = 0
        }
        newNode = {val: sum, next: newNode}
        
        currNode1 = (currNode1 !== null )? currNode1.next : null
        currNode2 = (currNode2 !== null )? currNode2.next : null
        
        
    }while(currNode1 !== null || currNode2 !== null || carry !== 0)
        
    return reverseLinkedList(newNode)
    
};

const reverseLinkedList = (node) => {
    let prev = null
    let next = null
    let current = node
    
    do {
        next = current.next
        current.next = prev
        prev = current
        current = next
    } while(current !== null)
    
    return prev
}