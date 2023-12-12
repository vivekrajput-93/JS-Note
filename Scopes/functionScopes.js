function greet() {
    console.log("greeting");
    var x = 10;
    

    function test() {
        console.log("test", x);
    }
    test();
    console.log(x);
}

greet();