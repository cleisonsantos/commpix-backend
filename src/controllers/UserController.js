const User = require("../models/User");

const bcrypt = require("bcrypt");

const verifyEmail = async (email) => {

    const users = await User.findAll({
        where: {
            email
        }
    })
    if (users) {
        return true
    }
}

module.exports = {

    async index(req, res) {
        const users = await User.findAll()

        return res.json(users)
    },

    async store(req, res) {

        try {
            let { name, email, company, office, password } = req.body

            if (verifyEmail(email)) {
                return res.status(400).json({ error: "E-mail já existe! :(" })
            }

            const saltRounds = 10

            password = await bcrypt.hash(password, saltRounds)

            const user = await User.create({ name, email, company, office, isAdmin: true, password })

            return await res.json(user)

        } catch (err) {

            return await res.json(err)

        }
    },

    async destroy(req, res) {
        const id = req.params.id
        try {
            const user = await User.destroy({
                where: {
                    id
                }
            })
            return await res.json(user)
        } catch (err) {
            return await res.json(err)
        }
    }
}