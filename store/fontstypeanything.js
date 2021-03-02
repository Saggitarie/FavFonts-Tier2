const { sampleSentence, alphabet, numerals, paragraph } = require('../data')

const state = () => ({
  typeInput: '',
  sampleText: '',
  sampleTextOption: 'Sentence',
})

const getters = {
  getSampleInput: (state) => state.typeInput,
  getSampleTextOption: (state) => state.sampleTextOption,
}

const mutations = {
  setTypeInput: (state, input) => {
    state.typeInput = input
  },
  setSampleTextOption: (state, option) => {
    state.sampleTextOption = option
  },
}

const actions = {
  setAppropriateSample: ({ commit }, payload) => {
    if (payload === 'Sentence') {
      commit('setTypeInput', sampleSentence)
    } else if (payload === 'Alphabet') {
      commit('setTypeInput', alphabet)
    } else if (payload === 'Paragraph') {
      commit('setTypeInput', paragraph)
    } else if (payload === 'Numerals') {
      commit('setTypeInput', numerals)
    } else {
      commit('setTypeInput', '')
    }
  },
}

module.exports = {
  state,
  getters,
  mutations,
  actions,
}
