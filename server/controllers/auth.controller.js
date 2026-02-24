exports.signin = async (req, res) => {
    try {
        res.status(200).json({ message: "Login Success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Unable To Login !" })

    }
}

exports.registerEmployee = async (req, res) => {
    try {
        res.status(200).json({ message: "Register Employee Success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Unable To Register Employee !" })

    }
}


exports.signout = async (req, res) => {
    try {
        res.status(200).json({ message: "Signout Success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Unable To Signout Employee !" })

    }
}


exports.sendOTP = async (req, res) => {
    try {
        res.status(200).json({ message: "sendOTP Success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Unable To sendOTP !" })

    }
}


exports.verifyOTP = async (req, res) => {
    try {
        res.status(200).json({ message: "verifyOTP Success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Unable To verifyOTP !" })

    }
}


exports.forgetPassword = async (req, res) => {
    try {
        res.status(200).json({ message: "forgetPassword Success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Unable To forgetPassword !" })

    }
}


exports.changePassword = async (req, res) => {
    try {
        res.status(200).json({ message: "changePassword Success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Unable To changePassword !" })

    }
}