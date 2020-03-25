interface StackDataStructure<T>{
    push(newItem: T): void;
    pop(): T;
}

class Stack<T> implements StackDataStructure<T>{
    items: Array<T> = [];
    push(newItem: T): void {
        this.items.push(newItem);
    }
    pop(): T {
        return this.items.pop();
    }
}

let myNumberStack:Stack<number> = new Stack<number>();
myNumberStack.push(10);
myNumberStack.pop();

