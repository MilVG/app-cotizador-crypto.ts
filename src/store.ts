import { create } from "zustand";

export const useCriptoStore = create(() => ({
  fetchCryptos: () => {
    console.log(" desde fetchCryptos")
  }
}))
