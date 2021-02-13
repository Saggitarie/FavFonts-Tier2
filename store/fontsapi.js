const state = () => ({
  fontList: [],
})

const getters = {
  getAllFonts: (state) => state.fontList,
}

const mutations = {
  setFonts: (state, fonts) => {
    state.fontList = fonts
  },
}

const actions = {
  async fetchTrendingFonts({ commit, dispatch }) {
    const res = await this.$axios.$get(
      `https://www.googleapis.com/webfonts/v1/webfonts?sort=trending&key=${process.env.GOOGLE_FONTS_API_KEY}`
    )

    // console.log('Response Reuslt', res.items)

    commit('setFonts', res.items)
    dispatch('fontssearch/setSearchList', res.items, { root: true })
  },
  async fetchPopularFonts({ commit }) {
    const res = await this.$axios.$get(
      `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${process.env.GOOGLE_FONTS_API_KEY}`
    )

    commit('setFonts', res)
  },
  async fetchRecentFonts({ commit }) {
    const res = await this.$axios.$get(
      `https://www.googleapis.com/webfonts/v1/webfonts?sort=date&key=${process.env.GOOGLE_FONTS_API_KEY}`
    )

    commit('setFonts', res)
  },
  async fetchInAscendingOrderFonts({ commit }) {
    const res = await this.$axios.$get(
      `https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=${process.env.GOOGLE_FONTS_API_KEY}`
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
