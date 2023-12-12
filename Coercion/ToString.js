console.log("Vivek" + " " + "Singh")
/**
 * Both of them are already a string,
 * so ToString conversion will also be a string
 * and we concatenate them
 */

console.log(undefined + "node")
/**
 * undefined -> get converted to undefined
 * "undefined" + "node" -> undefinednode
 */


console.log("5" + null)
/**
 * one of them is already a string, so both of them becomes a string
 * "5" + "null" = 5null
 */

console.log("vivek" + [null, undefined] + " " + "mann")