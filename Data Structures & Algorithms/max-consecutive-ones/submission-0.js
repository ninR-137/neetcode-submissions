class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let result = 0;
        let occ = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 1) {
                occ++;
                result = result < occ ? occ : result;
            } else {
                occ = 0;
            }
        }

        return result
    }
}
