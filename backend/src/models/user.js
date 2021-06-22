const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
)

/*class User{
  getDeliveryDate(product) {
      let date=new Date()
    let deliveryDate = new Date(date)
    if (product.deliveryType == "normal") {
      if (product.totalWeight(product.quantity) >= 0 && product.totalWeight(product.quantity) <= 10) {
        if (product.weekend(date, deliveryDate.setDate(deliveryDate.getDate() + 1))) {
          deliveryDate.setDate(deliveryDate.getDate() + 2)
          return new Date(deliveryDate).toLocaleDateString()
        }
        deliveryDate.setDate(deliveryDate.getDate() + 1)
        return new Date(deliveryDate).toLocaleDateString()
      }
      else if (product.totalWeight(product.quantity) > 10 && product.totalWeight(product.quantity) <= 20) {
        if (product.weekend(date, deliveryDate.setDate(deliveryDate.getDate() + 3))) {
          deliveryDate.setDate(deliveryDate.getDate() + 5)
          return new Date(deliveryDate).toLocaleDateString()
        }
        deliveryDate.setDate(deliveryDate.getDate() + 3)
        return new Date(deliveryDate).toLocaleDateString()
      }
      else if (product.totalWeight(product.quantity) > 20 && product.totalWeight(product.quantity) <= 100) {
        if (product.weekend(date, deliveryDate.setDate(deliveryDate.getDate() + 10))) {
          deliveryDate.setDate(deliveryDate.getDate() + 12)
          return new Date(deliveryDate).toLocaleDateString()
        }
        deliveryDate.setDate(deliveryDate.getDate() + 10)
        return new Date(deliveryDate).toLocaleDateString()
      }
    }
    
    else if (product.deliveryType == "express") {
      if (product.totalWeight(product.quantity) >= 0 && product.totalWeight(product.quantity) <= 10) {
        return new Date().toLocaleDateString()
      }
      else if (product.totalWeight(product.quantity) > 10 && product.totalWeight(product.quantity) <= 20) {
        if (product.weekend(date, deliveryDate.setDate(deliveryDate.getDate() + 2))) {
          deliveryDate.setDate(deliveryDate.getDate() + 4)
          return new Date(deliveryDate).toLocaleDateString()
        }
        deliveryDate.setDate(deliveryDate.getDate() + 2)
        return new Date(deliveryDate).toLocaleDateString()
      }
      else if (product.totalWeight(product.quantity) > 20 && product.totalWeight(product.quantity) <= 100) {
        if (product.weekend(date, deliveryDate.setDate(deliveryDate.getDate() + 9))) {
          deliveryDate.setDate(deliveryDate.getDate() + 11)
          return new Date(deliveryDate).toLocaleDateString()
        }
        deliveryDate.setDate(deliveryDate.getDate() + 9)
        return new Date(deliveryDate).toLocaleDateString()
      
      }
    }
    
      }
}
userSchema.loadClass(User) */

userSchema.plugin(autopopulate)
userSchema.plugin(passportLocalMongoose, {
   usernameField: 'email',
})
 
module.exports = mongoose.model('User', userSchema)