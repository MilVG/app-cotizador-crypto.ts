import { useMemo } from "react"
import { useCriptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {

  const result = useCriptoStore((state) => state.result)

  const loading = useCriptoStore((state) => state.loading)
  const comprobarResult = useMemo(() => Object.keys(result).length > 0, [result])

  return (
    <div className="result-wrapper">
      {loading ? <Spinner /> : comprobarResult && (
        <>
          <h2>Cotizador</h2>
          <div className="result">
            <img
              src={`https://cryptocompare.com/${result.IMAGEURL}`}
              alt="Imagen Cryptomoneda"
            />
            <div>
              <p>El precio es de: <span>{result.PRICE}</span></p>
              <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
              <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
              <p>Variación ultimas 24 Horas: <span>{result.CHANGEPCT24HOUR}</span></p>
              <p>Última Actualización: <span>{result.LASTUPDATE}</span></p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

