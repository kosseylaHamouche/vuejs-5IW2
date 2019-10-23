<template>
  <div class="input">
    <input type="text" v-on:change="setMessage"/>
</template>

<script>
export default {
  name: 'InputMessage',
  props: {
    setMessage: Function
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.input {
  background: red;
}
</style>
