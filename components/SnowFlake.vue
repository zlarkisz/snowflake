<template>
  <div ref="container" id="container" />
</template>

<script>
export default {
  name: "SnowFlake",

  mounted() {
    this.startSnowing();
  },

  computed: {
    h() {
      return window.innerHeight;
    },
    w() {
      return window.innerWidth;
    },
  },

  methods: {
    startSnowing() {
      const falling = true;
      const total = 50;
      const container = this.$refs.container;
      const w = window.innerWidth,
        h = window.innerHeight;
      const tl = gsap.timeline();

      tl.set("#container", { perspective: 500 });
      tl.set("img", { xPercent: "-50%", yPercent: "-50%" });

      for (let i = 0; i < total; i++) {
        let Div = document.createElement("div");

        tl.set(Div, {
          attr: { class: "snow" },
          x: this.R(0, w),
          y: this.R(-200, -150),
          z: this.R(-200, 200),
        });
        container.appendChild(Div);
        this.anim(Div);
      }
    },
    R(min, max) {
      return min + Math.random() * (max - min);
    },
    anim(el) {
      const tl = gsap.timeline();

      tl.to(el, this.R(6, 15), {
        y: this.h + 100,
        ease: "none",
        repeat: -1,
        delay: -15,
      });

      tl.to(el, this.R(4, 8), {
        x: "+=100",
        rotationZ: this.R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      tl.to(el, this.R(2, 8), {
        rotationX: this.R(0, 360),
        rotationY: this.R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: -5,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
html,
body,
#container {
  width: 100vw;
  height: 100vh;
  background-color: #111;
  overflow: hidden;
  padding: 0;

  .snow {
    width: 5px;
    height: 5px;
    position: absolute;
    background-color: white;
    background-size: 100% 100%;
  }
}
#container {
  .snow {
    width: 5px;
    height: 5px;
    position: absolute;
    background-color: white;
    background-size: 100% 100%;
  }
}
</style>
