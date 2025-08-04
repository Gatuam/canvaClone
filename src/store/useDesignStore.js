import { create } from "zustand";
const useDesignStore = create((set) => ({
  designInfo: {},
  addDesignInfo: (newDesign) =>
    set(() => ({
      designInfo: newDesign,
    })),
}));
export default useDesignStore;
