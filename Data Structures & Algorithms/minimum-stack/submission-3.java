class MinStack {

    Stack<Integer> minimum;
    Stack<Integer> stack;

    public MinStack() {
        minimum = new Stack<>();
        stack = new Stack<>();
    }
    
    public void push(int val) {
        if(stack.isEmpty()){
            stack.push(val);
            minimum.push(val);
            return;
        }

        if(val <= minimum.peek()){
            minimum.push(val);
        }

        stack.push(val);
    }
    
    public void pop() {
        if(stack.isEmpty()){
            return;
        }

        int val = stack.pop();

        if(val <= minimum.peek()){
            minimum.pop();
        }
    }
    
    public int top() {
        if(stack.isEmpty()){
            return -1;
        }

        return stack.peek();
    }
    
    public int getMin() {
        return minimum.peek();
    }
}
