class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dup = [];
        nums.sort((a , b) => a - b);

        for(let i = 0; i < nums.length; i++){
            const x = dup[dup.length - 1];

            if(x === nums[i]){
                return true;
            }

            dup.push(nums[i]);
        }

        return false;
    }
}
