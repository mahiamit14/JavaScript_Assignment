// Q 1. Write a JavaScript program to sum 3 and 5 multiples under 1000.

        let res =0;
        for(let i = 1; i < 1000; i++) {
            if(i % 3 === 0 || i % 5 === 0) {
                res+=i;
            }
        }
        console.log(res);

// Q 2. Calculate the sum of all the numbers in the following array. var numbersArray = [1,13,22,123,49].

        let Array = [1,13,22,123,49];

        let sum =0;
        for(let i = 0; i<Array.length;i++){
            sum+= Array[i];
        }
        console.log(sum);

// Q 3. Print the ODD numbers from 7 to 31.

        for(let i =7;i<=31;i++){
            if(i%2!=0){
                console.log(i);
            }
        }

// Q 4. Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

        let str = "yes";

        let flag = false;
        for(let i = 0; i<str.length; i++){
            if(str[i]=="y"){
                flag = true;
                break;
            }
        }

        if(flag == true){
            console.log("Yes");
        }else console.log("No");

// Q 5. Write a JS code to print Even numbers in given array [13,23,12,45,22,48,66,100].

        let array =  [13,23,12,45,22,48,66,100];

        for(let i =0;i<array.length;i++){
            if(array[i]%2==0){
                console.log(array[i]);
            }
        }

// Q 6. Write a JS code to print a 2D array [[1, 2],[3, 4],[5, 6]];

        let arr =  [[1, 2],[3, 4],[5, 6]];
        
        for(let i = 0;i<arr.length;i++){
            for(let j  = 0;j<arr[i].length;j++){
                console.log(arr[i][j]);
            }
        }

