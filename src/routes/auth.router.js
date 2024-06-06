//<>
const express = require("express")
const router = express.Router()
const authUseCase = require ("../usecases/auth.usecase")


//POST  /auth/login

router.post("/login", async (req,res) => {
    try {
        const { email, password } = req.body;
        const token = await authUseCase.login(email, password)

        res.json ({
            succes: true,
            data: { token}
        })

    } catch (error) {
        res.status(error.status || 500);
        res.json ({
            succces: false,
            error:error.message,
        })
    }

})

module.exports = router