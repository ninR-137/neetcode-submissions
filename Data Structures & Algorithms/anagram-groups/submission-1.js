class Solution {
    /**
     * @param {string[]}
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const arr = [];
        const visited = new Array(strs.length).fill(false);

        for(let i = 0; i < strs.length; i ++){
            if(visited[i]) continue;
            const sub_array = [];
            let s = strs[i];
            visited[i] = true;
            sub_array.push(s);

            for(let j = i + 1; j < strs.length; j++){
                if(visited[j]) continue;
                let t = strs[j];

                if(s.length !== t.length){
                    continue;
                }

                const countS = {};
                const countT = {};

                for(let l = 0; l < s.length; l++){
                    countS[s[l]] = countS[s[l]] ? countS[s[l]] + 1 : 1;
                    countT[t[l]] = countT[t[l]] ? countT[t[l]] + 1 : 1;
                }

                let isAnagram = true;
                for(const c in countS){
                    if(countS[c] !== countT[c]){
                        isAnagram = false;
                        break;
                    }
                }

                // if (isAnagram) {
                //     for(const c in countT){
                //         if(countT[c] !== countS[c]){
                //             isAnagram = false;
                //             break;
                //         }
                //     }
                // }

                if(isAnagram) {
                    sub_array.push(t);
                    visited[j] = true;
                }
            }

            arr.push(sub_array);
        }

        return arr;
    }
}