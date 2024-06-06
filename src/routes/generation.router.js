//<>
const express = require("express")
const genUseCase = require ("../usecases/generation.usecase");

const route = express.Router();

//GET

route.get ("/", async (req,res) => {
    try {
        const gen = await genUseCase.getAll ();
    res.json ({
        succes: true,
        message: "All Generation",
        data: { gen }
    })
    } catch (error) {
        res.status(error.status || 500);
        res.json ({
            succces: false,
            error:error.message,
        })
    }
    
})

//POST

route.post ("/", async (req,res) => {
    try {
        const gen = await genUseCase.create (req.body);
        res.json ({
            sucess: true,
            data : { gen: gen }
        })
    }catch (error) {
        res.status(error.status || 500);
        res.json ({
            succes: false,
            error: error.message
        })

    }
})

//get por Id

route.get ("/:id", async (req,res) => {
    try {
        const id = req.params.id
        const gen = await genUseCase.getById(id)

        res.json ({
            succes: true, 
            data: { gen }
        })

    } catch (error) {
        res.status (error.status || 500),
        res.json ({
            succes:false,
            error:error.message
        })

    }
})

//DELETE

route.delete ("/:id", async (req,res) => {
    try {
        const { id } = req.params
        const genDelete = await genUseCase.deleteById(id)

        res.json ({
            succes: true,
            data: { gen: genDelete}
        })

    } catch (error) {
        res.status (error.status || 500),
        res.json ({
            succes:false,
            error:error.message
        })

    }
}) 

// Patch

route.patch ("/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const genUpdate = await genUseCase.updateById(id, req.body);
        res.json({
            succes: true,
            data: { gen: genUpdate },
        })

    } catch (error) {
        res.status (error.status || 500);
        res.json ({
            succces: false,
            error:error.message,
        })
    }
})
module.exports = route;