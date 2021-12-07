import { NewsItem } from "@/api";
import { RootState } from "./state";

export const getters = {
  fetchedNews(state: RootState): NewsItem[] {
    return state.news;
  },
};

export type Getters = typeof getters;

// export default {
//   fetchedItem(state: any) {
//     return state.item;
//   },
//   fetchedUser(state: any) {
//     return state.user;
//   },
//   fetchedList(state: any) {
//     return state.list;
//   },
//   // ItemView
//   userName(state: any) {
//     return state.item.user;
//   },
//   userContent(state: any) {
//     return state.item.content;
//   },
//   userQuestion(state: any) {
//     return state.item.title;
//   },
//   userTimeAgo(state: any) {
//     return state.item.time_ago;
//   },
//   contentPoints(state: any) {
//     return state.item.points;
//   },
// };
