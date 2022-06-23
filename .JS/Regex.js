//first name statrt with capital letter
{
    const regEx = RegExp(/^[A-Z]{1}[A-Za-z]{4,}$/);
    let result = regEx.test("Niraj")
    console.log("FirstName ===>", result);
}
//password : min 1 letter caps, min 8 chars, min 1 number, min 1 special char
//max 15 chars
{
    const regEx1 = RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/);
    let result1 = regEx1.test("Niraj@12")
    console.log("Password ===>", result1);
}
//Email Id : start with small letters,numbers or special char with small & caps letters and special char with small & caps range 2-4
{
    const regEx2 = RegExp(/^[a-z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/);
    let result2 = regEx2.test("nirajkumar156@gmail.com")
    console.log("EmailId ===>", result2);
}
//Mobile Numbers :
{
    const regEx3 = RegExp(/^[6-9]{1}[0-9]{9}$/);
    let result3 = regEx3.test("7004670887")
    console.log("Mobile Number ===>", result3);
}