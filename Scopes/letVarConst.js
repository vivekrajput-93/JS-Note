// Var is a functional scope.

{
    var x = 10;
    console.log(x);
}

console.log(x);

function fun() {
    console.log(x);
    var x = 10;
    console.log(x);
}

fun();

// let is a block scope , let doesn't allow redeclaration , can re-assign.

{
    let x = 10;
    console.log(x) 
}

console.log(x) // throws a error outside.


// const is a block scope , const doesn't allow declarations and re-assign.

const x = 10;
const x = 2;
x = 12 ;
console.log(x); // already delcared error  and re-assign error


