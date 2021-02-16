const state = () => ({
  typeInput: '',
  sampleText: '',
})

const getters = {
  getSampleInput: (state) => state.typeInput,
}

const mutations = {
  setTypeInput: (state, input) => {
    state.typeInput = input
  },
}

const actions = {}

module.exports = {
  state,
  getters,
  mutations,
  actions,
}
