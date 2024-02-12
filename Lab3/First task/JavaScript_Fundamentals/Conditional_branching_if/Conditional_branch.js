//1
if ("0") {
    alert( 'Hello' ); //it will work "0" is not empty
}
//3
let result = (a + b < 4) ? 'Below' : 'Over';
/*
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
 */
//4
let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';
//5
let value = prompt('Type a number', 0);

if (value > 0) {
    alert( 1 );
} else if (value < 0) {
    alert( -1 );
} else {
    alert( 0 );
}