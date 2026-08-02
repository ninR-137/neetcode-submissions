class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array(nums.length);
        ans = [...nums, ...nums];
        return ans;
    }
}
