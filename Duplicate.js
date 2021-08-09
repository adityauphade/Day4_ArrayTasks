duplicate = [];
dupliIndex = [];
dupliArr = [10, 65, 58, 10, 23, 42, 10];
boolDup = false;
if(checkDuplicate(dupliArr)){
    for(var i=0; i<dupliArr.length; i++){
        if(dupliArr[i]===duplicate[0]){
            dupliIndex.push(i);
        }
    }        
}
console.log(dupliIndex);

function checkDuplicate(arr){
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length;j++){
            if(i!==j){//Don't check same elements
                if(arr[i] == arr[j]){
                    duplicate.push(arr[i]);
                    boolDup = true;
                    break;
                }
            }
            if(boolDup){
                return true;
            }
        }
    }
}