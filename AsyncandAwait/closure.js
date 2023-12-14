function todo(task) {
    console.log("start");
    setTimeout(function fun() {
        console.log("computed", task)
    }, 2000)

    function fun() {
        console.log(task);
    }
    fun();
}

console.log("starting");
todo("assignment")
console.log("Ending");