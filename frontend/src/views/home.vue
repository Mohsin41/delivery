<script>
import { mapActions } from 'vuex'
import axios from 'axios'

import HelloWorld from '@/components/hello-world.vue'
import Product from '@/components/product.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Product,},
    data() {
    return {
      products: [],
    }
  },
 async created() {
    const productRequest=(await axios.get('/api/products'))
    this.products=productRequest.data
    
  },
 /* methods: {
    ...mapActions(['fetchProducts']),
  },*/
}
</script>

<template>

  
    <div>
      -->
  
        <!-- Products catalogue -->
        <div class="container mx-auto px-4">
            <div class="flex mb-4">
                <div class="row">
                    <!-- Loop through products and output -->
                    <!-- :key is for Vue to keep track of items -->
                    <div class="col-sm-4" v-for="product in products" :key="product.id">
                        <!-- Bind product to cart -->
                        <Product  :product="product"/>  
                        </div><!-- END Product Catalogue -->
                    </div>
                </div>
            </div><!-- END of App Container -->
    </div><!-- END of Storefront -->

</template>
