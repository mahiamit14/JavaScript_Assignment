let arr = [4,2,34,4,1,12,1,4];


let result = [];
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[i]==arr[j+1]){
            result.push(arr[j]);
            break;
        }
    }
}

console.log(result);





