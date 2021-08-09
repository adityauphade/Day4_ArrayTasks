const a = [2, 5, 878, 72, 0, 9, 12, -5, 44];
console.log(`\nThe Original array is: ${a}`);

a.sort(function(a, b){return a-b});

console.log(`\nThe sorted array is: ${a}`);

check = 2

if (a.includes(check) == true) {
    console.log(`\n${check} is present in the array @ ${a.indexOf(check)} index`)
}
else{
    console.log(`\n${check} is not present in the array\n`)

}
