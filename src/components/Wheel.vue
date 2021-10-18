<template>
  <div style="display: flex; flex-direction: column">
    <div class="wheel-needle-container">
      <div class="wheel-container" ref="wheel" @click="spinWheel()">
        <div
          class="wedge"
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
            'border-right-color': wedgeColor(),
          }"
          v-for="i of numberOfNames"
        >
          <div class="name">{{ names[i - 1] }}</div>
        </div>
      </div>
      <div class="needle">
        <div class="inner-needle" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpinnerWheel',

  data() {
    return {
      degrees: 0,
      numberOfNames: 10,
      colorIndex: -1,
      selectedName: '',
    };
  },

  props: {
    names: {
      type: Array,
      default: ['Name One', 'Two', 'Three', 'Four Five', 'Six'],
    },
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
      const colors = ['#59CD90', '#EE6352', '#3FA7D6', '#FAC05E', '#F79D84'];
      this.colorIndex++;
      if (this.colorIndex >= colors.length) this.colorIndex = 0;
      return colors[this.colorIndex];
    },

    /**
     * Adds the correct pixel value to the circle circumference calculation for each wedge so that
     * it can actually fit its place in the circle
     */
    circumferenceInset(numberOfNames) {
      // This is a bunch of magical numbers that fix the triangles width so they actually fit their area in the circle.
      return (
        [
          0, 0, 0, 200, 82, 47, 32, 22, 17, 14, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2,
          1,
        ][numberOfNames] || 0
      );
    },

    getSelectedName() {
      let currentDegrees = this.degrees % 360;

      const degreeInterval = 360 / this.numberOfNames;
      const wedge =
        (360 - currentDegrees + degreeInterval * 0.4) / degreeInterval;
      let index = Math.floor(wedge);
      index--;

      if (index === -1) index = this.names.length - 1;

      this.selectedName = this.names[index];
    },
  },

  mounted() {
    this.numberOfNames = this.names.length;
  },

  watch: {
    selectedName() {
      this.$emit('change', this.selectedName);
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
  border-right: 70px solid lightgrey;
  border-bottom: 30px solid transparent;
  margin-top: auto;
  margin-left: -20px;
  z-index: 5;
  margin-bottom: auto;
  display: flex;
}

.inner-needle {
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-right: 56px solid white;
  border-bottom: 25px solid transparent;
  z-index: 10;
  margin-top: -25px;
  margin-left: 10px;
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
