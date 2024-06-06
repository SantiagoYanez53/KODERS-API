const { modelNames } = require("mongoose");
const Koders = require("../models/koders.model");
const createHttpError = require("http-errors");
const encrypt = require ("../lib/encrypt")

//los uses cases son para todas las funciones que pueda hacer el usuario
// siempre que se utilice el Await se necesita hacer la funcion async (sirve para que la funcion primero resuelva la promesa y luego regrese los resultados)
async function create(koderData) {
    const koderFound = await Koders.findOne({ email: koderData.email })
  
  if  (koderFound) {
    //throw new Error("Emaul already in use")
    throw createHttpError(409,"Email alredy in use")
  }
  const password = await encrypt.encrypt(koderData.password)

  koderData.password = password
  
    const newKoder =  await Koders.create(koderData);
  return newKoder;
}

async function getAll () {
    const allKoders = await Koders.find().populate("generation")
    return allKoders;

}

async function getById (id){
    const koder = await Koders.findById(id).populate("generation")
    return koder
}

async function delateById (id) {
    const koderDelted = await Koders.findByIdAndDelete(id);
    return koderDelted
}

async function updateById (id, newKoderData){
    const updatedKoder = await Koders.findByIdAndUpdate(id, newKoderData, 
        {new: true});
    return updatedKoder
}

module.exports = {
    create,
    getAll,
    getById,
    delateById,
    updateById,
}