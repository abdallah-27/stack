class Stack {
    // creating constructor
    constructor(){
        this.items = [] // store data
        this.count = 0 // tell position 
    }

    // Adding element to the stack
    push(elements){
        this.items[this.count] = elements; // adding first element
        this.count += 1;
        console.log(`${elements} add to ${this.count}`); 
        return this.count -1; // returning the position
    }

    // removing the last item added
    pop(){
        if(this.count == 0){ // returning null if it is empty
            return null
        }
        // creating variable to delete the top item
        let deleteItem = this.items[this.count -1]
        this.count -= 1;
        console.log(`${deleteItem} deleted`)
        return deleteItem;
    }

    // to check the top element on the stack
    peek(){
        console.log(` Top : ${this.items[this.count-1]}`);
        return this.items[this.count - 1]
    }


}

// creating stack object
const stack = new Stack();


stack.push(1);
stack.push(2);
stack.push(3);

stack.peek();
stack.push(4);

stack.pop();
stack.pop();
stack.pop();

// stack.peek()

// stack.push(3)


