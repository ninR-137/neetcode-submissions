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
        };

        const stack = []

        for(const c of s) {
            if(Object.values(map).includes(c)) {
                stack.push(c);
            } else {
                if(stack[stack.length - 1] === map[c]) {
                    stack.pop();
                } else {
                    return false;
                }
                
            }

            
        }

        return stack.length === 0

    }
}
