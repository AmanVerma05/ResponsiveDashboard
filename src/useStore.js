import create from 'zustand';

const useStore = create((set) => ({
  checkButton: false,
  setCheckButton: (check) => set({ checkButton: check }),
}));

export default useStore;