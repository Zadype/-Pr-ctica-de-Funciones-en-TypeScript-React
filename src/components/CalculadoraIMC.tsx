import type { JSX } from 'react';

// Calcula el IMC; retorna cero cuando peso o altura no son válidos.
export const calcularIMC = (peso: number, altura: number): number => {
  if (!Number.isFinite(peso) || !Number.isFinite(altura) || peso <= 0 || altura <= 0) return 0;
  return peso / (altura * altura);
};

// Clasifica el IMC según los intervalos indicados en la actividad.
export const clasificarIMC = (imc: number): string => {
  if (!Number.isFinite(imc) || imc <= 0) return 'Datos inválidos';
  if (imc < 18.5) return 'Bajo peso';
  if (imc < 25) return 'Normal';
  if (imc < 30) return 'Sobrepeso';
  return 'Obesidad';
};

// Muestra el IMC y su clasificación sin redondear antes de clasificar.
export const CalculadoraIMC = (): JSX.Element => {
  const peso = 70;
  const altura = 1.75;
  const imc = calcularIMC(peso, altura);
  return (
    <section className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3>Calculadora de IMC</h3>
      <p>Peso: {peso} kg | Altura: {altura} m</p>
      <p>IMC: <strong>{imc.toFixed(2)}</strong></p>
      <p>Clasificación: <strong>{clasificarIMC(imc)}</strong></p>
    </section>
  );
};
