<template>
    <div>
        <div class="grid-row">
            <label for="title">Title</label>
            <input v-model="name" id="title"/>
        </div>
        <div class="grid-row">
            <label for="description">Description</label>
            <textarea v-model="description" id="description"/>
        </div>
        <div class="grid-row">
            <label for="velocity">Velocity</label>
            <input v-model="velocity" id="velocity"/>
        </div>
        <div class="grid-row">
            <label>Status</label>
            <label>
                New
                <input type="radio" v-model="status" value="new" name="status" />
            </label>
            <label>
                Done
                <input type="radio" v-model="status" value="done" name="status" />
            </label>
        </div>
        <button @click="handleSubmit">Submit</button>
    </div>
</template>

<script>
export default {
    name: "NewCard",
    data: () => ({
        name: "",
        description: "",
        velocity: 0,
        status: "new"
    }),
    methods: {
        handleSubmit: function() {
            this.$emit('new-card', this.$data);
        }
    }
}
</script>

<style scoped>
.grid-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>