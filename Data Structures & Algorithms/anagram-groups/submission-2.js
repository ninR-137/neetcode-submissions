class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let res = [];
        let visited = new Array(strs.length).fill(false);

        for(let i = 0; i < strs.length; i++){
            if(visited[i]) continue;
            visited[i] = true;

            let s = strs[i];
            let subArray = [];
            subArray.push(s);

            for(let j = 0; j < strs.length; j++){
                if(visited[j]) continue;
                let t = strs[j];

                if(s.length != t.length) continue;

                let countS = {};
                let countT = {};

                for(let l = 0; l < s.length; l++){
                    countS[s[l]] = countS[s[l]] ? countS[s[l]] + 1 : 1;
                    countT[t[l]] = countT[t[l]] ? countT[t[l]] + 1 : 1;
                }

                let isAnagram = true;

                for(const c in countS){
                    if(countS[c] !== countT[c]) {
                        isAnagram = false;
                        break;
                    }
                }

                if(isAnagram){
                    subArray.push(t);
                    visited[j] = true;
                }
            }

            res.push(subArray);
        }

        return res;
    }
}
