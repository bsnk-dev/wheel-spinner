<template>
  <div
    style="display: flex; width: 99vw; height: 100vh; flex-direction: column"
  >
    <div>
      {{ selectedName }}
    </div>
    <div>
      <input type="range" min="0" max="20" v-model="numberOfNamesRange" />
    </div>
    <div class="wheel-needle-container">
      <div class="wheel-container" ref="wheel" @click="spinWheel()">
        <div
          class="wedge"
          :class="wedgeColor()"
          :style="{
            transform: 'rotate(' + i * (360 / numberOfNames) + 'deg)',
            'border-top-width':
              (3.14 * (300 + circumferenceInset(numberOfNames))) /
                numberOfNames +
              'px',
            'border-bottom-width':
              (3.14 * (300 + circumferenceInset(numberOfNames))) /
                numberOfNames +
              'px',
          }"
          v-for="i of numberOfNames"
        >
          <div class="name">Name {{ i }}</div>
        </div>
      </div>
      <div class="needle" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      degrees: 0,
      numberOfNames: 11,
      numberOfNamesRange: 6,
      colorIndex: -1,
      selectedName: '',
    };
  },

  methods: {
    spinWheel() {
      const wheel = this.$refs.wheel;

      const randomDegrees = Math.floor(Math.random() * 1000 + 400);
      this.degrees += randomDegrees;

      wheel.style.transform = 'rotate(' + this.degrees + 'deg)';

      this.getSelectedName();
    },

    wedgeColor() {
      const colors = ['red', 'green', 'yellow', 'blue'];
      this.colorIndex++;
      if (this.colorIndex >= colors.length) this.colorIndex = 0;
      return colors[this.colorIndex];
    },

    circumferenceInset(numberOfNames) {
      return (
        [0, 0, 0, 200, 82, 47, 32, 22, 17, 14, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1][
          numberOfNames
        ] || 0
      );
    },

    getSelectedName() {
      let currentDegrees = this.degrees % 360;

      const degreeInterval = 360 / this.numberOfNames;
      const wedge = (360 - currentDegrees + 5) / degreeInterval;
      const index = Math.floor(wedge);

      this.selectedName = `Name ${index}`;
    },
  },

  watch: {
    numberOfNamesRange() {
      this.numberOfNames = Number(this.numberOfNamesRange);
    },
  },
};
</script>

<style>
.wheel-container {
  transform: rotate(0deg);
  transform-origin: center center;
  transition: transform 6s ease-out;
  align-items: center;
  height: 600px;
  width: 600px;
  border: solid 2px transparent;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
}

.wheel-needle-container {
  display: flex;
  margin: auto;
  width: 700px;
}

.needle {
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-right: 70px solid grey;
  border-bottom: 30px solid transparent;
  margin-top: auto;
  margin-left: -20px;
  z-index: 5;
  margin-bottom: auto;
}

.name {
  margin-left: 180px;
  margin-top: -10px;
  text-align: right;
  width: 100px;
}

.wedge {
  color: black;
  position: absolute;
  left: 50%;
  transform-origin: center left;
  width: 0;
  height: 0;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-style: solid;
  border-right-width: 300px;
  border-left: none;
}

.wedge.red {
  border-right-color: red;
}

.wedge.blue {
  border-right-color: blue;
}

.wedge.green {
  border-right-color: green;
}

.wedge.yellow {
  border-right-color: yellow;
}
</style>
