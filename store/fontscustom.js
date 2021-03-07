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

const actions = {
  resetSettings({ dispatch }) {
    // dispatch('fontsapi/fetchTrendingFonts', { root: true })
    dispatch('fontssearch/resetSearchInput', '', { root: true })
    dispatch('fontssize/resetFontSize', '32', { root: true })
  },
}

module.exports = {
  state,
  getters,
  mutations,
  actions,
}
