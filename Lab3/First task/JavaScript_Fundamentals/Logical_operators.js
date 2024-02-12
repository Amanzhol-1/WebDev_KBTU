//1
alert( null || 2 || undefined );//The answer is 2, that’s the first truthy value.

//2
alert( alert(1) || 2 || alert(3) );//The answer: first 1, then 2

//3
alert(1 && null && 2); //The answer: null, because it’s the first falsy value from the list.

//4
alert( alert(1) && alert(2) );//The answer: 1, and then undefined.

//5
alert( null || 2 && 3 || 4 );//The answer: 3.

//6
if (age >= 14 && age <= 90);

//7
if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

//8
// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );

//9
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

    let pass = prompt('Password?', '');

    if (pass === 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}