const User = require("../models/User");

module.exports = {
    async store(req, res) {
        try {
            const { name, email, company, office, password } = req.body

            const user = await User.create({ name, email, company, office, isAdmin: true, password })

            return res.json(user);
        } catch (err) {
            return(console.log(err))
        }
    }
}