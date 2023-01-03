// Question 1:
var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '
Result = str1 + " " + str2.trim() + " " + str3.trim();
console.log(Result);


//--------------//-----------// --------------// Q1 END //--------------//--------------//-----------//

// Question 2:
var enteredAlphabet = "D"
switch (enteredAlphabet) {
    case 'a':
        message = "Character is a vowel";
        break;
    case 'e':
        message = "Character is a vowel.";
        break;
    case 'i':
        message = "Character is a vowel.";
        break;
    case 'o':
        message = "Character is a vowel.";
        break;
    case 'u':
        message = "Character is a vowel.";
        break;
    case 'A':
        message = "Character is a vowel.";
        break;
    case 'E':
        message = "Character is a vowel.";
        break;
    case 'I':
        message = "Character is a vowel.";
        break;
    case 'O':
        message = "Character is a vowel.";
        break;
    case 'U':
        console.log('Character is a vowel.');
        break;
    default:
        console.log('Character is a consonant.');
}

//--------------//-----------// --------------// Q2 END //--------------//--------------//-----------//


// Question 3:
var operator;
var number1 = 50;
var number2 = 10;

switch (operator) {

    // performs addition between numbers
    case '+':
        result = number1 + number2;
        message = (number1 + " + " + number2 + " = " + result);
        break;

        // performs subtraction between numbers
    case '-':
        result = number1 - number2;
        message = (number1 + " - " + number2 + " = " + result);
        break;

        // performs multiplication between numbers
    case '*':
        result = number1 * number2;
        message = (number1 + " * " + number2 + " = " + result);
        break;

        // performs division between numbers
    case '/':
        result = number1 / number2;
        message = (number1 + " / " + number2 + " = " + result);
        break;

    default:
        message = ("Invalid operator!");
        break;
}
console.log( number1 + number2);
console.log( number1 - number2);
console.log( number1 * number2);
console.log( number1 / number2);
//--------------//-----------// --------------// Q3 END //--------------//--------------//-----------//

// Question 4:

var s1 = window.prompt("Enter first side of a triangle")
var s2 = window.prompt("Enter second side of a triangle")
var s3 = window.prompt("Enter third side of a triangle")
if (s1 == s2 && s2 == s3)
    console.log("Equilateral Triangle");
else if (s1 == s2 || s2 == s3 || s3 == s1)
    console.log("Isosceles Triangle");
else console.log("Scalene Triangle");
//--------------//-----------// --------------// Q4 END //--------------//--------------//-----------//

// Question 5:

var unit=window.prompt("Enter Electricity Units");
var bill=0;
var additional=unit>250;
if(unit>50){
	bill+=25;
}
else bill+= unit*0.5;
unit-=50;

if(unit>100){
	bill+=75;
}
else if(unit>0) bill+= unit*0.75;
unit-=100;

if(unit>100){
	bill+=120;
}
else if(unit>0) bill+= unit*1.2;
unit-=100;
if(unit>0)
bill+= unit*1.5;
if(additional)
	bill+=bill*0.2;
console.log(bill);
//--------------//-----------// --------------// Q5 END //--------------//--------------//-----------//