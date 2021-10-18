<template>
  <div id="app">
    <div class="wheel-name-container">
      <wheel :names="names(10)" @change="selectedName = $event" />
      <div>
        <h1 class="hover:rotate-90">{{ selectedName }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Wheel from './components/Wheel.vue';

export default {
  name: 'App',
  components: {
    Wheel,
  },

  data() {
    return {
      selectedName: 'Click to spin',
    };
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  width: 99vw;
  height: 100vh;
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
