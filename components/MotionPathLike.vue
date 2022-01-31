<template>
  <div class="MotionPathLike">
    <svg viewBox="-10 -10 173 61">
      <path
        d="M153,20.89c0-45.88-74.95,0-74.95,0S.5,66.76.5,20.89s77.54,0,77.54,0S153,66.76,153,20.89Z"
        fill="none"
        stroke="#000"
        vector-effect="non-scaling-stroke"
        class="infinity"
      />
      <circle r="5" cx="0" cy="0" fill="purple" class="circle" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "MotionPathLike",

  mounted() {
    this.moveSircle();
  },

  methods: {
    moveSircle() {
      const path = document.querySelector(".infinity");
      const circle = document.querySelector(".circle");
      const val = { distance: 0 };
      gsap.to(val, {
        distance: path.getTotalLength(),
        repeat: -1,
        duration: 5,
        onUpdate: () => {
          const point = path.getPointAtLength(val.distance);
          circle.setAttribute("cx", point.x);
          circle.setAttribute("cy", point.y);
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.MotionPathLike {
  background: floralwhite;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  svg {
    overflow: visible;
    width: 100%;
    height: 100vh;
  }
}
</style>
