const state = () => ({
  fontList: [],
  searchResult: [],
  fontSize: '40',
})

const getters = {
  allFonts: (state) => state.fontList,
  allSearchResult: (state) => state.searchResult,
  getFontSize: (state) => state.fontSize,
}

const mutations = {
  setFonts: (state, fonts) => {
    state.fontList = fonts
  },
}

const actions = {
  async fetchAllFonts({ commit }) {
    const res = await this.$axios.$get(
      `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${process.env.GOOGLE_FONTS_API_KEY}`
    )

    commit('setFonts', res)
  },
}

module.exports = {
  state,
  getters,
  mutations,
  actions,
}
