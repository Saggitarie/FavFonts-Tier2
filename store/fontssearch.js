const state = () => ({
  searchResult: [],
})

const getters = {
  getSearchResult: (state) => state.searchResult,
}

const mutations = {
  setSearchResult: (state, fontList) => {
    state.fontSize = fontList
  },
}

const actions = {}

module.exports = {
  state,
  getters,
  mutations,
  actions,
}
