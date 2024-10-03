import { create } from "zustand";
import { CryptoCurrency } from "./types";
import { devtools } from "zustand/middleware";
import { getCryptos } from "./services/CryptoService";
type CryptoStore = {
  cryptocurrencies: CryptoCurrency[]
  fetchCryptos: () => Promise<void>
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
    }),
  ),
)
