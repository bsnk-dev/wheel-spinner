import { createStore } from 'vuex'

export default createStore({
  state: {
    names: [],
    autoHideNames: false,
    hiddenNames: [],
    developerOverride: false,
    developerOverrideNameCount: 16,
  },
  getters: {
    names(state) {
      return state.names;
    },
    autoHideNames(state) {
      return state.autoHideNames;
    },
    hiddenNames(state) {
      return state.hiddenNames;
    },
    developerOverride(state) {
      return state.developerOverride;
    },
    developerOverrideNameCount(state) {
      return state.developerOverrideNameCount;
    },
  },
  mutations: {
    setNames(state, newNames) {
      state.names = newNames;
    },
    setAutoHideNames(state, autoHide) {
      state.autoHideNames = autoHide;
    },
    setHiddenNames(state, newHiddenNames) {
      state.hiddenNames = newHiddenNames;
    },
    setDeveloperOverride(state, developerOverride) {
      state.developerOverride = developerOverride;
    },
    setDeveloperOverrideNameCount(state, developerOverrideNameCount) {
      state.developerOverrideNameCount = developerOverrideNameCount;
    }
  },
  actions: {
    hideName({ state, commit }, payload) {
      commit('setHiddenNames', state.hiddenNames.concat([payload.name]));
    }
  },
  modules: {
  }
})
