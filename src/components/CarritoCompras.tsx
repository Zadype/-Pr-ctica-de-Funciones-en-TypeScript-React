import type { JSX } from 'react';

interface ProductoCarrito { producto: string; precio: number; cantidad: number; }

// Multiplica precio por cantidad; rechaza valores negativos o no finitos.
export const calcularSubtotal = (precio: number, cantidad: number): number => {
  if (!Number.isFinite(precio) || !Number.isFinite(cantidad) || precio < 0 || cantidad < 0) return 0;
  return precio * cantidad;
};

// Calcula el IVA del 16 por ciento sobre un subtotal válido.
export const calcularIVA = (subtotal: number): number =>
  Number.isFinite(subtotal) && subtotal >= 0 ? subtotal * 0.16 : 0;

// Suma el subtotal válido y su IVA.
export const calcularTotal = (subtotal: number): number =>
  Number.isFinite(subtotal) && subtotal >= 0 ? subtotal + calcularIVA(subtotal) : 0;

// Convierte un precio a texto con signo de pesos y dos decimales.
export const formatearPrecio = (precio: number): string => `$${precio.toFixed(2)}`;

// Acumula el subtotal y muestra los productos, el IVA y el total.
export const CarritoCompras = (): JSX.Element => {
  const carrito: ProductoCarrito[] = [
    { producto: 'Laptop', precio: 15000, cantidad: 1 },
    { producto: 'Mouse', precio: 350, cantidad: 2 },
    { producto: 'Teclado', precio: 800, cantidad: 1 },
  ];
  // Acumula el subtotal de cada producto con reduce.
  
  const subtotal = carrito.reduce(
    (acc: number, item: ProductoCarrito): number => acc + calcularSubtotal(item.precio, item.cantidad), 0,
  );
  return (
    <section className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3>Carrito de Compras</h3>
      {/* Convierte cada producto en una línea con su subtotal. */}
      {carrito.map((item: ProductoCarrito): JSX.Element => (
        <p key={item.producto}>{item.producto} x{item.cantidad} = <strong>{formatearPrecio(calcularSubtotal(item.precio, item.cantidad))}</strong></p>
      ))}
      <hr className="my-4 border-slate-200" />
      <p>Subtotal: {formatearPrecio(subtotal)}</p>
      <p>IVA (16%): {formatearPrecio(calcularIVA(subtotal))}</p>
      <p className="rounded-lg bg-indigo-50 px-3 py-2"><strong>Total: {formatearPrecio(calcularTotal(subtotal))}</strong></p>
    </section>
  );
};
