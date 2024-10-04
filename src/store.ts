import { create } from "zustand";
import { CryptoCurrency, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { fetchCurrencyCryptoPrice, getCryptos } from "./services/CryptoService";
type CryptoStore = {
  cryptocurrencies: CryptoCurrency[]
  fetchCryptos: () => Promise<void>
  fetchData: (pair: Pair) => Promise<void>
}

export const useCriptoStore = create<CryptoStore>()(
  devtools<CryptoStore>(
    (set) => ({
      cryptocurrencies: [],
      fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
          cryptocurrencies
        }))
      },
      fetchData: async (pair) => {
        fetchCurrencyCryptoPrice(pair)
      }
    }),
  ),
)
