import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { User } from "../models/UserModel";

type State = { users: User[]; isLoading: boolean; };

const initialState: State = {
  users: [],
  isLoading: false
};

export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(({ users, ...store }) => ({
    setUsers() {
      patchState(store, { users: users() });
    }
  })),
);