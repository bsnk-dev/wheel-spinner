<template>
  <div style="display: flex; flex-direction: column">
    <div class="wheel-needle-container">
      <div class="wheel-container" ref="wheel" @click="spinWheel()" @transitionend="$emit('doneSpinning'); this.speechRecognitionMutex = false;">
        <div
          :class="{
            wedge: numberOfNames > 2,
            square: numberOfNames <= 2,
            single: numberOfNames == 1 
          }"
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
            'border-color': (numberOfNames <= 2) ? wedgeColor(i) : 'transparent',
            'border-right-color': wedgeColor(i),
          }"
          v-for="i of numberOfNames"
          :key="i"
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
      selectedName: '',
      speechRecognitionMutex: false,
    };
  },

  props: {
    names: {
      type: Array,
      default: () => ['Name One', 'Two', 'Three', 'Four Five', 'Six'],
    },
  },

  computed: {
    numberOfNames() {
      return this.names.length;
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

    wedgeColor(index) {
      const colors = ['#59CD90', '#EE6352', '#3FA7D6', '#FAC05E', '#F79D84'];
      return colors[((index - 1) % colors.length) || 0];
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

    calculateSelectedName(degrees) {
      let currentDegrees = degrees % 360;

      const degreeInterval = 360 / this.numberOfNames;
      const wedge =
        (360 - currentDegrees + (degreeInterval * 0.3)) / degreeInterval;
      let index = Math.floor(wedge);
      index--;

      if (index === -1) index = this.names.length - 1;

      return index;
    },

    getSelectedName() {
      const index = this.calculateSelectedName(this.degrees);

      this.selectedName = this.names[index];
      this.$emit('change', this.selectedName);
    },

    reverseIndex(index, length) {
      return Math.abs(index - (length - 1));
    },

    setSelectedName(expectedName) {
      if (this.speechRecognitionMutex) return;
      this.speechRecognitionMutex = true;

      const degreeInterval = 360 / this.numberOfNames;
      let currentNameIndex = this.reverseIndex(this.calculateSelectedName(this.degrees), this.names.length);

      let expectedNameIndex;

      for (const [index, name] of Object.entries(this.names)) {
        if (name == expectedName) {
          expectedNameIndex = this.reverseIndex(Number(index), this.names.length);
        }
      }

      let expectedNameIndexIncrease = expectedNameIndex - currentNameIndex;
      if (expectedNameIndex < currentNameIndex) {
        expectedNameIndexIncrease += this.names.length - 1;
      } else {
        currentNameIndex++;
      }

      console.table({
        expectedNameIndexIncrease,
        expectedNameIndex,
        currentNameIndex,
        currentName: this.names[currentNameIndex]
      })

      this.degrees += degreeInterval * expectedNameIndexIncrease;
      this.selectedName = expectedName;
      this.$emit('change', this.selectedName);
      this.$refs.wheel.style.transform = 'rotate(' + this.degrees + 'deg)';
    },

    speechRecognitionToSelectedNameAnalysisHandler(text) {
      for (const name of this.names) {
        if (name.toString().toLowerCase().trim() == text.toString().toLowerCase().trim()) {
          try {
            this.setSelectedName(name);
          } catch(e) {
            this.speechRecognitionMutex = false;
          }
        }
      }
    }
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

.square {
  color: black;
  position: absolute;
  left: 50%;
  transform-origin: center left;
  width: 100%;
  height: 100%;
  border-style: solid;
}

.square.single {
  padding-left: 10%;
  left: 0%;
}
</style>
