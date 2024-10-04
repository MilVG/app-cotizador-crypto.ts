import { create } from "zustand";
import { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { fetchCurrencyCryptoPrice, getCryptos } from "./services/CryptoService";
type CryptoStore = {
  cryptocurrencies: CryptoCurrency[]
  result: CryptoPrice
  fetchCryptos: () => Promise<void>
  fetchData: (pair: Pair) => Promise<void>
}

export const useCriptoStore = create<CryptoStore>()(
  devtools<CryptoStore>(
    (set) => ({
      cryptocurrencies: [],
      result: {} as CryptoPrice,
      fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
          cryptocurrencies
        }))
      },
      fetchData: async (pair) => {
        const result = await fetchCurrencyCryptoPrice(pair)
        set(() => ({
          result
        }))

      }
    }),
  ),
)
