

// STEP 1: Create an array...

// First I will start by creating the array with the provided values using [].
// Using the keyword let, I can declare my variable, ages, ending the statement with a semicolon.
//Zero based 0, 1,  2,  3, 4, 5,  6,  7
let agesA = [3, 9, 23, 64, 2, 8, 28, 93]; 

// Next I can subtract the value of the first element from the last element. Using the .length function
// will allow me to do this, but since I need to subtract from the last element in the array, I need to place -1 after
// .length due to arrays being zero based.
let lastIndex = agesA.length - 1;

// Next I am  adding a new age to the array. I can do this by using the .push method. This will place the 37
// at the end of the array.
let newAgeB = 37;
agesA.push(newAgeB);

// Next I will need to find the average age by using a loop. I have to declare all the numbers in the array as a
// variable and assign it a value. I will name the variable totalAge and assign it to zero. Zero is used to have the
// loop start at zero. We use a for loop to show a clear structure for handling the way the code iterates. Placing
// the loop between the parentheses will keep the loop contained. agesA.length represents the array.
// Placing i++ is adding increments of 1 to the 0 and stopping when the loop reaches the end of the array.
//i < names.length is the loop's condition, which checks the variable i to make sure it is less than the length of names.
// Since we want to get an age average it is needed to delcare another variable, averageAge and set the value to 
// totalAge. Then we divide totalAge by agesA.length (lenght of the array or total numbers in array).
let totalAge = 0;
for (let i = 0; i < agesA.length; i++) {
    totalAge += agesA[i];
}
let averageAge = totalAge / agesA.length;

// The top console.log() will print "Ages array with new age added:" along with the array showing 37 added
// to the end of the array.
// The bottom console.log() will print "Average age:" then the calculated value of totalAge divided by agesA.length.
// Backticks are used for template literals. Template literals work well with strings that are dynamically written.
// ${} are used when using template literals. Using the $ and {} will make it easier to understand where dynamic values
// placed.
console.log("Ages array with new age added:", agesA);
console.log(`Average age: ${averageAge}`);

//-------------------------------------------------------------------------------

// STEP 2: Create an array...

//First I created a names array by delcaring a variable calling it names. Then I used the [] to show the array
//placing the provided names inside the array.

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];


// Next, to find the average numbers of letters in the array, I chose a for loop. I had to create the variable 
//totalLetters and assign a zero to it. The value has to be zero because in the loop, the 0 represents the starting
//position of the array. In this case we need the zero to be less than the names.length so the loop will stop when 
//reaches the end of the array. The i++ will keep adding 1 to the array but will stop at the end of the array due
//to the 0 we have placed in making sure it is less than the names.length. The check is done by using
//i < names.length. Then I had to create another variable,
//"averageLetters" so I can assign it an action which is taking the totalLetters and dividing it by names.length.
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;


//This line of code will print the "Average number of letters per name:" as well as the calculated average.
console.log(`Average number of letters per name: ${averageLetters}`);

//Next I joined all names together to make one string. I declared concatenatedNames as my variable as well as providing
//space between each name using ' '. Then using another for loop like above, I am able to set up the loop and giving it
//direction on how to execute. Using let i will start a loop variable with 0. Next i represents 0 which is less than
//my array, which is names.length (loop condition). To continue the loop to the end of the array we 
//add 1 to every element in the array to have the loop run all the way through the arry using i++. The next line if
//(i == 0) will execute the code in the curly braces when i is 0. I have concatenatedNames = names[i] in the {}/block of
//code instructing not to leave a space when printing the first name (I didn't know exactly why I was getting a space
//so I found that when adding my names array directly to my concatenatedNames string, it creates a space unless I 
//instruct not to. When using else, I am instructing to leave spaces between the names of my array. concatenatedNames
// += names[i] will do this. The += is instructing to add whatever is on the left of the value and add it to whatever is
//on the right side of the value. The i is representing 0 which is showing a starting point for the directions given.
//I forgot to mention the parentheses are used to group and control whatever is placed in between them. We sometimes 
//don't need them depending on the way we write the code. They help providing clarity and readability in the code. If 
//We don't use them correctly or not at all, we may get syntax errors. If I didn't add them in the code below for 
//example, I will get a syntax error. Then I console.log the concatenatedNames with parentheses and semicolon.
//The semicolon is showing the concatenatedNames statement has ended, which then will print the concatenated names to
//the browswer.
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
    if (i == 0) {
        concatenatedNames += names[i];
    } else {
        concatenatedNames += ' ' + names[i];
    }
}

