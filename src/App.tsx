import type { JSX } from 'react';

import { Calculadora } from './components/Calculadora';
import { ConversorTemperatura } from './components/ConversorTemperatura';
import { CalculadoraIMC } from './components/CalculadoraIMC';
import { ValidadorEdad } from './components/ValidadorEdad';
import { AnalizadorTexto } from './components/AnalizadorTexto';
import { EstadisticasArreglo } from './components/EstadisticasArreglo';
import { GeneradorPassword } from './components/GeneradorPassword';
import { AplicadorDescuentos } from './components/AplicadorDescuentos';
import { SistemaCalificaciones } from './components/SistemaCalificaciones';
import { CarritoCompras } from './components/CarritoCompras';

// Muestra el encabezado y los diez ejercicios.
export const App = (): JSX.Element => (
  <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
    <header className="mb-8 flex min-h-53 flex-col items-center justify-center gap-4 p-7 text-center text-slate-900 sm:p-9">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Práctica de funciones
      </h1>

      <h2 className="text-lg font-medium text-slate-700">
        Jonathan Hilario Peña Pozos
      </h2>
    </header>

    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      <Calculadora />
      <ConversorTemperatura />
      <CalculadoraIMC />
      <ValidadorEdad />
      <AnalizadorTexto />
      <EstadisticasArreglo />
      <GeneradorPassword />
      <AplicadorDescuentos />
      <SistemaCalificaciones />
      <CarritoCompras />
    </div>
  </main>
);

export default App;