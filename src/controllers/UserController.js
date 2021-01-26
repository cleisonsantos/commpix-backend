const User = require("../models/User");

module.exports = {
    async store(req, res) {
        const { name, email, company_name, office, password } = req.body
        const isAdmin = true
        const user = await User.create({ name, email, company_name, office, isAdmin, password })

        return res.json(user);
    }
}