import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Button } from "./components/Button";
import { formatearDinero, calcularTotalPagar, calcularPagosMensuales } from "./utils";

function App() {

  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(calcularTotalPagar(cantidad, meses));
  const [pagoMensual, setPagoMensual] = useState(calcularPagosMensuales(total, meses));

  useEffect(() => {
    const nuevoTotal = calcularTotalPagar(cantidad, meses);
    setTotal(nuevoTotal);
    setPagoMensual(calcularPagosMensuales(nuevoTotal, meses));
  }, [cantidad, meses]); // No incluyas "total" aquí



  const MIN = 0
  const MAX = 20000
  const STEP = 100

  function handleChange(e) {
    setCantidad(Number(e.target.value))
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP;

    if (valor < MIN) {
      return
    }

    setCantidad(valor)
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP;

    if (valor > MAX) {
      return
    }

    setCantidad(valor)
  }

  return (
    <div className="my-2 max-w-lg mx-auto bg-white shadow p-10">
      <Header />


      <div className="flex justify-between my-6">
        <Button operador="-" fn={handleClickDecremento} />
        <Button operador="+" fn={handleClickIncremento} />
      </div>

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Plazo</span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={meses}
        onChange={e => setMeses(Number(e.target.value))}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de pagos</span>
        </h2>
      </div>

      <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses</p>
      <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(total)} Total a pagar</p>
      <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(pagoMensual)} Mensuales</p>

    </div>
  )
}

export default App
