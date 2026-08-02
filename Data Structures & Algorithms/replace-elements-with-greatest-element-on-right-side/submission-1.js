class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightmax = -1;

        for(let i = arr.length - 1; i >= 0 ; i--){
            const current = arr[i]
            arr[i] = rightmax;
            rightmax = Math.max(arr[i], current);
        }

        return arr;

    }
}
