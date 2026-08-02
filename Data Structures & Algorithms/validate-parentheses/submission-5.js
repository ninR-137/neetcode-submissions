class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        //If opening bracket push in the stack
        //If closing bracket we check the stack for the corresposing bracket and close it

        let stack = [];
        const closeToOpen = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        for(const c of s){
            if(c in closeToOpen){
                if(stack.length > 0 && stack[stack.length-1] === closeToOpen[c]){
                    stack.pop();
                    continue;
                }
                else {
                    return false;
                }
            }

            stack.push(c);
        }

        return stack.length === 0;
    }
}
