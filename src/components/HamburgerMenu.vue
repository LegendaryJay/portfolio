<template>
  <div
    :class="{
      'hamburger-icon': true,
      'icon--open': isOpen,
      'icon--closed': !isOpen,
    }"
    :style="hamburgerStyle"
  >
    <span
      :class="{
        'hamburger-line': true,
        one: true,
        'step-1': shouldShowStep(1),
        'step-2': shouldShowStep(2),
        'step-3': shouldShowStep(3),
      }"
    ></span>
    <span
      :class="{
        'hamburger-line': true,
        two: true,
        'step-1': shouldShowStep(1),
        'step-2': shouldShowStep(2),
        'step-3': shouldShowStep(3),
      }"
    ></span>
    <span
      :class="{
        'hamburger-line': true,
        three: true,
        'step-1': shouldShowStep(1),
        'step-2': shouldShowStep(2),
        'step-3': shouldShowStep(3),
      }"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu',
  props: {
    isOpen: {
      type: Boolean,
      default: false, // Default state of the menu
    },
    size: {
      type: Number,
      default: 24,
    },
    thickness: {
      type: Number,
      default: 2,
    },
    transitionTime: {
      type: Number,
      default: 0.2,
    },
  },
  data() {
    return {
      currentStep: 2,
    };
  },
  computed: {
    hamburgerStyle() {
      return {
        '--size': `${this.size}px`,
        '--thickness': `${this.thickness}px`,
        '--transition-time': `${this.transitionTime}s`,
      };
    },
  },
  watch: {
    isOpen(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.animateHamburger();
      }
    },
  },
  mounted() {
    this.animateHamburger();
  },
  methods: {
    animateHamburger() {
      const steps = 3;
      const stepDuration = this.transitionTime / (steps - 1.0);

      const timer = setInterval(() => {
        this.currentStep = this.isOpen
          ? this.currentStep + 1
          : this.currentStep - 1;
        if (
          (this.isOpen && this.currentStep == steps) ||
          (!this.isOpen && this.currentStep == 1)
        ) {
          clearInterval(timer);
        } else if (this.currentStep < 1) {
          this.currentStep = 1;
          clearInterval(timer);
        }
      }, stepDuration * 1000);
    },
    shouldShowStep(step) {
      return step == this.currentStep;
    },
  },
};
</script>

<style lang="scss" scoped>
.hamburger-icon {
  width: var(--size);
  height: var(--size);
  position: relative;
}

.hamburger-line {
  display: block;
  width: var(--size);
  height: var(--thickness);
  background-color: white;
  position: absolute;
  transition: var(--transition-time) ease-in-out;
}
.hamburger-line {
  &.step-2 {
    top: calc(var(--size) * 0.5 - var(--thickness) * 0.5);
    transform: rotate(0deg);
    scale: 1;
  }
  &.step-3 {
    top: calc(var(--size) * 0.5 - var(--thickness) * 0.5);
  }

  &.one {
    &.step-1 {
      top: calc(var(--size) * 0.25 - var(--thickness) * 0.25);
      transform: rotate(0deg);
    }

    &.step-3 {
      transform: rotate(45deg);
    }
  }
  &.two {
    &.step-1 {
      top: calc(var(--size) * 0.5 - var(--thickness) * 0.5);
      transform: rotate(0deg);
      scale: 1;
    }

    &.step-3 {
      transform: rotate(45deg);
      scale: 0;
    }
  }
  &.three {
    &.step-1 {
      top: calc(var(--size) * 0.75 - var(--thickness) * 0.75);
      transform: rotate(0deg);
    }
    &.step-3 {
      transform: rotate(135deg);
    }
  }
}
</style>
