import type { JSX } from 'react';

// Construye una contraseña de práctica con los grupos de caracteres habilitados.
// Math.random() sigue la plantilla: no se usa para contraseñas reales.
export const generarPassword = (
  longitud: number, incluirNumeros: boolean, incluirSimbolos: boolean,
): string => {
  const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = '0123456789';
  const simbolos = '!@#$%^&*()_+';

  if (!Number.isInteger(longitud) || longitud <= 0) return '';
  const grupos: string[] = [letras];
  if (incluirNumeros) grupos.push(numeros);
  if (incluirSimbolos) grupos.push(simbolos);

  // No se puede representar cada grupo si hay menos posiciones que grupos.
  if (longitud < grupos.length) return '';
  const caracteres = grupos.join('');
  let password = '';

  // Reserva un carácter por grupo para garantizar las categorías solicitadas.
  for (const grupo of grupos) {
    password += grupo[Math.floor(Math.random() * grupo.length)];
  }
  for (let i = password.length; i < longitud; i++) {
    password += caracteres[Math.floor(Math.random() * caracteres.length)];
  }

  // Mezcla las posiciones para que los grupos no aparezcan siempre en orden.
  const mezcla = password.split('');
  for (let i = mezcla.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mezcla[i], mezcla[j]] = [mezcla[j], mezcla[i]];
  }
  return mezcla.join('');
};

// Muestra los tres formatos de contraseña requeridos por el ejercicio.
export const GeneradorPassword = (): JSX.Element => (
  <section className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h3>Generador de Contraseñas</h3>
    <p>Básica (8): <strong className="break-all font-mono">{generarPassword(8, false, false)}</strong></p>
    <p>Media (12): <strong className="break-all font-mono">{generarPassword(12, true, false)}</strong></p>
    <p>Fuerte (16): <strong className="break-all font-mono">{generarPassword(16, true, true)}</strong></p>
  </section>
);
