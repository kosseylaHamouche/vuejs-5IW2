<template>
  <div class="board">
    <a href="https://google.fr" v-on:click.prevent="alert($event.target.href)">Google</a>
    <h1 class="board-name">{{name}}</h1>
    <div class="board-lists">
      <list :onNewCard="onNewCard" v-for="list in lists" v-bind="list" v-bind:key="list.id"/>
    </div>
  </div>
</template>

<script>

import List from "./List";

export default {
  name: 'Board',
  components: {
    List: List
  },
  data: () =>({
    draggedItem: null,
    lists: [
      {
        name: "List1",
        cards: [
          {
            name: "Card1",
            waiting: true
          },
          {
            name: "card2"
          }
        ]
      },
      {
        name: "List2",
        cards: [
           {
             name: "card1"
           }
        ]
      },
      {
        name: "List3",
        cards: []
      }
    ],
    name: "Board1"
  }),
  provide: function() {
    return {
      onDrag: this.onDrag
    };
  },
  methods: {
    onNewCard: function (card, into) {
      this.lists = this.lists.map(list => {
        if (list.name !== into.name) return list;
        return {
          ...list,
          cards: [card, ...list.cards]
        };
      })
    },
    onDrag: function(card, list) {
      this.draggedItem = {
        card,
        list
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.board {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: red;
}

div.board-name {
  background-color: green;
}

div.board-lists {
  flex: 1;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  width: 100%;
  overflow-x: scroll;
  background-color: yellow;
}
</style>
