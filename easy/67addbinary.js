// Given two binary strings a and b, return their sum as a binary string.
// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

let a = "10001111"
let b = "11011111111"
let result = ""

let i = a.length;
let j = b.length;
let flag = false;

if (i - j > 0) {
    b = "0".repeat(i - j) + b
    j = i;
}

if (i - j < 0) {
    a = "0".repeat(j - i) + a
    i = j
}

while (i > 0 || j > 0) {
    lastA = parseInt(a.charAt(i - 1))
    lastB = parseInt(b.charAt(j - 1))

    if ((lastA == 0 && lastB == 0) || (lastA == 1 && lastB == 0) || (lastA == 0 && lastB == 1)) {
        if (flag) {
            if (lastA + lastB == 1) {
                result += 0
                flag = true
            } else {
                result += 1
                flag = false
            }
        }
        else {
            result += (lastA + lastB)
        }
    }

    if (lastA == 1 && lastB == 1) {
        if (flag) {
            result += 1
        }
        else {
            result += 0
        }
        flag = true
    }

    i -= 1;
    j -= 1;
}

if (flag) {
    result += 1
}

console.log(result.split('').reverse().join(''))