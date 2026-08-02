class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        java.util.Map<Character, Character> closeToOpen = new java.util.HashMap<>();
        closeToOpen.put(')', '(');
        closeToOpen.put(']', '[');
        closeToOpen.put('}', '{');

        for(char c: s.toCharArray()){
            //Check if the bracket is an opening or a closing
            if(closeToOpen.containsKey(c)){
                if(!stack.isEmpty() && stack.peek() == closeToOpen.get(c)){
                    stack.pop();
                }
                //If the stack is empty that means a closing bracket has no opening to close
                //The current closing bracket cant close the current top opening in the stack
                else{
                    return false;
                }
            }
            //Push in the Stack if it is an opening
            else {
                stack.push(c);
            }
        }

        return stack.isEmpty();
    }
}
