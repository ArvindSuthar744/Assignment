// Q.6 Using console.log() print out the following statement: The quote 'There is no exercise
// better for the heart than reaching down and lifting people up.' by John Holmes teaches us to
// help one another. Using console.log() print out the following quote by Mother Teresa:

// console.log("There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another")

// Q.7 Check if typeof '10' is exactly equal to 10. If not make it exactly equal?

// let a = 10;
// let b ='10';
// console.log(typeof a);
// console.log(typeof b);

// if (a===b){
//     console.log("a and b is equal")
// }
// else{
//     console.log("a and b is not eqaul")
// }
// console.log(a !== b)

// Q.8 Write a JavaScript Program to find the area of a triangle?

// let base = 10;
// let height = 20;
// let area = (base*height)/2;
// console.log(area);

// Q.9 Write a JavaScript program to calculate days left until next Christmas?

//   let event = new Date('August 19, 1975 23:15:30');
//   event.setDate(32);
//   console.log(event.getDate())

// let Christmas = new Date('December 25,2024');
// let todayDate = new Date('March 6,2024')
// let count = Christmas.getTime() - todayDate.getTime();
// let daycount = count/(1000*60*60*24);
// console.log(daycount);

// Q.11 Find circumference of Rectangle formula : C = 4 * a ?

// let a = 5;
// let circumference = 4*a;
// console.log(circumference);

// Q.12 WAP to convert years into days and days into years?
//  let days = 1200;
//  let year = days/365;
//  let years = 4;
//  let Totalday = years*365;
//  console.log(Math.floor(year))
//  console.log(Totalday);

// Q.13 Convert temperature Fahrenheit to Celsius? (Conditional logic Question)
//   let tempinC = 45;
//   let Fahrenheit = (9/5*tempinC)+32;
//   console.log(Fahrenheit);
// console.log (5 > 3 && 2 < 4);
// console.log(true && 1 && "hello")
// console.log (true && false || false && true)

// Q.14 Write a JavaScript exercise to get the extension of a filename.?
// function getfileExtension(filename){
//     let extension = filename.split('.');
//     console.log(extension[1]);
// }
// getfileExtension('assesment.js');

// Q.22 Check Number Is Positive or Negative in JavaScript?
// let num1 = 2;
// let num2= -5;
// if(num1 >= 0){
//     console.log("this is positive number")
// }
// else{
//     console.log("this is negative num")
// }
// if(num2 >= 0){
//     console.log("this is positive number")
// }
// else{
//     console.log("this is negative number")
// }

// Q.23 Find the Character Is Vowel or Not ?

// let char = 'c';
// if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//     console.log("charater is vowel");
// }
// else{
//     console.log("character is consonent");
// }

// Q.24 Write to check whether a number is negative, positive or zero?

// let num1 = -1;
// if(num1 > 0){
//     console.log("this is positive number")
// }
// else if (num1 == 0){
//     console.log("this is zero")
// }
// else{
//     console.log("this is negative num")
// }

// Q.25 Write to find number is even or odd using ternary operator in JS?
// let num = 57
// let result = (num % 2 == 0)? "this is even number" : "this is odd number";
// console.log(result)

// Q.26 Write find maximum number among 3 numbers using ternary operator in JS?

// let a = 40;
// let b = 65;
// let c = 55;
// let result = (a > b && a > c)? "a is greater":
//               (b > a && b > c)? "b is greater":"c is greater";
//               console.log(result);
// let a = 40;
// let b = 15;
// let c = 55;
// let result = (a < b && a < c) ? "a is smaller" :
//     (b < a && b < c) ? "b is smaller" : "c is smaller";
// console.log(result);

// Q.29 Write to show
// Monday to Sunday using switch case in JS?
// Vowel or Consonant using switch case in JS?

// let days = 'a';
// switch (days) {
//     case 'a':
//         console.log("sunday")
//         break;
//     case 'b':
//         console.log("monday")
//         break;
//     case 'c':
//         console.log("tuseday")
//         break;
//     case 'd':
//         console.log("wednesday")
//         break;
//     case 'e':
//         console.log("thurday")
//         break;
//     case 'f':
//         console.log("friday")
//         break;
//     case 'g':
//         console.log("saturday")
//         break;
//     default:
//     console.log("wrong input")

// }

