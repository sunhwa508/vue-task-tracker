import Chart from "chart.js";
export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
  },
};

// App.vue
//new this.$_Chart(); 생성할 수 있게 된다.
