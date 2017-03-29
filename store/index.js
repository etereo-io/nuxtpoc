export const state = {
  todos: [],
}
export const mutations = {
  settodos(state, data) {
    console.log('SET TODOS!', data);
    state.todos = [...data];
  }
}
