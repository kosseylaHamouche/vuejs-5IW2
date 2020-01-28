import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
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
                name: "Card2"
                }
            ]
            },
            {
            name: "List2",
            cards: [
                {
                name: "Card1"
                }        
            ]
            },
            {
            name: "List3",
            cards: []
            }
        ],
        name: "Board1"
    },
    mutation: {
        addCard: (state, payload) => {
            state.lists = state.lists.map(list => {
                if (list.name !== payload.into.name) return list;
                return {
                    ...list,
                    cards: [payload.card, ...lists.cards]
                };
            });
        }
    },
    actions: {
        addCard: function() {
            setTimeout(() => {
                this.commit('addCard', {
                    card: {
                        title: "Card4",
                        status: "New"
                    },
                    into: {
                        name: "List1"
                    }
                })
            }, 5000);
        }
    }
});