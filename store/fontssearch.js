const state = () => ({
  searchResult: [],
  searchInput: '',
})

const getters = {
  getSearchResult: (state) => state.searchResult,
  getTenFonts: (state) => {
    const firstTenArr = state.searchResult.slice(0, 10)
    return firstTenArr
  },
  getMatchFonts: (state) => {
    const target = state.searchInput.toLowerCase()

    if (!target) return state.searchResult

    const matchArr = state.searchResult.filter((str) => {
      return str.family.toLowerCase().startsWith(target)
    })

    return matchArr
  },
}

const mutations = {
  setSearchResult: (state, fontList) => {
    state.searchResult = fontList
  },
  setSearchInput: (state, input) => {
    state.searchInput = input
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