console.log(concatenatedNames);

//-----------------------------------------------------------------------------------

// STEP 3. How do you access the last element of any array?
// By using .length - 1   Ex.
const array = [4, 2, 7, 9];
const lastElement = array[array.length - 1];
console.log('Question 3 example:' + lastElement);

//-----------------------------------------------------------------------------------
// STEP 4. How do you access the first element of any array?
// Using by index notation. Ex.  
const firstElement = array[0]

console.log('Question 4 example:' + firstElement);

//----------------------------------------------------------------------------------

// STEP 5.
//Same = 3, Tommy = 5, Tim = 3, Sally = 5, Buck = 4, Bob = 3  
//First I converted the name characters into numbers values for each name. Then I declared nameLengths as my variable
//and set it equal to the number values in an array ending the statement with semicolon.                   
const nameLengths = [3, 5, 3, 5, 4, 3];
//Next I had to declare the variable sum and set it equal to 0 to set up for the loop in the next line.
let sum = 0;
//Here I am using a for loop to find the sum of all numbers in the array. The for will start the loop then I need
//to declare my looop variable name with i, which is let i = 0. Setting i to 0 value, I am giving the loop a starting
//point. Next, I have to write in a condition which is i < nameLenghts.length;. This will check if the value of my i is 
//less than the nameLengths array. Since the condition is true, the loop will continue to run until it reaches false
//which is due to using i++ adding incriments of 1 to the nameLengths. When the code between the curly braces is 
//executed, sum += nameLengths[i]; the loop starts over again adding increments of 1 to the i while all the numbers
//in the nameLengths array are being added up. Once the loop reaches false or becomes equal to or greater, it will stop.

//----------------------------------------------------------------------------------- 

// STEP 6. Write a loop...
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

//Next I am printing the sum to the browser, testing to see of the code works. 
console.log('Sum of all elements in array:' + sum);

//-----------------------------------------------------------------------------------

// STEP 7. Write a function that takes two parameters, word and n, as 
//arguments and returns the word concatenated to itself n number of times.

function myWord(Word, n) {   
   let cancatenated = Word;
   for (let i = 1 ; i < n; i++) {
    cancatenated += Word;
   }
   return cancatenated;
}


let result = myWord("cancatenated",3);
console.log(result);

//------------------------------------------------------------------------------------ 

// STEP 8. Write a function that takes two parameters, firstName and
// lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function myFullName(firstName, lastName) { //function w/ two parameters.
    const fullName = firstName + ' ' + lastName;//here I'm combining my first & last name with spacing, + ' ' +
    return fullName; //this will return my full name as it was writtin the line above.
}

const fullName = myFullName('Gabe', 'Avalos'); //this function is calling my full name with the values I gave.
console.log(fullName); // here I am printing my full name to the browser, which will show "Gabe Avalos"
 
//------------------------------------------------------------------------------------

// STEP 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers 
//in the array is greater than 100.

function willSumBeGreaterThan100(numbersArray) {//function created, and named with one parameter.
    const sum = numbersArray.reduce((total, num) => total + num, 0);//calculating sum of all numbers using .reduce
    //total,num => total + num will pass to reduce which adds up all numbers adding them to the total. The
    //0 represents the sum.
    return sum > 100;//after the sum has been calculated, return sum > 100 will be true. If the sum is less than
    //100 it will return false.
}

const numbers = [ 25, 60, 45, 30];//I'm defining the array of numbers here.
const sumResult = willSumBeGreaterThan100(numbers);//Here I'm calling willSumBeGreaterThan100 function with the 
//numbers array in parentheses. The function will calculate the sum of the numbers in the array to find out if
// it's greater than 100.
console.log(sumResult); //here my result is returned and printed to the browser.

//----------------------------------------------------------------------------------

