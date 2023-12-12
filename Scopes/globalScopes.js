var person = "vivek"

function greet() {
    console.log("Greeting", person)
}

function hello() {
    console.log("How are you !" ,person)

    function test() {
        console.log("test");
    }

    test();
}

greet();
hello();


