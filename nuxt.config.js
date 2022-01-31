const path = require("path");
import { resolve } from "path";
const webpack = require("webpack");

export default {
  alias: {
    "~": resolve(__dirname, "./"),
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "snowflake",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/base/_reset.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      // globals
      new webpack.ProvidePlugin({
        gsap: ["gsap", "gsap"],
        _get: ["lodash/get"],
        $propTypes: [
          path.resolve(__dirname, "../assets/js/modules/PropTypes/index.js"),
          "default",
        ],
      }),
    ],
  },
};
