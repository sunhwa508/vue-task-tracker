<template>
  <div>
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import Chart from "chart.js";
import Chart, { ChartTypeRegistry } from "chart.js/auto";

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
export default Vue.extend({
  mounted() {
    const labels = ["January", "February", "March", "April", "May", "June"];
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
