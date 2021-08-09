const a = [12, 54, -8, 97, -77, 111, 99, 20, 3, 7, 59]

const clonea = [...a];
const sorted_a = a.sort(function(a, b){return a-b})
const clonesorted_a = [...sorted_a];

const max = sorted_a.pop();

const min = sorted_a.shift()

function display(){
    console.log(`\nThe Original Array: ${clonea}`)
    console.log(`\nThe Sorted array: ${clonesorted_a}`)
    console.log(`\nThe Maximum Value: ${max}\nThe Minimum Value: ${min}`)
}

display();