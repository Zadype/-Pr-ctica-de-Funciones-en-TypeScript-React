import type { JSX } from 'react';

// Aplica un callback de descuento y devuelve el precio final sin valores negativos.
export const aplicarDescuento = (
  precio: number, calcularDescuento: (precio: number) => number,
): number => {
  if (!Number.isFinite(precio) || precio < 0) return 0;
  const descuento = calcularDescuento(precio);
  if (!Number.isFinite(descuento)) return precio;
  return precio - Math.min(precio, Math.max(0, descuento));
};

// Retorna el diez por ciento del precio.
export const descuento10 = (p: number): number => p * 0.10;

// Retorna el veinticinco por ciento del precio.
export const descuento25 = (p: number): number => p * 0.25;

// Retorna el quince por ciento del precio para estudiantes.
export const descuentoEstudiante = (p: number): number => p * 0.15;

// Muestra cómo cambia el resultado al pasar diferentes callbacks.
export const AplicadorDescuentos = (): JSX.Element => {
  const precio = 1000;
  return (
    <section className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3>Aplicador de Descuentos</h3>
      <p>Precio original: ${precio}</p>
      <p>Con 10% off: <strong>${aplicarDescuento(precio, descuento10)}</strong></p>
      <p>Con 25% off: <strong>${aplicarDescuento(precio, descuento25)}</strong></p>
      <p>Descuento estudiante: <strong>${aplicarDescuento(precio, descuentoEstudiante)}</strong></p>
    </section>
  );
};
