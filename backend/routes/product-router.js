// DEPENDENCIES
const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/product-controller')


// ROUTES
// PRODUCT INDEX ROUTE - /product/ GET db.Product.find()
router.get('/', productCtrl.index) 


// PRODUCT CREATE ROUTE - POST
//  - /product/ , db.Product.create(req.body)
router.post('/', productCtrl.create)


// PRODUCT SHOW ROUTE - GET 
//  - /product/:id, db.Product.findById(req.params.id)
router.get('/:id', productCtrl.show)


// PRODUCT UPDATE ROUTE - PUT
//  - /product/:id, db.Product.findById(req.params.id, req.body, options)
router.put('/:id', productCtrl.update)


// PRODUCT DELETE ROUTE - DELETE
//  - /product/:id, db.Product.findById(req.params.id)
router.delete('/:id', productCtrl.delete)


module.exports = router