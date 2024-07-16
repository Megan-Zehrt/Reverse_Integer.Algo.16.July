// 7. Reverse Integer



// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).







/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let negative = false
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;
    
    if(x < 0){
        negative = true
        x = -x
    }

    let str = x.toString()
    let reversedStr = str.split('').reverse().join('')
    let num = Number(reversedStr)
    
    if(negative){
        num = -num
    }

    if(num < INT_MIN || num > INT_MAX){
        return 0
    }else{
        return num
    }
};