console.log(12 - 4) // Both of them are already is number is it just substract.
console.log(undefined - 4) 
/**
 * undefined is not a valid number, so we  make it  undergo ToNumber abstract operation
 * ToNumber(undefined) -> NaN
 * NaN - 4 -> add for any number when you do operation with  NaN it results NaN
 * NaN - 4 -> NaN
 */

console.log(null -5)
/**
 * null is a not valid number, so we make it undergo ToNumber abstract operation
 * ToNumber(null ) -> +0
 * null - 5 -> -5
 */

console.log("132" - 10)
/**
 * "132" is a string , so we make it undergo ToNumnber operation
 * ToNumber("132" ) -> 132
 * 132 - 10 -> 122
 */

console.log("12fd" - 20)
/**
 * "12fd" is a string, so we make it undergo ToNumber operation
 * ToNumber("12fd") -> NaN because this string cannot be parsed as a number
 * NaN - 20 -> NaN
 */

console.log(4 - true)
/**
 * true is a boolean, so we make it undergo ToNumber abstract operation
 * ToNumber(true) -> 1
 * 4 - 1  -> 3
 */

console.log("0xf" - 3) 
/**
 * "0xf" is a string, but in the starting of a string , we have "0x" which denotes starts of hexadecimal number
 * so if we can convert this string to a valid hexadecimal number, we wil do it
 * ToNumber("0xf") -> 15
 * 15 - 2 -> 12
 */

console.log("1.34" - 1)

console.log("0o11" - 1)
/**
 * "0o11" is a string and can be converted to a valid octal number
 * ToNumber("0o11") -> 9
 * 9 - 1 -> 8
 */