import { user } from "./index-instance.js";

export function fetchUser(id: string) {
  return user.get(id);
}
