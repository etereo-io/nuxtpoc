export const state = {
  todos: [],
}
export const mutations = {
  setTodos(state, data) {
    state.todos = [...data];
  },
  checkTodo(state, data) {
    state.todos[data.id - 1].completed = !state.todos[data.id - 1].completed;
  },
}
