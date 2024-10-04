import { ChangeEvent, useState } from "react"
import { currencies } from "../data"
import { useCriptoStore } from "../store"
import { Pair } from "../types"
export default function CriptoSearchForm() {

  const CryptoCurrency = useCriptoStore((state) => state.cryptocurrencies)

  const [pair, setPair] = useState<Pair>({
    currency: '',
    criptocurrency: ''
  })

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })

  }
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency"> Moneda: </label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">--Selecione --</option>
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select
          name="criptocurrency"
          id="criptocurrency"
          onChange={handleChange}
          value={pair.criptocurrency}
        >
          <option value="">--Selecione --</option>
          {CryptoCurrency.map(crypto => (
            <option
              key={crypto.CoinInfo.FullName}
              value={crypto.CoinInfo.Name}
            >{crypto.CoinInfo.FullName}</option>
          ))}
        </select>
      </div>

      <input type="submit" value='Cotizar' />

    </form>
  )
}


