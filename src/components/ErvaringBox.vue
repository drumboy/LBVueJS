<template>
  <div id="ervaringBox">
    <hr/><h3>{{ title }} ( {{ category }} )</h3>
    <h4>( {{ periode }} )</h4>
    <p>{{ msgErvaringContent }}</p><hr/>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    msgErvaringContent: String,
    periode: String,
    category: String
  }
}
</script>

<style>
#ervaringbox {
   width:auto;
   height:auto;
   background-color:moccasin;
   text-align:left;
   position:relative;
   margin:10px;
 }
</style>
