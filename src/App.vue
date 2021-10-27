<template>
  <div id="app flex-column">
    <div class="flex w-screen">
      <div class="ml-auto p-4">
        <Settings />
      </div>
    </div>
    <div class="wheel-name-container">
      <wheel
        :names="devOverride ? names(devNameCount) : storedNames"
        @change="selectedName = $event; $store.dispatch('hideName', {name: $event})"
      />
      <div>
        <h1 class="font-sans text-2xl font-bold">{{ selectedName }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Wheel from './components/Wheel.vue';
import Settings from './components/SettingsPane.vue';

export default {
  name: 'App',
  components: {
    Wheel,
    Settings,
  },

  data() {
    return {
      selectedName: 'Click to spin',
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
      const names = this.$store.getters.names;

      return (names.length) ? names : ['1', '2', '3'];
    },
  },

  methods: {
    names(num) {
      const names = [];

      for (let i = 1; i < num; i++) {
        names.push(i);
      }

      return names;
    },
  },
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
  width: 99vw;
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
  margin-left: 15vw;
  align-items: center;
  min-width: 700px;
}
</style>
