class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            '}' : '{',
            ']' : '[',
            ')' : '('
        }
        let stack = [];

        for(const c of s){
            if(Object.hasOwn(map, c)){
                if(stack.length > 0 && stack[stack.length - 1] === map[c]){
                    stack.pop();
                } else{
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
