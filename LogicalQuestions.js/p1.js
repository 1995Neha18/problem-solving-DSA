let x = 5;
console.log(x++ + ++x); // 1st step ( 5++ ), 
// 2nd step ( now let x = 5 => 6 as value of x incremented from 5++ to 6 )
// 3rd step ( updated value of x is now 6, so 6++ leads to 7 )
// 4th step ( 5 + 7 ) = 12.

// x++: The x++ expression is a post-increment operation. 
// This means that the current value of x (which is 5) is used in the expression, 
// and then x is incremented by 1. So, x++ evaluates to 5, and x becomes 6.
// ++x: The ++x expression is a pre-increment operation. 
// This means that x is first incremented by 1, 
// and then its new value (which is 7) is used in the expression. So, ++x evaluates to 7.
// Adding the results: 5 + 7 = 12.
// So, console.log(x++ + ++x) is effectively 5 + 7, which equals 12.
