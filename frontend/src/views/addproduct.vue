<script>
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
  name: 'addproduct',
  data() {
    return { 
      name: '',
      weight: '',
      image: '',
    
      backendError: null,
      
    }
  },
  methods: {
   // ...mapActions(['addProduct']),
    async submitProduct(e) {
        e.preventDefault()
      try {
      await axios.post('/api/products',{name:this.name,
      weight:this.weight,
      image:this.image})
      this.$swal("Good job!", "Successfully Added!", "success");
       this.$router.push('/home')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
.register
  form( @submit="submitProduct")
      h1 ADD a new Product
      
      
      label(for="name") Name:&nbsp;
        input(v-model="name" id="name" type="text" placeholder="Poduct name" required)
      
      label(for="weight") Weight:&nbsp;
        input(v-model="weight" id="weight" type="number" placeholder="product weight" required)
      label(for="image") image:&nbsp;
        input(v-model="image" id="image" type="url" placeholder="product image" required)
      button(type="submit") Add
  div(v-if="backendError") {{ backendError }}
  div Want to see already existed products? <router-link to="/home">products</router-link>
  
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}
</style>
