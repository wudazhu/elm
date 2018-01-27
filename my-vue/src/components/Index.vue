<template>
<div id="app">
    <Header class="header"/>
    <div class="section"></div>
    <Footer class="footer"/>

  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'Index',
  data () {
    return {
      msg: ''
    }
    
  },
     components: {
      Header,
      Footer
   
  }
}
</script>

<style scoped>

</style>
