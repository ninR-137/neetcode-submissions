class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let visited = new Array(nums.length).fill(false);
        for(let i = 0; i < nums.length; i++){
            visited[i] = true;

            for(let j = 0; j < nums.length; j++){
                if(visited[j]) continue;

                if(nums[i] + nums[j] === target){
                    return [i, j];
                }
            }
        }

        return [];
    }
}
