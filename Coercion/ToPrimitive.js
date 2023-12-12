/* ToPrimitive */
/**
 * This function takes an input argument and tries to converts into non-object type (primitive tpyes), if it can't convert it can throw error. 
 * It take one more optional paramter called as preferred type, if we have 2 or more than 2 values that  can becomes answer, this optional argument helps us.
 
 * 1. If input is an Object, then
a. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
b. If exoticToPrim is not undefined, then
i. If preferredType is not present, then
1. Let hint be "default".
ii. Else if preferredType is STRING, then
1. Let hint be "string".
iii. Else,
1. Assert: preferredType is NUMBER.
2. Let hint be "number".
iv. Let result be ? Call(exoticToPrim, input, « hint »).
v. If result is not an Object, return result.
vi. Throw a TypeError exception.
c. If preferredType is not present, let preferredType be NUMBER.
d. Return ? OrdinaryToPrimitive(input, preferredType).
2. Return input.


 */


let a = {"english" : 90, "maths" : 100, "science" : 85}
console.log(a.toString());
// output : [object Object]
console.log(a.valueOf());
// output : { english: 90, maths: 100 }

let x = [1,2,3];
console.log(x.toString());
// output : 1,2,3
console.log(x.valueOf());
// output : [1,2,3]

