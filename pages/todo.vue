<template>
  <div class="home">
    <h1>Hello world!</h1>
    <p>Loaded from the {{name}}-side</p>
    <h2>Called each time</h2>
    <ul>
      <li v-for="item in items">{{ item.title }}</li>
    </ul>
    <h3>Saved in store</h3>
    <ul>
      <li v-for="todo in todos" @click="toggleCheck">{{ todo.title }}</li>
    </ul>
    <nuxt-link class="button" to="/">
      Home
    </nuxt-link>
  </div>
</template>

<style scoped></style>

<script>
import axios from 'axios';
import { mapState } from 'vuex'

export default {
  async asyncData ({ req }) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return {
      items: data.slice(0, 10),
      name: req ? 'server' : 'client',
    };
  },
  async fetch ({ store }) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    store.commit('todos/settodos', data);
  },
  data() {
    return {
      items: [],
    };
  },
  head() {
    return {
      title: `Todos (${this.name}-side)`
    };
  },
  computed: {
    items() {
      return this.items;
    },
    todos() {
      return [...this.$store.state.todos.todos].slice(0, 10);
    }
  },
  methods: {
    toggleCheck(id) {
      console.log(id)
      this.$store.commit('todos/checkTodo', id)
    }
  }
};
</script>
