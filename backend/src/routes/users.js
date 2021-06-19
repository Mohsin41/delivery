const express = require('express')

const router = express.Router()

const User = require('../models/user.js')
const Product = require('../models/product')

 

router.get('/initialize', async (req, res) => {
  const Mohsin = new User({
      name: 'Mohsin',
        email: 'example@gmail.com',
  })
  await Mohsin.setPassword('abc')
  await Mohsin.save()
    
    console.log(Mohsin.getDeliveryDate(sample3))
    
     res.sendStatus(200)
})

router.post('/:Id/delivery', async (req, res) =>{
   const user = await User.findById(req.params.Id)
  //console.log("user who order", user)

  const product = await Product.findById(req.body._id)
  //console.log("angel who will donate",angel)

  const date=await user.getDeliveryDate( product)

  res.send(date) 
})
module.exports = router