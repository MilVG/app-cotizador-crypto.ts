import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCriptoStore } from "./store"

function App() {

  const fetchCryptos = useCriptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, [])
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>CriptoMonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm />
        </div>
      </div>
    </>
  )
}

export default App
