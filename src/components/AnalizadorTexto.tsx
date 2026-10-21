import type { JSX } from 'react';

// Cuenta palabras separadas por espacios; un texto vacío tiene cero palabras.
export const contarPalabras = (texto: string): number => {
  const limpio = texto.trim();
  return limpio === '' ? 0 : limpio.split(/\s+/).length;
};

// Cuenta vocales sin distinguir mayúsculas e incluye acentos y diéresis.
export const contarVocales = (texto: string): number =>
  (texto.normalize('NFC').match(/[aeiouáéíóúü]/gi) ?? []).length;

// Invierte los caracteres conservando los espacios del texto original.
export const invertirTexto = (texto: string): string => [...texto].reverse().join('');

// Muestra el análisis del texto indicado en la plantilla.
export const AnalizadorTexto = (): JSX.Element => {
  const texto = 'Hola mundo desde TypeScript';
  return (
    <section className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3>Analizador de Texto</h3>
      <p>Texto: &quot;{texto}&quot;</p>
      <p>Palabras: <strong>{contarPalabras(texto)}</strong></p>
      <p>Vocales: <strong>{contarVocales(texto)}</strong></p>
      <p className="break-words">Invertido: <strong>{invertirTexto(texto)}</strong></p>
    </section>
  );
};
