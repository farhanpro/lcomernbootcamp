exports.signup = (req,res) =>{
    //console.log("Signup Works")
     res.json({
         message: "SignUp Route Works"
     });
};

exports.signout = (req,res) => {
    res.json({
        message: "User Singout"
    });
};