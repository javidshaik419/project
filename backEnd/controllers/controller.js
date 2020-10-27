
require('../models/userModel')

var userRegisterSchema = require('mongoose').model('register');
var moment = require('moment')
var passwordHash = require("password-hash")
const jwt = require('jsonwebtoken');



async function stuRegister(req, res) {
    reqData = req.body
    let user = await userRegisterSchema.findOne({ email: reqData.email.toLowerCase() })
    if (user) {
        res.json({
            msg: " email already exist",
            code: 5000
        })


    } else {
        let stdMobile = await userRegisterSchema.findOne({ mobile: reqData.mobile })
        if (stdMobile) {
            res.json({
                msg: " mobile number already exist",
                code: 5000
            })

        } else {
            var hashedPassword = passwordHash.generate(reqData.password)
            let query = {
                name: reqData.name,
                email: reqData.email,
                password: hashedPassword,
                mobile: reqData.mobile,
                role: reqData.role,
                // loginTime:moment().calendar(),
                // logoutTime:moment().calendar()

            }
            let userRec = await new userRegisterSchema(query)
            let result = await userRec.save()
            if (result) {


                res.json({
                    msg: " Registration Sucessful",
                    code: 2000,
                    data: result
                })

            } else {
                res.json({
                    msg: " Registration Failed",
                    code: 5000,

                })
            }
        }
    }

}


async function stuLogin(req, res) {
    reqBody = req.body
    let result = await userRegisterSchema.findOne({ email: reqBody.email })
    if (result) {
        let passwordCheck = await passwordHash.verify(reqBody.password, result.password)
        if (passwordCheck) {
            let login = await userRegisterSchema.findOneAndUpdate({ _id: result },{ loginTime:moment().calendar() })
             if (login) {
                let jwt_secrect = "36s634uper!@_$%~^131*($133421%Dsecrzxcet_123456@aaa";
                const token = jwt.sign(
                    {
                        exp: Math.floor(Date.now() / 1000) + 60 * 20,
                        id: result._id,
                        email: result.email,
                        role: result.role
                    },
                    jwt_secrect
                );
                res.json({
                    msg: "sucessfully loggedIn",
                    code: 2000,
                    data: result,
                    token: token

                })
            } else {
                res.json({
                    code: 5000,
                    msg: "login time not updated"
                })

            }

        } else {
            res.json({
                code: 5000,
                msg: "Password wrong"
            })
        }

    } else {
        res.json({
            msg: "email doesNot exist",
            code: 5000
        })
    }


}

async function logout(req, res) {
    reqbody = req.body
    var logOut = await userRegisterSchema.findOneAndUpdate({ _id: reqbody.id }, { logoutTime: moment().calendar() })
    if (logOut) {
        res.json({
            msg: "loggedOut sucessful",
            code: 2000,
            result:logOut
        })
    } else {
        res.json({
            msg: "failed to logOut",
            code: 5000
        })
    }

}
async function getUsers(req, res) {
    let userList = await userRegisterSchema.find()
    if (userList) {
        res.json({
            msg: "sucessfully found all users",
            code: 2000,
            result: userList

        })
    } else {
        res.json({
            msg: "failed to find users",
            code: 5000
        })
    }
}


async function updatePassword(req, res) {
    reqBody = req.body
    if (reqBody.newPassword == reqBody.confirmPassword) {
        let result = await userRegisterSchema.findOne({ _id: reqBody.id })
        if (result) {
            let newPasswordz = reqBody.newPassword
            let confirmPassword = reqBody.confirmPassword

            let hashedPassword = passwordHash.generate(newPasswordz)
            console.log("result", hashedPassword)


            let changedPassword = {
                password: hashedPassword,
            }
            const query = {
                $set: changedPassword,


            }

            const newPassword1 = await userRegisterSchema.updateOne({ _id: reqBody.id }, query);

            if (newPassword1) {
                console.log("rasdfsdf", newPassword1);
                res.json({
                    code: 2000,
                    msg: "password Upadted successfully!"
                })
            }

            else {
                res.json({
                    code: 5000,
                    msg: 'password update failed',
                })

            }

        } else {
            res.json({
                msg: "id not found",
                code: 5000
            })

        }

    } else {
        res.json({
            msg: "confirm password and new password does not match",
            code: 5000
        })
    }
}
async function deleteUser(req, res) {
    reqData = req.body
    let user = await userRegisterSchema.deleteOne({ _id: reqData.id })
    if (user) {
        res.json({
            msg: " category deleted sucessfully",
            code: 2000
        })

    } else {
        res.json({
            msg: "category delete failed",
            code: 5000
        })
    }
}
async function getUserById(req, res) {
    reqData = req.body
    let user = await userRegisterSchema.findOne({ _id: reqData.id })
    if (user) {
        res.json({
            msg: " user found sucessfully",
            code: 2000,
            result:user
        })

    } else {
        res.json({
            msg: "can't find user ",
            code: 5000
        })
    }
}


module.exports = {
    stuRegister,
    stuLogin,
    logout,
    getUsers,
    updatePassword,
    deleteUser,
    getUserById
}
