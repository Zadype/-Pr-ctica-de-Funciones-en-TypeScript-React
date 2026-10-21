import type { JSX } from 'react';

// Convierte grados Celsius a Fahrenheit.
export const celsiusAFahrenheit = (c: number): number => (c * 9 / 5) + 32;

// Convierte grados Fahrenheit a Celsius.
export const fahrenheitACelsius = (f: number): number => (f - 32) * 5 / 9;

// Presenta ambas conversiones con los valores solicitados.
export const ConversorTemperatura = (): JSX.Element => {
  const temperatura = 25;
  return (
    <section className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3>Conversor</h3>
      <p>{temperatura}°C = <strong>{celsiusAFahrenheit(temperatura)}°F</strong></p>
      <p>100°F = <strong>{fahrenheitACelsius(100).toFixed(2)}°C</strong></p>
    </section>
  );
};
