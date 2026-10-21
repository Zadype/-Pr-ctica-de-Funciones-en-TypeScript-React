import type { JSX } from 'react';

// Retorna la suma de dos números.
export const sumar = (a: number, b: number): number => a + b;

// Retorna la diferencia de dos números.
export const restar = (a: number, b: number): number => a - b;

// Retorna el producto de dos números.
export const multiplicar = (a: number, b: number): number => a * b;

// Divide dos números; devuelve cero si el divisor es cero.
export const dividir = (a: number, b: number): number => b === 0 ? 0 : a / b;

// Muestra las cuatro operaciones con los valores de la plantilla.
export const Calculadora = (): JSX.Element => {
  const a = 15;
  const b = 4;
  return (
    <section className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3>Calculadora</h3>
      <p>{a} + {b} = <strong>{sumar(a, b)}</strong></p>
      <p>{a} - {b} = <strong>{restar(a, b)}</strong></p>
      <p>{a} × {b} = <strong>{multiplicar(a, b)}</strong></p>
      <p>{a} ÷ {b} = <strong>{dividir(a, b).toFixed(2)}</strong></p>
    </section>
  );
};
