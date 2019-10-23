<template>
  <div class="card">
    <h1 class="card-name">{{name}}</h1>
    <p v-if="waiting">Waiting</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: String,
    waiting: {
      type: Boolean,
      default: () => false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.card {
  width: 100%;
  background-color: violet;
  margin: 0 5px;
}

div.card-name {
  color: white;
}
</style>
