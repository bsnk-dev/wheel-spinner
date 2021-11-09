<template>
  <div id="app flex-column">
    <div class="flex w-screen-99">
      <div class="ml-auto p-4">
        <Settings />
      </div>
    </div>
    <div class="flex h-full w-screen-99">
      <div class="wheel-name-container sm:ml-20 lg:ml-10">
        <wheel
          :names="devOverride ? names(devNameCount) : storedNames"
          @change="selectedName = $event; spinning = true"
          @doneSpinning="hideName(selectedName); selectedName += '!'; spinning = false;"
          ref="wheel"
        />
        <div>
          <h1 class="font-sans text-2xl font-bold">{{ (!spinning) ? 'Click to spin' : 'Spinning...' }}</h1>
        </div>
      </div>
    </div>
    <name-celebration-overlay :name="selectedName" v-if="selectedName != '' && !spinning" @dismissed="selectedName = ''"/>
  </div>
</template>

<script>
import Wheel from './components/Wheel.vue';
import Settings from './components/SettingsPane.vue';
import NameCelebrationOverlay from './components/NameCelebrationOverlay.vue';
import 'voice-commands.js';

export default {
  name: 'App',
  components: {
    Wheel,
    Settings,
    NameCelebrationOverlay,
  },

  data() {
    return {
      selectedName: '',
      spinning: false,
    };
  },

  computed: {
    devOverride() {
      return this.$store.getters.developerOverride;
    },
    devNameCount() {
      return this.$store.getters.developerOverrideNameCount;
    },
    storedNames() {
      let names = this.$store.getters.names;

      names = (names.length) ? names : ['1', '2', '3'];
      return names.filter((n) => !this.hiddenNames.includes(n));
    },
    hiddenNames() {
      return this.$store.getters.hiddenNames;
    }
  },

  methods: {
    names(num) {
      const names = [];

      for (let i = 1; i <= num; i++) {
        names.push(i);
      }

      return names;
    },

    hideName(name) {
      if (this.$store.state.autoHideNames) {
        this.$store.dispatch('hideName', {name});
        this.$store.dispatch('saveState');
      }
    },

    voiceCommands() {
      window.SPEECH.addVoiceCommands([
        {
            command: "spin the wheel",
            callback: () => {
                this.$refs.wheel.spinWheel();
            },
            min_confidence: .3
        },
        {
            command: "wheel of names",
            callback: () => {
                this.$refs.wheel.spinWheel();
                this.$refs.wheel.spinWheel();
            },
            min_confidence: .3
        },
      ]);

      window.SPEECH.onResult((result) => {
        this.$refs.wheel.speechRecognitionToSelectedNameAnalysisHandler(result.transcript);
      });

      window.SPEECH.start({
          min_confidence: .3,
          lang: 'en-US'
      });
    },
  },

  mounted() {
    this.$store.dispatch('loadState');
    try { this.voiceCommands(); } catch(e) { alert(e.stack) }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  font-family: 'Inter', sans-serif;
}

body {
  background: rgb(221, 221, 255);
  background: linear-gradient(
    90deg,
    rgba(221, 221, 255, 1) 0%,
    rgba(204, 232, 255, 1) 100%
  );
}

.wheel-name-container {
  display: flex;
  margin: auto;
  align-items: center;
  min-width: 700px;
}

.w-screen-99 {
  width: 99vw;
}
</style>
