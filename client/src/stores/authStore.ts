import { create } from "zustand";
import tokenStore from "./tokenStore";

interface AuthState {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const authStore = create<AuthState>((set) => ({
  isAuthenticated: !!localStorage.getItem("token"),
  login: (token) => {
    set({ isAuthenticated: true });
    tokenStore.getState().setToken(token);
  },
  logout: () => {
    set({ isAuthenticated: false });
    tokenStore.getState().logout();
  },
}));

export default authStore;
