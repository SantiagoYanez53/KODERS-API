const { generation } = require ("mongoose")
const createError = require("http-errors")
const gen = require("../models/generation.model");
const generationModel = require("../models/generation.model");

async function create(genData) {
    const newGen = await gen.create(genData);
    return newGen
}

async function getAll() {
    const allGen = await gen.find()
    return allGen
}

async function getById(id) {
    const generation = await gen.findById(id);
    return generation;
}

async function deleteById(id){
    const genDelate = await gen.findByIdAndDelete(id)
    return genDelate
}

async function updateById (id, newKoderData){
    const updatedGen = await gen.findByIdAndUpdate(id, newKoderData, 
        {new: true});
    return updatedGen
}

module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById,
}