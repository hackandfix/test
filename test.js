/**
 * Created by User on 4/19/15.
 */
// 1. Data types
//1.1 What type of data in Javascript? (with examples)

var string = "string";
var number = 10;
var boolean = true;
var undefind  //A property to which nothing has been assigned will be undefined
var object={
    first_property :"first_value",
    second_property: "second_value"
    // object can also have methods which can we can use like object.method()
}
var array =[1,true,"string",[]] // array can include any type of data including array itself
// there is also null which we get when element



//2. Variables
//2.1 What are the good and bad cases of setting the variables? (with examples)

var x = 0; // declaring x as 0

var x= 0,y=1;// declaring x as 0 and y as 1

var x,y,z=2;// declaring ONLY z as 2


var x = 1;
var y = x;
// is the same as
var x,y = x = 1;

// don't forget about order

var x = y, y = "stirng";
console.log(x + y); // will log undefinedstirng

var y = "string", x = y;
console.log(x + y); // will log stirngstirng





// Avoid Global Variables
// Good example
var x = function(){
    var y = 5 // in this case it is local, It means that this variable exists only in in this function
             // Local variables are deleted when the function is completed.
}
// Bad Example
var x = function(){
    y = 5    // in this case  the variable is global Global variables are deleted when you close the page.
    // it also means that 'y' in any part of script as long as it is not changed  will be asinged to '5'
            }


// 3. Logical operations
// 3.1 What are the logical operations?

// there are three types of logical operators in JS

//  1) &&

// meaning "and"
// it will return " true" only if both expresions are true otherwise it will be false

true&&true         // true
true&&false        // false
false&&true       // false
false&&false      //false

// 2) ||
//meaning 'or'
// it will return "true" if any of expersions is true

true || true         //true
true || false        //true
false|| true        // true
false || false      //false


// 3) !
// meaning "not"

!true     //false
!false     //true

// so basicaly
// false && (anything) is false
//  true || (anything) is true.

