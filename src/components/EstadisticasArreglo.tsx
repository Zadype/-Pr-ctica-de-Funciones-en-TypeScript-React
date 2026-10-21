import type { JSX } from 'react';

// Calcula el promedio usando reduce; devuelve cero si el arreglo está vacío.
export const calcularPromedio = (nums: number[]): number => {
  if (nums.length === 0) return 0;
  return nums.reduce((suma: number, numero: number): number => suma + numero, 0) / nums.length;
};

// Obtiene el mayor valor; devuelve cero si no hay elementos.
export const encontrarMaximo = (nums: number[]): number => nums.length === 0 ? 0 : Math.max(...nums);

// Obtiene el menor valor; devuelve cero si no hay elementos.
export const encontrarMinimo = (nums: number[]): number => nums.length === 0 ? 0 : Math.min(...nums);

// Presenta el promedio y los extremos del arreglo original.
export const EstadisticasArreglo = (): JSX.Element => {
  const numeros = [8, 3, 15, 7, 22, 11, 4];
  return (
    <section className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3>Estadísticas</h3>
      <p>Números: [{numeros.join(', ')}]</p>
      <p>Promedio: <strong>{calcularPromedio(numeros).toFixed(2)}</strong></p>
      <p>Máximo: <strong>{encontrarMaximo(numeros)}</strong></p>
      <p>Mínimo: <strong>{encontrarMinimo(numeros)}</strong></p>
    </section>
  );
};
