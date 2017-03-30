<template>
  <div class="todo container">
    <h1>Hello world!</h1>
    <p>Loaded from the {{name}}-side</p>
    <h2>Called each time</h2>
    <ul>
      <li v-for="item in computedItems" :class="{ checked: item.completed }" @click="toggleCheckFromComponent(item.id)">{{ item.title }}</li>
    </ul>
    <h2>Saved in store</h2>
    <ul>
      <li v-for="todo in todos" :class="{ checked: todo.completed }" @click="toggleCheckFromStore(todo)">{{ todo.title }}</li>
    </ul>
    <nuxt-link class="button" to="/">
      Home
    </nuxt-link>
  </div>
</template>

<script>
import axios from '~plugins/axios';
import { mapState } from 'vuex';

export default {
  transition: 'bounce',
  async asyncData ({ req }) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return {
      items: data.slice(0, 10),
      name: req ? 'server' : 'client',
    };
  },
  async fetch ({ store }) {
    if (store.state.todos.todos.length === 0) {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
      store.commit('todos/setTodos', data);
    }
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
    computedItems() {
      return this.items;
    },
    todos() {
      return [...this.$store.state.todos.todos].slice(0, 10);
    }
  },
  methods: {
    toggleCheckFromStore(item) {
      console.log(item.completed);
      this.$store.commit('todos/checkTodo', item)
    },
    toggleCheckFromComponent(id) {
      this.items[id - 1].completed = !this.items[id - 1].completed;
    },
  },
};
</script>
<style scoped>
  li {
      cursor: pointer;
  }
  .checked {
    text-decoration: line-through;
  }
</style>
