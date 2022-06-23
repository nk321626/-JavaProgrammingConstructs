var msg = require('./Message');
console.log(msg);
let result = msg.firstName.test("Niraj");
console.log("First Name ===> ", result);
let result1 = msg.password.test("Niraj@12");
console.log("Password ===>", result1);
let result2 = msg.emailId.test("nirajkumar156@gmail.com");
console.log("Email Id ===> ", result2);
let result3 = msg.mobileNumber.test("7004670887");
console.log("Mobile Num ===> ", result3);
//Other Methods:
var {firstName, password, emailId, mobileNumber} = require('./Message.js');
console.log("FirstNameValidation: ", firstName + "\nPasswordValidation: ", password + "\nEmailValidation: ", emailId + "\nMobileNumValidation: ", mobileNumber); 