const GetModel = require('../models/gems')
const Random = require('meteor-random')
const { id }= require('meteor-random')

module.exports = {
    createGem,
    getAllGems,
    getGem,
    getGemPost,
    updateGem,
    deleteGem
}

async function createGem(req, res){
    console.log("User entry", req.body)
    const { name, description, long_description, price, size, specs, reviews } = req.body
    const newGem = new GemModel({ name, description, long_description, price, size, specs, reviews})
    newGem._id = Random.id()
    console.log(newGem._id)
   await newGem.save()
    res.status(200).send({_id: newGem._id,success_msg: 'new gem created succesfull'})

}

async function getAllGems(req, res){
    let gems = await GemModel.find({})
    let total = gems.length
    res.status(200).send({gems: gems, total:total})
}
async function getGem(req, res){
    let gem = getModel.findOne({_id: req.params._id})
    res.status(200).send({gem: gem})
}
async function getGemPost(req, res){
    const {_id, name, description, leng_description, price, size, canPurchase, favorite, specs} = req.body
    await GenModel.findByIdAndUpdate(
        {
            name,
            description,
            long_description,
            price,
            size,
            canPurchase,
            favorite,
            specs
        }
    )
}
async function updateGem(req, res){}
async function deleteGem(req, res){}