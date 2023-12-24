const jwt = require("jsonwebtoken")

//decode ,verify, generate

const value = {
    name: "sanu",
    accountNum : 123123123
}
//jwt

//secret is a password and this is used to generate the jwt which only the server has and using this only this can verify the jwt
//decoding can be done by any other but verifying is only done by the server only.
//And this token has been generated with this secret and this can only be verified by the server itself
const token= jwt.sign(value,"secret");
console.log(token)

//Using token anyone can decode it and look at the content
//But it can only be verified by the server who has the password using which this jwt has been created!

/**So using the token an intruder can see its content and decode it
 * But cant verify it. so using the token intruder can create another 
 * token with same content but they must have used different password
 * which is our case was "secret" and intruder does not have the access to this password.
 */

const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FudSIsImFjY291bnROdW0iOjEyMzEyMzEyMywiaWF0IjoxNzAzMjU3MTI0fQ.jXZj1z8NkxZxG8eXLXINHTOCcKkiU6Ln-c_zij3iCfs","secret")
console.log(verifiedValue);
/**Now if the intruder would have given the token that would get decoded to the same value
 * But since their token generation passkey was different and thus this will not get verified if passed to this
 * It will throw and error here -> invalid token
 */
