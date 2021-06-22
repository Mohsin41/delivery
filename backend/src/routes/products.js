const express = require('express')
const Product = require('../models/product')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await Product.find())
})

router.get('/initialize', async (req, res) => {
  const sample1 = new Product({
    name: 'sample1',
    weight: 5,
    deliveryType: 'normal',
  })
  await sample1.save()
  
  //const a=sample1.getDeliveryDate()

  // console.log(`the date is:${a}`)
  

  res.sendStatus(204)
})
router.post('/',  async (req, res) => {
  const productToAdd = {
    name: req.body.name,
    weight: req.body.weight,
    image: req.body.image,
    
  }

  const addedProduct = await Product.create(productToAdd)
  res.send(addedProduct)
})


/*possible end point for storing deliverydate in backend with order model maybe
router.post('/delivery', async (req, res) =>{
   const product = await Product.findById(req.params.Id)
   await product.getDeliveryDate(new Date())

  res.sendStatus(204) 
}) */
module.exports = router

