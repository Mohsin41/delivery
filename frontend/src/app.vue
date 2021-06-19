<template lang="pug">
#app
  #nav
    router-link(to="/") Login
    router-link(to="/register") Register
    router-link(to="/product") AddProduct
    a(@click="doLogout" href="#") Logout
  router-view   
</template>

<style lang="scss">
//@import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2a4e72;
}
#nav {
  align-items: center;
  background: salmon;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  
  &__header {
    font-size: 2.5rem;
  }
}
</style>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/')
    }
  }
}
</script>