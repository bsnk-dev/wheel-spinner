import { createStore } from 'vuex'

export default createStore({
  state: {
    names: [],
    autoHideNames: false,
    hiddenNames: [],
    developerOverride: false,
    developerOverrideNameCount: 16,
    speechRecognition: false,
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
    speechRecognition(state) {
      return state.speechRecognition;
    }
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
    },
    setSpeechRecognition(state, speechRecognition) {
      state.speechRecognition = speechRecognition;
    }
  },
  actions: {
    hideName({ state, commit }, payload) {
      commit('setHiddenNames', state.hiddenNames.concat([payload.name]));
    },

    saveState({ state }) {
      localStorage.setItem('settings', JSON.stringify(state));
    },

    loadState({ commit, dispatch }) {
      try {
        const previousState = JSON.parse(localStorage.getItem('settings'));

        commit('setNames', previousState.names);
        commit('setHiddenNames', previousState.hiddenNames);
        commit('setAutoHideNames', previousState.autoHideNames);
        commit('setDeveloperOverride', previousState.developerOverride);
        commit('setDeveloperOverrideNameCount', previousState.developerOverrideNameCount);
      } catch(e) {
        dispatch('saveState');
      }
    }
  },
  modules: {
  }
})
