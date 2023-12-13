var teacher = "sanket"; // target

function fun() {
    var teacher = "Pulkit"; // target
    console.log(teacher); // source
}
console.log(teacher) // source
fun(); // source


// Example of Auto-Global

var teacher = "sanket";

function fun() {
    var teacher = "Pulkit";
    teachingAssist = "vibhav"; // if there is no declaration then it consider as auto-global in execution phase.
    console.log(teacher)
    console.log(teachingAssist);
}

fun();
console.log(teacher) // source
console.log(teachingAssist) // source

