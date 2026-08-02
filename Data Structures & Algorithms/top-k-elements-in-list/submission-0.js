class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res = new Array(k).fill(0);

        let countMap = {};

        for(let i = 0; i < nums.length; i++){
            countMap[nums[i]] = countMap[nums[i]] ? countMap[nums[i]] + 1 : 1; 
        }


        const sortedMapKeys = Object.keys(countMap).sort((a, b) => countMap[b] - countMap[a]);
        for(let i = 0; i < k; i++){
            res[i] = Number(sortedMapKeys[i]);
        }

        return res;
    }
}
