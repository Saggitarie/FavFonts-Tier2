const state = () => ({
  fontSize: '40',
})

const getters = {
  getFontSize: (state) => state.fontSize,
}

const mutations = {
  setFontSize: (state, fontSize) => {
    state.fontSize = fontSize
  },
}

const actions = {}

module.exports = {
  state,
  getters,
  mutations,
  actions,
}
