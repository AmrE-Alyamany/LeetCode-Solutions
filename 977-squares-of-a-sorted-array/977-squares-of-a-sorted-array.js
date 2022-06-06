/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squarArr = nums.map(item => item * item)
    
    return squarArr.sort(function(a, b){return a - b})
    
    
};