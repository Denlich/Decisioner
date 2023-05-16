import { create } from "zustand";

interface TokenState {
  token: string | null;
  setToken: (newToken: string | null) => void;
  logout: () => void;
}

const tokenStore = create<TokenState>((set) => ({
  token: null,
  setToken: (newToken) => {
    localStorage.setItem("token", newToken || "");
    set({ token: newToken });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));

export default tokenStore;
