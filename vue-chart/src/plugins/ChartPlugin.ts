import Chart from "chart.js";
import { VueConstructor } from "vue";

export default {
  install(Vue: VueConstructor): void {
    Vue.prototype.$_Chart = Chart;
  },
};

// App.vue
// new this.$_Chart(); 생성할 수 있게 된다.
