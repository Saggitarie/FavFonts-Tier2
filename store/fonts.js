const state = () => ({
  searchResult: [],
  fontSize: '40',
})

const getters = {
  allSearchResult: (state) => state.searchResult,
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
