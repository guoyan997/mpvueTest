const count = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }
  }
}

export default count
