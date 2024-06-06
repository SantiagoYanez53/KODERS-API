const createError = require("http-errors")
const koderUseCase = require ("../usecases/koders.usecase")
const jwt = require("../lib/jwt")

async function auth(req, res, next ) {
    try {
      const authorization = req.headers.authorization;

      if(!authorization) {
        throw createError (401, "JWT is required")
      }

      const payload = jwt.verify (authorization)
      const user = await koderUseCase.getById(payload.id)

      req.user = user

      next()

    } catch (error) {
        res.status (401)
        res.json ({
            succes: false,
            error: error.message,
        })
    }
    
}

module.exports = auth;