var numb1 = 1;
var numb2 = 100;
var numb3 = Number(prompt("Enter number"));
if (numb3 > 100) {
    alert("Out of bounds");
     
}
else if (numb3 < 1) {
    alert("Out of bounds");
}
else {
    alert("in bounds");
}