class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        const s_sort = s.split('').sort().join('');
        const t_sort = t.split('').sort().join('');

        for(let i = 0; i < s_sort.length; i++){
            if(s_sort[i] !== t_sort[i]){
                return false;
            }
        }

        return true;
    }
}
