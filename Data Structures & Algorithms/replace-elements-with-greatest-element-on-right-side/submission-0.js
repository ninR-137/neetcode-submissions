class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        for(let i = 0; i < arr.length; i++){
            if(i === arr.length - 1) {
                arr[i] = -1;
                break;
            }

            const sub_arr = arr.slice(i+1, arr.length);
            arr[i] = Math.max(...sub_arr);
        }

        return arr;
    }
}
