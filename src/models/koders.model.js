const mongoose = require("mongoose")

const modelName = `koders`
const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    lastName: {
        type: String,
        required: false,
        maxLength: 100,
    },  
    email: {
        type: String,   
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    password :{
        type: String,
        required: true,
    },
    birthDate: {
        type: String,
        required: false,
    },
    genartion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "generation"
    },
    createdAt:{
        type: Date,
        //este sirve para darle un valor por defecto
        default: Date.now,
    },
})
const model = mongoose.model(modelName, schema)

module.exports = model;

