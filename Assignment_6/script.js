// Q 1. Find Grades


switch(true){
    case (M<=10) :
         console.log("The grade is E");
    break;
    case (M <= 20) :
         console.log("The grade is D");
    break;
    case (M <= 30) :
         console.log("The grade is C");
    break;
    case (M <= 40) :
         console.log("The grade is B");
    break;
    case (M <= 50) :
         console.log("The grade is A");
    break;

    default : console.log("You entered invalid input, please enter valid input.");
}


// Q 2. Get Value

if ("P" == "p") {
    console.log("PreBytes");
} else if ("Z" == "z") {
    console.log("Zenith");
} else if ("E" == "e") {
    console.log("Expert Coder");
} else if ("D" == "d") {
    console.log("Data Structure");
}

// Q 3. Find the maximum out of three numbers

if (A > B && A > C) {
    console.log("A is the greatest");
} else if (A > B && A > C) {
    console.log("B is the greatest");
} else if (A > B && A > C) {
    console.log("C is the greatest");
}

// Q 4.Second Smallest integer value among three numbers

     let smallest = Math.min(X, Y, Z);
     let largest = Math.max(X, Y, Z);
     let total = X + Y + Z;
     let secondSmallest = total - smallest - largest;


// Q 5.   check whether the triangle is acute or obtuse.

if (angle1 + angle2 + angle3 === 180) {
    if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
        console.log("Obtuse Triangle");
    } else {
        console.log("Acute Triangle");
    }
} else {
    console.log("Not a valid triangle (sum of angles should be 180 degrees)");
}


