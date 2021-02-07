const User = require("../models/User");

const bcrypt = require("bcrypt")

module.exports = {
    async index(req, res) {
        const users = await User.findAll()

        return res.json(users)
    },

    async store(req, res) {
        try {
            let { name, email, company, office, password } = req.body

            const saltRounds = 10
            password = await bcrypt.hash(password, saltRounds)
            
            const user = await User.create({ name, email, company, office, isAdmin: true, password:password })

            return res.json(user)
        } catch (err) {
            return(console.log(err))
        }
    }
}