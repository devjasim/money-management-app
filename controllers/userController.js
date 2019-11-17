const registerValidator = require('../validator/registerValidator')

//login controller
module.exports = {
    login(req, res){
        let name = req.body.name;
        let email = req.body.email;
        res.json({
            message: `Welcome ${name} we will let you know to this ${email}`
        })
    },
    register(req, res){

        let{name, email, password, confirmPassword} = req.body
        var validate = registerValidator({name, email, password, confirmPassword});
        
        if (validate.isValid){
            res.status(400).json(validate.error)
        }else{
            res.status(200).json({
                message: 'Everything is okay'
            })
        }



        //Read client date
        //Validation check user data
        //Check for duplicate user
        //New user object
        //Save to database
        //Response back with new data
    }
}
