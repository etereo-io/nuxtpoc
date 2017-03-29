export const state = {
  todos: [],
}
export const mutations = {
  settodos(state, data) {
    state.todos = [...data];
  }
}
