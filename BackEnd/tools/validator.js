const {check,validationResult} =require('express-validator')
//register check data
exports.registerCheck=()=>[
    check("email","unvalid email").isEmail(),
    check("firstName","firstName is required").notEmpty(),
    check("lastName","lastName is required").notEmpty(),
    check("password","password should have at least 8 chars").isLength({min:5})
]
//login check data
exports.loginCheck=()=>[
    check("email","unvalid email").isEmail(),
    check("password","password should have at least 8 chars").isLength({min:5})
]

// validator results
exports.validator=(req,res,next)=>{
const errors=validationResult(req)
if(!errors.isEmpty())
{return res.status(400).send({errors:errors.array()})}
next()
}