const state = () => ({
  searchResult: [],
})

const getters = {
  getSearchResult: (state) => state.searchResult,
}

const mutations = {
  setSearchResult: (state, fontList) => {
    state.searchResult = fontList
  },
}

const actions = {
  setSearchList({ commit }, payload) {
    // console.log('Reached Inside FontsSearch', payload)
    commit('setSearchResult', payload)
  },
}

module.exports = {
  state,
  getters,
  mutations,
  actions,
}
