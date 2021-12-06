import { CommitOptions, DispatchOptions, Store } from "vuex";
import { Actions } from "./actions";
import { Mutations } from "./mutations";
import { RootState } from "./state";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};
// Omit => "commit"을 제외한 타입을 다 가져 오겠다.
// commit 에 대해서는 프로젝트 내에서 재정의 하기 위해
// commit -> MyMutations 로 재정의 해준다.
export type MyStore = Omit<Store<RootState>, "commit" | "dispatch"> &
  MyMutations &
  MyActions;