//STEP 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function averageOfNumbers(numbersArray) {  //I define a function, name it and place one parameter which is an array
    //of numbers.
    if (numbersArray.length === 0) {//Here the numbersArray is being checked to see if it is empty. With an empty
                  //array, the function would 
        return 0; //return a 0 as the average due to an array being empty.
    }
    const sum = numbersArray.reduce((total, num) => total + num, 0);  //Since we don't have an empty array, this line
    // will calculate the sum of all numbers using the .reduce method.
    const average = sum / tNumbers.length;  //After the sum is calculated, this function will divide divide the sum by
    //length of the numbersArray.
    return average;//This returns the calculated average.
}    

const tNumbers = [6, 3, 5, 13]; //Here the named array tNumbers is defined containing 6,3,5,13.
const avg = averageOfNumbers(tNumbers); // Next the averageOfNumbers is called with tNumbers (as an argument)
//This function will calculate the average of the numbers in the array.
console.log(avg);//The calculated average is which is represented by avg variable, is printed to the browser.

//----------------------------------------------------------------------------------

// STEP 11. Write a function that takes two arrays of numbers and returns true if the average of
// the elements in the first array is greater than the average of the elements in the second array.


function averagesBetweenArrays(array1, array2) { // function created, named with two parameters.
    const average1 = whatsMyAverage(array1); // Calculating the average of the first array.
    const average2 = whatsMyAverage(array2); // Calculating the average of the second array.
    return average1 > average2; // Here the averages are compared and a result is returned.
}

function whatsMyAverage(numbersArray) { // function is created, named with one parameter.
    if (numbersArray.length === 0) { // Here we are checking for an empty array.
        return 0;// If we had an empty array, a 0 would be returned.
    }

    const sum = numbersArray.reduce((total, num) => total + num, 0); //Here the sum is calculated using .reduce.
    //The (total, num) => total + num, 0) function will pass to reduce which accumulates the sumb, adding each
    //number to the total.
    const average = sum / numbersArray.length; // Here the average is calculated by sum / numbersArray.length.
    return average; // after the average is calculated, this will return the average.
}

const numbersArr1 = [ 4, 12, 19]; // delcaring the first array, numbersArr1 (4,12,9).
const numbersArr2 = [ 1, 5, 9]; // declaring the second array, numbersArr2 (1,5,9).
const avgResult = averagesBetweenArrays(numbersArr1, numbersArr2); // Here I'm calling averagesBetweenArrays function
// with the two arrays as arguments. This will calculate the averages for both arrays and then compares them.
console.log(avgResult.toString()); // This will print true to the browser because


//---------------------------------------------------------------------------------

// STEP 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) { // function is definded with two parameters, both boolean.
    return isHotOutside, moneyInPocket > 10.50; // This is checking to see if the expression is true or false.
    
}

const isHot = true; // variable is defined, which is set to true
const money =20; // variable is defined, which is 20
const willResult = willBuyDrink(isHot, money); // Another variable is defined, which is the result. This result is
//based on the return expression, isHotOutside, moneyInPocket is > 10.50. Since isHot represents isHotOutside and 
// money represents moneyInPocket, it makes the return function isHotOutside true and moneyInPocket true because they
//are both greater than 10.50.

console.log(willResult); // This will print "true" to the browser.

//---------------------------------------------------------------------------------

// STEP 13. Create a function of your own that solves a problem. In comments, write what the function does and 
//why you created it.

//PROBLEM: My kitchen sink has a water filter installed and to continue to have clean water to drink, we need to check
//if the filter needs to be changed depending on how the water taste. We usually have extra fiilters available. So,
//I need to check if it is time to change the water filter.

function changeFilter(waterTaste, filtersAvailable) { 
    return waterTaste, filtersAvailable >= 1;
}

const badTaste = true;
const availableFiilters = 1;
const changeResult = changeFilter(badTaste, availableFiilters);

console.log(`My result:` + changeResult);
console.log("The End!");
// In my function, changeFilter, two conditions are checked. These are badTaste and filtersAvailable. Both 
//conditions are Boolean checked. The first, badTaste is true because the water does not taste good like when you have
//new filter installed. The second, availableFilters is true because we have one extra filter left from a value pack
//we bought. Since my conditions are true, I can now change my water filter.

