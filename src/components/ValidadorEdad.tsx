import type { JSX } from 'react';

// Verifica si una edad finita alcanza los 18 años.
export const esMayorDeEdad = (edad: number): boolean => Number.isFinite(edad) && edad >= 18;

// Reutiliza la validación y calcula los años restantes para la mayoría de edad.
export const obtenerMensaje = (edad: number): string => {
  if (!Number.isFinite(edad) || edad < 0) return 'Edad inválida';
  return esMayorDeEdad(edad) ? 'Puede votar' : `Le faltan ${18 - edad} años`;
};

// Recorre las edades y muestra el mensaje de cada una.
export const ValidadorEdad = (): JSX.Element => {
  const edades = [15, 18, 25, 12];
  return (
    <section className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3>Validador de Edad</h3>
      
      {/* Convierte cada edad en un párrafo con una key estable. */}
      {edades.map((edad: number, i: number): JSX.Element => (
        <p key={`${edad}-${i}`}>Edad {edad}: <strong>{obtenerMensaje(edad)}</strong></p>
      ))}
    </section>
  );
};
