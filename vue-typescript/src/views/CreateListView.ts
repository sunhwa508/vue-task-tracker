import ListView from "./ListView.vue";
import bus from "../utils/bus";
import { CreateElement } from "vue";
import { VNode } from "vue/types/umd";

interface ICreateListView {
  name: string;
  mounted(): void;
  render(h: CreateElement): VNode;
}

export default function createListView(name: string): ICreateListView {
  return {
    name,
    mounted() {
      bus.$emit("off:progress");
    },
    render(h: CreateElement) {
      return h(ListView);
    },
  };
}
