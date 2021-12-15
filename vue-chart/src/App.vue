<template>
  <div>
    <canvas id="myChart" ref="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
// import Chart from "chart.js";
import Chart, { ChartTypeRegistry } from "chart.js/auto";
import { MyVueRefs } from "./types";
interface IConfig {
  type: keyof ChartTypeRegistry;
  data: {
    labels: string[];
    datasets: {
      label: string;
      backgroundColor: string;
      borderColor: string;
      data: number[];
    }[];
  };
  options: Record<string, unknown>;
}

// export default (
//   Vue as VueConstructor<Vue & { $refs: { myChart: HTMLCanvasElement } }>
// ).extend({
export default (Vue as MyVueRefs<{ myChart: HTMLCanvasElement }>).extend({
  methods: {
    sayHi() {
      this.$refs.myChart;
      const canvasElement = this.$refs.myChart;
    },
  },
  mounted() {
    const canvasElement = this.$refs.myChart;

    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };
    const config: IConfig = {
      type: "line",
      data: data,
      options: {},
    };
    const myChart = new Chart(
      document.getElementById("myChart") as HTMLCanvasElement,
      config
    );
  },
});
</script>

<style scoped></style>
