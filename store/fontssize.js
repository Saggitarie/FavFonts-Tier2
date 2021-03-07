const state = () => ({
  fontSize: '32',
})

const getters = {
  getFontSize: (state) => state.fontSize,
}

const mutations = {
  setFontSize: (state, fontSize) => {
    state.fontSize = fontSize
  },
}

const actions = {
  resetFontSize: ({ commit }, payload) => {
    commit('setFontSize', payload)
  },
}

module.exports = {
  state,
  getters,
  mutations,
  actions,
}
