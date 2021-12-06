import Vue from "vue";
import Vuex, { Store, StoreOptions } from "vuex";
import getters from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { RootState, state } from "./state";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state,
  mutations,
  actions,
};

export default new Vuex.Store(store);

// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== "production",
//   state: {
//     news: [],
//     ask: [],
//     jobs: [],
//     user: {},
//     item: {},
//     list: [],
//   },
//   getters,
//   mutations,
//   actions,
// });
