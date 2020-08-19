<template>
  <div>
    <h1>Info</h1>
    <button v-on:click="toonInfo = !toonInfo">
        Toon Info
      </button>
    <div id="content" v-if="toonInfo">
      <hr/>
    <ul v-for="infoDet in infoDetails" v-bind:key="infoDet.key">
      <li>
        {{ infoDet.key }}: {{ infoDet.value }}
      </li>
    </ul>
    <hr/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      msgInfo: 'Dit is de info pagina!',
      infoDetails: [
        {key: 'Naam', value: 'Laurens Bourgeois'},
        {key: 'Adres', value: 'IJshoutestraat 53'},
        {key: 'Postcode', value: '9520'},
        {key: 'Gemeente', value: 'Sint-Lievens-Houtem'},
        {key: 'Email', value: 'laurens.bourgeois@telenet.be'}
      ],
      toonInfo: false
    }
  }
}
</script>

<style>
  #content {
    text-align:left;
    background-color:moccasin;
  }
</style>
