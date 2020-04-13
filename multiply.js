//Write a program that prints a multiplication table for numbers up to 12.
// add boxes to this

var result = '\n';
for (var i = 0; i < 13; i++) {
    for (var j = 0; j < 13; j++) {
        result += (i*j) + ' ';
    }
    result += '\n'
}