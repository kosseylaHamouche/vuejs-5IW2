<template>
  <div class="list">
    <h1 class="list-name">{{name}} {{cards | countDone}}</h1>
    <div v-if="cards.length > 0" class="list-cards">
      <Card v-for="card in cards" v-bind="card" v-bind:key="card.id"/>
    </div>
    <div v-else>
      <p>Pas de cards </p>
    </div>
    <a @click="toggleForm"> + Add new Card</a>
    <NewCard :open="showForm" :onClose="toggleForm" @new-card="handleNewCard" />
  </div>
</template>

<script>

import Card from "./Card"
import NewCard from "./NewCardPlusPlus"

export default {
  name: 'List',
  components: {
    Card,
    NewCard
  },
  props: {
    cards: Array,
    name: String,
    onNewCard: Function
  },
  data: () => ({
    showForm: false
  }),
  filters: {
    countDone: cards => cards.filter(card => card.status === "done").length
  },
  methods: {
    toggleForm: function () {
      this.showForm = !this.showForm
    },
    handleNewCard: function(card) {
      const {onNewCard, ...list} = this.$props;
      this.toggleForm();
      onNewCard(card, list);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.list {
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: blue;
  margin-left: 10px;
  position: relative;
}

div.list-name {
  color: white;
}

div.list-cards {
  flex: 1;
  background-color: aquamarine;
}
</style>
