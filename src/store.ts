import { create } from "zustand";
import { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { fetchCurrencyCryptoPrice, getCryptos } from "./services/CryptoService";
type CryptoStore = {
  cryptocurrencies: CryptoCurrency[]
  result: CryptoPrice
  loading: boolean
  fetchCryptos: () => Promise<void>
  fetchData: (pair: Pair) => Promise<void>
}

export const useCriptoStore = create<CryptoStore>()(
  devtools<CryptoStore>(
    (set) => ({
      cryptocurrencies: [],
      result: {} as CryptoPrice,
      loading: false,
      fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
          cryptocurrencies
        }))
      },
      fetchData: async (pair) => {
        set(() => ({
          loading: true
        }))

        const result = await fetchCurrencyCryptoPrice(pair)
        set(() => ({
          result,
          loading: false
        }))

      }
    }),
  ),
)
