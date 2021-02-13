const state = () => ({
  dummy: 0,
})

const mutations = {
  increment(state) {
    state.dummy++
  },
}

module.exports = {
  state,
  mutations,
}
