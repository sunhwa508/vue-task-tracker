import { NewsItem } from "@/api";
import { RootState } from "./state";

enum MutationTypes {
  SET_NEWS = "SET_NEWS",
  SET_ASK = "SET_ASK",
  SET_JOBS = "SET_JOBS",
  SET_USER = "SET_USER",
  SET_ITEM = "SET_ITEM",
  SET_LIST = "SET_LIST",
}

const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]): void {
    state.news = news;
  },
};

type Mutations = typeof mutations;

export { mutations, Mutations, MutationTypes };

// export default {
//   SET_NEWS(state, news) {
//     state.news = news;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
// };
