
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        java.util.Map<Character, Character> closeToOpen = new java.util.HashMap<>();
        closeToOpen.put(')', '(');
        closeToOpen.put('}', '{');
        closeToOpen.put(']', '[');

        for(char c : s.toCharArray()){
            //Check if the character c is an opening brace or a closing one
            if(closeToOpen.containsKey(c)){
                //If it contains an closing brace, check if it closes the top of the stack
                if(!stack.isEmpty() && stack.peek() == closeToOpen.get(c)){
                    //The current closing brace closes the top element of the stack
                    stack.pop();
                } else{
                    //return false if the first element of the stack is a closing brace
                    //or the current closing brace does not close the top element of the stack
                    return false;
                }
            } //If its not in the map then its an opening brace
            else {
                stack.push(c);
            }
        }

        return stack.isEmpty();
    }
}
