const state = () => ({
  counter: 0,
})

const mutations = {
  increment(state) {
    state.counter++
  },
}

module.exports = {
  state,
  mutations,
}
