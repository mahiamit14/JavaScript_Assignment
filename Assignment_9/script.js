// let arr = [4,2,34,4,1,12,1,4];


// let result = [];
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length; j++){
//         if(arr[i]==arr[j+1]){
//             result.push(arr[j]);
//             break;
//         }
//     }
// }

// console.log(result);




let flag = false;
let res;
for(let i = 0; i<array.length; i++){
    for(let j = i+1; j<array.length; j++){
        if(array[i]==array[j]){
            // console.log(array[i]);
            res = array[i];
            flag = true;
            break;
        }
    }
if(flag==true){
    break;
}

} 

console.log(res);





function duplicate(arr){
    let ans =[];
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr.length;j++){
            if(arr.indexOf(arr[i]) == -1){
                ans.push(arr[i]);
             }
        }
           
    }
    return ans;
}

let array = [4,2,34,4,1,12,1,4];

console.log(duplicate(array));










for(let i =0;i<5;i++){
    let str = "";
    for(let j =0;j<=i;j++){
        str+= j+" ";

    }
// console.log(str);
}





