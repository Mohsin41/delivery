const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const productSchema = new mongoose.Schema(
  {
    image:{
      type:String,
    },
    name: {
      type: String,
      unique: true,
    },
    weight: { type: Number, },
    //just for now to to check working of a function at backend 
    deliveryType: {
      type: String,
      default:"normal",
    },
    //just for now to to check working of a function at backend 
    quantity: {
      type: Number,
      default:1,
    }
  },
  { timestamps: true }
)

/*class Product{
  
  totalWeight(quantity) {
    return this.weight*quantity
  }

  weekend(start,end){
    start = new Date(start);
    if (start.getDay() == 0 ) return true;
    end = new Date(end);
    
    var day_diff = (end - start) / (1000 * 60 * 60 * 24);
    var end_day = start.getDay() + day_diff;    
    if (end_day > 5) return true;

    return false;
}

  getDeliveryDate() {
    let date=new Date()
    console.log(date)
    let deliveryDate = date
    console.log("deliver date",deliveryDate)
    console.log("delivery type",this.deliveryType)
    console.log("with this.weight",this.totalWeight(this.quantity))
    console.log("without this.weight", this.totalWeight(this.quantity))
    console.log("with this weekend",this.weekend(date, deliveryDate.setDate(deliveryDate.getDate() + 1)))
    // console.log("without this",this.weekend(date, deliveryDate.setDate(deliveryDate.getDate() + 1)))

    if (this.deliveryType == "normal") {
      if (this.totalWeight(this.quantity) >= 0 && this.totalWeight(this.quantity) <= 10) {
        if (this.weekend(date, deliveryDate.setDate(date.getDate() + 1))) {
          deliveryDate.setDate(date.getDate() + 2)
          return new Date(deliveryDate).toLocaleDateString()
        }
        console.log
          (date.setDate(date.getDate() + 0))
        return date
      }
      else if (this.totalWeight(this.quantity) > 10 && this.totalWeight(this.quantity) <= 20) {
        if (this.weekend(date, deliveryDate.setDate(deliveryDate.getDate() + 3))) {
          deliveryDate.setDate(deliveryDate.getDate() + 5)
          return new Date(deliveryDate).toLocaleDateString()
        }
        deliveryDate.setDate(deliveryDate.getDate() + 3)
        return new Date(deliveryDate).toLocaleDateString()
      }
      else if (this.totalWeight(this.quantity) > 20 && this.totalWeight(this.quantity) <= 100) {
        if (this.weekend(date, deliveryDate.setDate(deliveryDate.getDate() + 10))) {
          deliveryDate.setDate(deliveryDate.getDate() + 12)
          return new Date(deliveryDate).toLocaleDateString()
        }
        deliveryDate.setDate(deliveryDate.getDate() + 10)
        return new Date(deliveryDate).toLocaleDateString()
      }
    }
    
    else if (this.deliveryType == "express") {
      if (this.totalWeight(this.quantity) >= 0 && this.totalWeight(this.quantity) <= 10) {
        return new Date().toLocaleDateString()
      }
      else if (this.totalWeight(this.quantity) > 10 && this.totalWeight(this.quantity) <= 20) {
        if (this.weekend(date, deliveryDate.setDate(deliveryDate.getDate() + 2))) {
          deliveryDate.setDate(deliveryDate.getDate() + 4)
          return new Date(deliveryDate).toLocaleDateString()
        }
        deliveryDate.setDate(deliveryDate.getDate() + 2)
        return new Date(deliveryDate).toLocaleDateString()
      }
      else if (this.totalWeight(this.quantity) > 20 && this.totalWeight(this.quantity) <= 100) {
        if (this.weekend(date, deliveryDate.setDate(deliveryDate.getDate() + 9))) {
          deliveryDate.setDate(deliveryDate.getDate() + 11)
          return new Date(deliveryDate).toLocaleDateString()
        }
        deliveryDate.setDate(deliveryDate.getDate() + 9)
        return new Date(deliveryDate).toLocaleDateString()
      
      }
    }
    
      }
    } 
  
productSchema.loadClass(Product)*/
productSchema.plugin(autopopulate)

module.exports = mongoose.model('Product', productSchema)
