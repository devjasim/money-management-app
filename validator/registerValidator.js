const validator = require('validator');

const validate = user => {
    let error = {}

    if (!user.name){
        error.name= `Please Provide Your Name`
    }
    if (!user.email) {
        error.email = 'Please Provide Your Email'
    }else if (!validator.isEmail(user.email)){
        error.email = 'Please Provide a Valid Email'
    }

    if (!user.password) {
        error.password = 'Please Provide a Password'
    }else if (user.passowrd.length < 6) {
        error.password = 'Password must be greater or equal 6 chaacter'
    }
    if(!user.confirmPassword){
        error.confirmPassword = 'Please Provide Confirm Password'
    }else if (user.password != user.confirmPassword){
        error.confirmPassword = 'Password Doesn\'t Match'
    }

    return{
        error,
        isValid: Object.keys(error).length == 0
    }

}

module.export = validate;