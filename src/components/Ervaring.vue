<template>
  <div>
    <h1>Ervaring</h1>
    <!--<div id="ervaringbox" v-for="ervaring in ervaringen" v-bind:key="ervaring.bedrijf">
        <hr/>
        <h3>{{ ervaring.bedrijf}} ( {{ ervaring.tag}} )</h3>
        <h4>{{ ervaring.periode}}</h4>
        {{ ervaring.beschrijving}}<hr/>
    </div>-->
    <ErvaringBox id="ervaringbox" v-for="ervaring in ervaringen" v-bind:key="ervaring.bedrijf" :title="ervaring.bedrijf" :msgErvaringContent="ervaring.beschrijving" :periode="ervaring.periode" :category="ervaring.tag"></ErvaringBox>
  </div>
</template>

<script>
import ErvaringJSON from '../assets/ervaringenJSON.json'
import ErvBox from './ErvaringBox'

export default {
  name: 'Ervaring',
  components: {
    'ErvaringBox': ErvBox
  },
  computed: {
    ervaringen () {
      return ErvaringJSON.ervaringen.map((item) => {
        return item
      })
    }
  }
}
</script>

<style scoped>

</style>