// let char = 'c';
// switch (char) {
//     case 'a':
//         console.log("character is vowel")
//         break;
//     case 'e':
//         console.log("character is vowel")
//         break;
//     case 'i':
//         console.log("character is vowel")
//         break;
//     case 'o':
//         console.log("character is vowel")
//         break;
//     case 'u':
//         console.log("character is vowel")
//         break;
//         default:
//             console.log("character is consonent")
// }
//   for(let a = 1; a <=5; a++){
//     console.log(a);
//   }

// for(let a = 972; a >= 897; a--){
//     console.log(a);
// }
// let fact = 1;
// let num = 5;
// for(let i = 1; i <= num; ++i)
// {
//    console.log(fact = fact*i);
// }
// console.log(fact,num);

// let prenum = 0;
// let prenum1 = 1;
// let nextnum = prenum+prenum1;
// for (let i = 1; i <= 100; i++){
//    nextnum = prenum + prenum1;
//     prenum = prenum1;
//     prenum1 = nextnum;
//     console.log(nextnum);
//      }

// Q.34 Write to print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS?

// let num = 64728;
// let j = num.toString()
// for (i = j.length;i>= 0;i--){
//    parseInt(console.log(j[i]));
// }
// Q.36 Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: -
// 5) in JS?

// let a = 23433;
// let c = Array.from(a.toString(),Number)
// let sum = 0;
// console.log(c)
//   for(i = 0;i<= c.length; i++)
//   {
//      sum = sum + c[i];
//      console.log(sum);
//   }

// let num = 5;
// for(let i = 1; i <= num; i++){
//     for(let j = 1; j <= num ; j++)
//     {
//         let str = "* "
//         console.log(str.repeat(num));
//     }

// }
// var a = 474689;
// var b = Array.from(a.toString(),Number);
// var j = b.length-1;
// for(let i = 0; i <= b.length/2; i++){
//        console.log(b[i]+b[j]);
//        j--;
// }

// let n = 5;

// let str = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= n; j++)
//     {
//         if (((j == 4) || (j == 5)) && ((i == 2) || (i == 3) || (i == 4) || (i == 5))) {
//             if (j == 4) {
//                 let a = Math.pow(i, 2)
//                 str = str + `${a}`
//             }
//             else{
//                 let b = Math.pow(i, 3)
//                 str = str + `${b}`
//             }

//         }
//         else if (j == 2) {
//             str = str + "1"
//         }
//         else {
//             str = str + `${i}`
//         }
//     }
//     str = str + "\n"
// }
// console.log(str);

// Q.38
// 1;-
// let n = 5;
// let str =""
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i ; j++)
//     {
//         if (j%2 == 0){
//              str = str +"0";
//         }
//         else{
//             str = str +"1";
//         }
//     }
//     str = str +"\n";
// }
// console.log(str)

// 2;-
// let a = 65;

// let b = String.fromCharCode(79);
// let str = ""
// let n = 5;
// for (let i = 1; i <= n; i++)
// {
//     for (let j = 1; j <= i;j++){
//         let c = String.fromCharCode(a)
//         str = str+`${c}`;
//         a++
//     }
//     str = str+"\n";
// }
// console.log(str);

// 3:-
// let a = 1;
// let n = 5;
// let str = ""
// for (let i = 1; i <= n; i++)
// {
//     for(let j = 1; j <= i; j++){
//        str = str+`${a}`
//        a++;
//     }
//     str = str + "\n";
// }
// console.log(str);

// 4:-
// let n = 5;
// let str = ""
// for(let i = 1; i <= n; i++){
//     for (let j = 1; j <= i; j++){
//         str = str+"*"
//     }
//     str = str+"\n";
// }
// console.log(str);\

// Q.39

// let count = 0;

// while(count < 3){
//     let a = prompt("enter a number");
//   if(a == Number){

// let b = a.toString();
// let str =""
// for(i = b.length-1;i >= 0; i--){
//    str = str +b[i];
// }
// console.log(str);
// let c = parseInt(str);
//   if (a == c){
//      console.log("number is plaindrom");
//   }
//   else{
//     console.log("number is not a plaindrom");
//   }
// }
// else{
//     console.log("not a number")
// }
//   count++;
// }

// Q.40 Write a JavaScript Program to display the current day and time in the following format.
// Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ?

