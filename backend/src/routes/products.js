const express = require('express')
const Product = require('../models/product')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await Product.find())
})

router.get('/initialize', async (req, res) => {
  const sample1 = new Product({
    name: 'sample1',
    weight: 3,
    deliveryType: 'express',
  })
  await sample1.save()
  console.log("done")
  const sample2 = new Product({
    name: 'sample2',
    weight: 5,
    deliveryType: 'normal',
  })
  await sample2.save() 
  let a = sample2.getDeliveryDate(new Date())
  let b = sample1.getDeliveryDate(new Date())
  

  console.log(a)
  console.log (b)

  res.sendStatus(204)
})
router.post('/delivery', async (req, res) =>{
   const product = await Product.findById(req.params.Id)
   await product.getDeliveryDate( new Date())

  res.sendStatus(204) 
})
module.exports = router

