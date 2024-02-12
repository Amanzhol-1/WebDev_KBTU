//assignment_result
let a = 2;

let x = 1 + (a *= 2);//x=5 a=4

//Fix addition

/*
The reason is that prompt returns user input as a string.

So variables have values "1" and "2" respectively.
What we should do is to convert strings to numbers before +.

For example, right before prompt:
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3
 */

//postfix_prefix
let a = 1, b = 1;

alert( ++a ); // 2,
alert( b++ ); // 1,

alert( a ); // 2,
alert( b ); // 2,

/*
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
1.The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
2.The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
3.The addition with a string appends the number 5 to the string.
4.The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
5.null becomes 0 after the numeric conversion.
6.undefined becomes NaN after the numeric conversion.
7.Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.
 */
