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

        let s_map = {};
        let t_map = {};

        for(let i = 0; i < s.length; i++){
            s_map[s[i]] = s_map[s[i]] ? s_map[s[i]] + 1 : 1;
            t_map[t[i]] = t_map[t[i]] ? t_map[t[i]]  + 1: 1;
        }

        for(const c in s_map){
            if(s_map[c] !== t_map[c]){
                return false;
            }
        }

        return true;
    }
}
