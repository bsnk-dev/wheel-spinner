<template>
  <div id="app">
    {{ selectedName }}

    <wheel :names="['1', '2', '3']" @change="selectedName = $event" />
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
      selectedName: '',
    };
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
  margin-top: 60px;
}
</style>
