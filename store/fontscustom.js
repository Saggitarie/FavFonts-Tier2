const state = () => ({
  isGrid: true,
})

const getters = {
  getIsGridStatus: (state) => state.isGrid,
}

const mutations = {
  toggleIsGridStatus: (state) => {
    state.isGrid = true
  },
  toggleIsColumnStatus: (state) => {
    state.isGrid = false
  },
}

const actions = {}

module.exports = {
  state,
  getters,
  mutations,
  actions,
}
