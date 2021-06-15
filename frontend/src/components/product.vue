<script >
import { mapActions,mapState } from 'vuex'
export default{
  name: 'product',
   props: ['product'],
    async created() {

    await this.fetchProducts()
  },
    data() {
    return {
      //user:null
    }
  },
computed: {
    ...mapState(['products']),
  },

methods: {
     ...mapActions(['delivery','fetchProducts',]),
},
}
</script>

<template>
    <div class="card my-5 border-0" style="height:41rem;">
        <div class="card-body">
            <img src="https://picsum.photos/200/300" :alt="product.name" class="card-img-top"/> 
            <h4 class="title text-center card-title display-5 pt-4">{{product.name}}</h4>
            <h6 class="text-center text-muted card-subtitle display-7">Quantity:{{product.quantity}}</h6>
            <h6 class="text-center text-muted card-subtitle display-7">Weight:{{product.weight}}</h6>
            <button class="btn btn-primary" v-on:click="delivery(product._id)">Get Delivery Date</button> 
    </div><!-- End of card content -->
    </div>
</template>