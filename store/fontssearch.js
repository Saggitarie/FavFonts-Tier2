const state = () => ({
  searchResult: [],
})

const getters = {
  getSearchResult: (state) => state.searchResult,
  getTenFonts: (state) => {
    // console.log(state.searchResult.items)
    // if (state.searchResult.items.length > 0) {
    const firstTenArr = state.searchResult.slice(0, 10)
    return firstTenArr
    // }
  },
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
