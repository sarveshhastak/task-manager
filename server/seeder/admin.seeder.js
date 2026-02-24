require("dotenv").config({ path: "./../.env" })
const mongoose = require("mongoose")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
exports.seedAdmiin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected...")
        const result = await User.findOne({ role: "admin" })
        if (result) {
            console.log("Admin Already Present")
            process.exit(1)
        }
        const hash = await bcrypt.hash("123", 10)
        await User.create({
            name: "admin",
            email: "admin@gmail.com",
            password: hash,
            mobile: "123",
            role: "admin"
        })
        console.log("Admin Seed Complete")
        process.exit(1)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}