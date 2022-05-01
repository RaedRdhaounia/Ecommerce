const bcrypt = require("bcrypt")

exports.register= async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    try {
        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).send({ msg: "user already exist" })
        }
        const newUser = User({ ...req.body })
        const hashedPassword = await bcrypt.hash(password, 10)
        newUser.password = hashedPassword
        await newUser.save()
        res.send({ user:{firstName, lastName, email} , msg: 'user successfuly added' })
    } catch (error) {
        console.log(error)
        res.status(400).send("connot save user")
    }
}

