<script >
import { mapActions,mapState } from 'vuex'
export default{
  name: 'product',
   props: ['product'],
   
data() {
    return {
      quantity:1,
      deliveryType:"normal"
    }
    
     },

computed: {
    ...mapState(['products']),
  },

  methods: {
    //...mapActions(['delivery','fetchProducts',]),
  delivery(date)
  {
   const weight = this.$props.product.weight*this.quantity
   const deliveryType=this.deliveryType
   let deliveryDate = new Date();
 if (deliveryType === 'normal') {
    if (weight >= 0 && weight <= 10) {
      if (this.weekdelivery(date, deliveryDate.setDate(date.getDate() + 1))) {
        deliveryDate.setDate(date.getDate() + 3);
        //alert(`All done today is ${new Date()} with ${deliveryType } delivery expected delivery date is ${ new Date(deliveryDate)}`);
        }
     else{
    deliveryDate.setDate(date.getDate() + 1);
    }
    } 
    else if (weight > 10 && weight <= 20) {
      if (this.weekdelivery(date, deliveryDate.setDate(date.getDate() + 3))) {
        deliveryDate.setDate(date.getDate() + 5);
        }
      else{
      deliveryDate.setDate(date.getDate() + 3); }
    } 
    else if (weight > 20 && weight <= 100) {
      if (this.weekdelivery(date, deliveryDate.setDate(date.getDate() + 10))) {
        deliveryDate.setDate(date.getDate() + 12);
       }
      else{
      deliveryDate.setDate(date.getDate() + 10);
     }
    }
  } 
  else if (deliveryType === 'express') {
    if (weight >= 0 && weight <= 10) {
      deliveryDate.setDate(date.getDate(new Date()))
    }
     else if (weight > 10 && weight <= 20) {
      if (this.weekdelivery(date, deliveryDate.setDate(date.getDate() + 2))) {
        deliveryDate.setDate(date.getDate() + 4);
      }
      else{
      deliveryDate.setDate(date.getDate() + 2);
      }
     } 
    else if (weight > 20 && weight <= 100) {
      if (this.weekdelivery(date, deliveryDate.setDate(date.getDate() + 9))) {
        deliveryDate.setDate(date.getDate() + 11);
    }
      else {
      deliveryDate.setDate(date.getDate() + 9);
   }
    }
     
  }
alert(`All done! today is : ${new Date()}. you selected ${deliveryType } delivery type. Expected delivery date is : ${ new Date(deliveryDate)}`); 
  },
  //routine to check if weekend  exist in current date and and expected dlivery date
  weekdelivery(current,delivery){
    current = new Date(current);
    if (current.getDay() == 0 ) return true;
    delivery = new Date(delivery);
    
    let day_diff = (delivery - current) / (1000 * 60 * 60 * 24);
    let delivery_day = current.getDay() + day_diff;    
    if (delivery_day > 5) return true;

    return false;
}
},
}
</script>

<template>
    <div class="card my-5 border-0" style="height:41rem;">
    <div class="card-body">
    <img src="https://picsum.photos/200/300" :alt="product.name" class="card-img-top"/> 
    <h4 class="title text-center card-title display-5 pt-4">{{product.name}}</h4>
    <h6 class="text-center text-muted card-subtitle display-7">Weight:{{product.weight}}</h6>
    <label for="quantity" class="text-center text-muted card-subtitle display-7" >Quantity:</label>
    <div class="form-check form-check-inline">
<input v-model="quantity" type= "number" placeholder="edit me" > 
 </div>
 <br>
    <label for="deliveryType" class="text-center text-muted card-subtitle display-7">Delivery Type:</label>
    <div class="form-check form-check-inline">
    <input v-model="deliveryType" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="normal">
    <label class="form-check-label" for="inlineRadio1">normal</label>
  </div>
  <div class="form-check form-check-inline">
  <input v-model="deliveryType" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="express">
  <label class="form-check-label" for="inlineRadio2">express</label>
  </div>
  <br>
<button class="btn btn-primary" v-on:click="delivery(new Date())">Get Delivery Date</button> 
</div><!-- delivery of card content -->
</div>
</template>