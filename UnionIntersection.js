let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];


let union = [...arr1, ...arr2];
let intersection = arr1.filter(x => arr2.includes(x))

function display(){
    console.log(`Array 1: ${arr1}\nArray 2: ${arr2}\nThe Union is: ${union}\nThe Intersection is: ${intersection}`);
}

display();