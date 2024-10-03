import { create } from "zustand";
import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "./schema/crypto-schema";
import { CryptoCurrency } from "./types";
import { devtools } from "zustand/middleware";
type CryptoStore = {
  cryptocurrencies: CryptoCurrency[]
  fetchCryptos: () => Promise<void>
}

async function getCryptos() {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
  const { data: { Data } } = await axios(url)
  const result = CryptoCurrenciesResponseSchema.safeParse(Data)
  if (result.success) {
    return result.data
  }

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
