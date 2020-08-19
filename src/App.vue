<template id="appFull">
  <div id="app">
     <Navigation></Navigation>
      <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'app',
  components: {
    'Navigation': Nav
  }
}
</script>

<style>
#appFull {
  background: radial-gradient(circle, rgba(78,70,221,1) 0%, rgba(95,95,255,1) 23%, rgba(74,193,245,0.5690651260504201) 76%, rgba(0,212,255,1) 100%);
}

#app {

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width:950px;
    background-color:bisque;
    position: absolute;
    left: 50%;
    top: 10px;
    margin-left:-475px;
}

.page {
  position:fixed;
  width:inherit;
}

</style>
