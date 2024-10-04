import { useMemo } from "react"
import { useCriptoStore } from "../store"

export default function CryptoPriceDisplay() {

  const result = useCriptoStore((state) => state.result)
  const comprobarResult = useMemo(() => Object.keys(result).length > 0, [result])

  return (
    <div>
      {comprobarResult && (
        <>
          <h2>Cotizador</h2>
          <div className="result">
            <div>
              <p>El precio es de: <span>{result.PRICE}</span></p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

