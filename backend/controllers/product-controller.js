const express = require('express')
const { Product } = require('../models')

// find method - db.Product.find()
async function index(req, res, next){
    try{
        // get all products
        res.json(await Product.find({}))

    } catch (error){
        res.status(400).json({error: error.message})
    }
}

// create method - db.Product.create(req.body)
async function create(req, res, next){
    try {
        res.json(await Product.create(req.body))
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// detail(show) method - db.Product.findById(req.params.id)
async function detail(req, res, next){
    try{
        res.json(await Product.findById(req.params.id))
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// update method - db.Product.findById(req.params.id, req.body, options)
async function update(req, res, next){
    try{
        res.json(await Product.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete method - db.Product.findById(req.params.id)
async function destroy(req, res, next){
    try{
        res.json(await Product.findByIdAndRemove(req.params.id))
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    index,
    create,
    show: detail,
    update,
    delete: destroy

}