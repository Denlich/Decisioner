import { create } from "zustand";

interface PollQuery {
  searchText?: string;
}

interface PollQueryStore {
  pollQuery: PollQuery;
  setSearchText: (searchText: string) => void;
}

const usePollQueryStore = create<PollQueryStore>((set) => ({
  pollQuery: {},
  setSearchText: (searchText) => set(() => ({ pollQuery: { searchText } })),
}));

export default usePollQueryStore;
