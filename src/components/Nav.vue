<template>
  <div>
  <nav>
    <!--<router-link to="/">Welkom</router-link> -
    <router-link to="/info">Info</router-link> -
    <router-link to="/ervaring">Ervaring</router-link>-->
    <router-link class="spacing" v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Welkom',
          page: '/'
        },
        {
          id: 1,
          text: 'Info',
          page: '/info'
        },
        {
          id: 2,
          text: 'Ervaring',
          page: '/ervaring'
        }
      ]
    }
  }
}
</script>
<style>
.spacing {
    Margin-right: 10px;
  }
  #nav {
    position:relative;
    padding: 30px;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  #nav a.router-link-active a.router-link-exact-active {
    color: #42b983;
    font-weight: bold;
  }
  #content {
    position:relative;
    background-color:darkorange;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