// let day = ['sunday','monday','tuseday','wednesday','thursday','friday','saturday']
// let a = new Date();
// let b = day[a.getDay()]
// let c = a.toLocaleTimeString();
// console.log(`Today is ${b}. Current Time is ${c}`);

// Q.41 Write a JavaScript program to get the current date?
// let day  = new Date()
// console.log(day);

// Q.42 Write a JavaScript program to compare two objects?
//    1.
//      let obj = {name: 'jayesh',subject: 'Wd',salary: '7000000'}
//      let obj2 = {name: 'jayesh',subject: 'Wd',salary: '7000000'}
//      obj = obj2;
//      if(obj === obj2){
// console.log("equal");
//      }else{
//          console.log("not eqaul");
//      }

// 2.
//  let obj = {name: 'jayesh',subject: 'Wd',salary: '7000000'};
//  let obj2 = {name: 'jayesh',subject: 'Wd',salary: '7000000'};
//  console.log(JSON.stringify(obj) === JSON.stringify(obj2));

// Q.43 Write a JavaScript program to convert an array of objects into CSV string?

//   const obj = [
//     {name: 'jayesh',subject: 'Wd',salary: 7000000},
//     {name: 'jayesh',subject: 'Wd',salary: 7000000},
//     {name: 'jayesh',subject: 'Wd',salary: 7000000 }
//   ];
//   const obj2 = obj.map((obj) =>`${obj.name},${obj.subject},${obj.salary}`).join(",");
//   console.log(obj2);

// Q.44 Write a JavaScript program to capitalize first letter of a string?
// let str ='jayeshojha'
// let a = str[0];
// let b = str[0].toUpperCase();
// let str2 = str.replace(`${a}`,`${b}`);
// console.log(str2);

// Q. 45 Write a JavaScript program to determine if a variable is array?
// let a = 3487;
// let b = [1,2,3,4];
// if (Array.isArray(b)){
//     console.log("varible is an array")
// }
// else{
//     console.log("variable is not an array")
// }

// Q.46 Write a JavaScript program to clone an array?
// let arr = [1,2,3,4];
// let cloned_arr = Array.from(arr);
// console.log(cloned_arr);

// Q.47 What is the drawback of declaring methods directly in JavaScript objects?

// Q.48 Print the length of the string on the browser console using console.log()?
//  let str = 'topstechnologies';
//  console.log(str.length);

// Q.49 Change all the string characters to capital letters using toUpperCase() method?
// let str = "jhfgbvz";
// console.log(str.toUpperCase());

// Q.51 Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy,
// mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy?

// let str = 'javascript';
// console.log(str.lastIndexOf('a'));

//    let str = 'javascript';
//     console.log(str.indexOf('a'));

// function validateForm(){
//     var Email = document.getElementById('email').value;
//     var Number = document.getElementsById('number').value;
//     var Password = document.getElementsById('password').value;
//     var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     document.getElementById('emailerror').innerHTML = '';
//     document.getElementById('numbererror').innerHTML = '';
//     document.getElementById('passworderror').innerHTML = '';

//     event.preventDefault();
//     if(!Email.match(emailpattern)){
//         document.getElementById('emailerror').innerHTML='invalid email';
//         return false;
//     }
//     if (Password.length <= 6){
//         document.getElementById('passworderror').innerHTML='password is Weak';
//         return false;
//     }
//     var phonePattern = /^\d{10}$/;
//     if (!Number.match(phonePattern)) {
//         document.getElementById('numbererror').innerHTML = 'Invalid phone number';
//         return false;
//     }
//     alert("form submited succesfully");
//     return true;

// }

// let str ='223 399 459'
// let arr = str.split(' ');
// console.log(arr);

// Q.62 Check if the string contains a word Script using includes() method?
// let arr = ['jay','om','vinay','hritik']
// console.log(arr.includes("jay"));

// Q.64 What is Character at index 15 in ’30 Days of JavaScript’ string? Use charAt() method.
// let str = '30 Days of JavaScript';
// console.log(str.charAt(15));

// Find the length of a string without using libraryFunction?
//   function length(str){
//     let count = 0;
//     for (const char of str) {
//            count++;
//     }
//     console.log(count);
//   }
//    let str = 'helloworld';
//    let str2 = length(str);
//    console.log(str2)
