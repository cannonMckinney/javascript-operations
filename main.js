document.getElementById('one').addEventListener("click", myEquPartOne);
document.getElementById('two').addEventListener("click", myEquPartTwo);
document.getElementById('add').addEventListener("click", myOperation);

let partTwo = document.getElementById('two').innerHTML;
function myEquPartOne() {
    let partOne = "";
    partOne += document.getElementById('one').innerHTML;
    console.log(partOne);
}