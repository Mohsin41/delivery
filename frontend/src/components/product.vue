<script >
import { mapActions,mapState } from 'vuex'
export default{
  name: 'product',
   props: ['product'],
    /*async created() {

    await this.fetchProducts()
  },*/
    data() {
    return {
      quantity:1,
      deliveryType:"normal"
    }
      //user:null
    

  },

computed: {//quantity:this.quantity,
    ...mapState(['products']),
  },

  

methods: {
    //...mapActions(['delivery','fetchProducts',]),
delivery(date){
   
const weight = this.$props.product.weight*this.quantity
const deliveryType=this.deliveryType


  let deliveryDate = new Date();
  if (deliveryType === 'normal') {
    if (weight >= 0 && weight <= 10) {
      if (this.weekend(date, deliveryDate.setDate(date.getDate() + 1))) {
        deliveryDate.setDate(date.getDate() + 3);
        alert(`All done today is ${new Date()} with ${deliveryType } delivery expected delivery date is ${ new Date(deliveryDate)}`);
      }
     else{
    deliveryDate.setDate(date.getDate() + 1);
     alert(new Date(deliveryDate));}
    } 
    else if (weight > 10 && weight <= 20) {
      if (this.weekend(date, deliveryDate.setDate(date.getDate() + 2))) {
        deliveryDate.setDate(date.getDate() + 4);
       alert(new Date(deliveryDate));
      }
      deliveryDate.setDate(date.getDate() + 2);
     alert(new Date(deliveryDate));
    } else if (weight > 20 && weight <= 100) {
      if (this.weekend(date, deliveryDate.setDate(date.getDate() + 10))) {
        deliveryDate.setDate(date.getDate() + 12);
       alert(new Date(deliveryDate));
      }
      deliveryDate.setDate(date.getDate() + 10);
     alert(new Date(deliveryDate));
    }
  } else if (deliveryType === 'express') {
    if (weight >= 0 && weight <= 10) {
     alert(new Date());
    } else if (weight > 10 && weight <= 20) {
      if (this.weekend(date, deliveryDate.setDate(date.getDate() + 2))) {
        deliveryDate.setDate(date.getDate() + 4);
       alert(new Date(deliveryDate));
      }
      deliveryDate.setDate(date.getDate() + 2);
     alert(new Date(deliveryDate));
    } else if (weight > 20 && weight <= 100) {
      if (this.weekend(date, deliveryDate.setDate(date.getDate() + 9))) {
        deliveryDate.setDate(date.getDate() + 11);
       alert(new Date(deliveryDate));
      }
      deliveryDate.setDate(date.getDate() + 9);
     alert(new Date(deliveryDate));
    }
  }
    
    
      
/*let deliveryDay = 0;

if (weight >= 0 && weight <= 10) {
  deliveryDay = 1;
  
}

if (weight > 11 && weight <= 20) {
  deliveryDay = 3;
}

if (weight >20 && weight <= 100) {
  deliveryDay = 10;
}

const todayDate = new Date();
todayDate.setDate(todayDate.getDate() + deliveryDay);

const finalDate = todayDate.getDate() +"-" + todayDate.getMonth() + "-"+ todayDate.getYear()
console.log("Final Date", finalDate);
alert(`your delivery date is ${finalDate}`)*/


  },
  weekend(start,end){
    start = new Date(start);
    if (start.getDay() == 0 ) return true;
    end = new Date(end);
    
    var day_diff = (end - start) / (1000 * 60 * 60 * 24);
    var end_day = start.getDay() + day_diff;    
    if (end_day > 5) return true;

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
             <label for="quantity">Delivery Type:</label>
            <div class="form-check form-check-inline">
             
  <input v-model="deliveryType" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="express">
  <label class="form-check-label" for="inlineRadio1">express</label>
</div>
<div class="form-check form-check-inline">
  <input v-model="deliveryType" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="normal">
  <label class="form-check-label" for="inlineRadio2">normal</label>
</div>
            
           
             <label for="quantity">Quantity:</label>
                      
            <input v-model="quantity" type= "number" placeholder="edit me"> 
            <h6 class="text-center text-muted card-subtitle display-7">Weight:{{product.weight}}</h6>
            <button class="btn btn-primary" v-on:click="delivery(new Date())">Get Delivery Date</button> 
    </div><!-- End of card content -->
    </div>
</template>