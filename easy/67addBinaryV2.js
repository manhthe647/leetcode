function addBinary(a, b) {
    let result = [];
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digitA = i >= 0 ? parseInt(a.charAt(i), 10) : 0;
        const digitB = j >= 0 ? parseInt(b.charAt(j), 10) : 0;

        const sum = digitA + digitB + carry;
        result.push(sum % 2); 
        carry = Math.floor(sum / 2); 

        i--; 
        j--;  
    }

    return result.reverse().join('');  
}

let a = "10001111";
let b = "11011111111";
console.log(addBinary(a, b));  // Output: "11100010110"
