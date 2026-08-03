class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let map = {
            '}' : '{', 
            ')' : '(', 
            ']' : '['
        }

        let stack = [];
        for(const c of s){
            if(Object.values(map).includes(c)) {
                stack.push(c)
            } 
            else {
                if(stack.length > 0 && stack[stack.length -1] === map[c]) {
                    stack.pop()
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0
    }
}