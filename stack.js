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


}
// creating stack object
const stack = new Stack();


stack.push(1);
stack.push(2);
stack.push(3);




