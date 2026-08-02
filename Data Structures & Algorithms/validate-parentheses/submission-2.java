class Solution {
    public boolean isValid(String s) {
        Stack<Character> opening = new Stack<>();
        java.util.HashMap<Character, Character> map = new java.util.HashMap<Character, Character>();
        map.put(')', '(');
        map.put(']', '[');
        map.put('}', '{');

        //Iterate through each character in s
        for(char c : s.toCharArray()){
            //Check if c is a closing brace
            if(!opening.isEmpty() && map.containsKey(c)){
                //check if the closing brace closes the top of the stack
                if(map.get(c) == opening.peek()){
                    //Pop the value from the stack
                    opening.pop();
                } else {
                    return false;
                }
            }
            //c is a opening brace
            else {
                opening.push(c);
            }

        }

        return opening.isEmpty();
    }
}
