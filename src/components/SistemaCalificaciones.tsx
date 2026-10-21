import type { JSX } from 'react';

interface Alumno { nombre: string; califs: number[]; }

// Suma las calificaciones y divide entre su cantidad; vacío devuelve cero.
export const calcularPromedio = (calificaciones: number[]): number => {
  if (calificaciones.length === 0) return 0;
  return calificaciones.reduce((suma: number, nota: number): number => suma + nota, 0) / calificaciones.length;
};

// Asigna la letra evaluando los límites de mayor a menor.
export const obtenerLetra = (promedio: number): string => {
  if (promedio >= 90) return 'A';
  if (promedio >= 80) return 'B';
  if (promedio >= 70) return 'C';
  if (promedio >= 60) return 'D';
  return 'F';
};

// Indica si el promedio alcanza el mínimo de aprobación.
export const estaAprobado = (promedio: number): boolean => promedio >= 70;

// Recorre los alumnos y presenta promedio, letra y estado.
export const SistemaCalificaciones = (): JSX.Element => {
  const alumnos: Alumno[] = [
    { nombre: 'Ana', califs: [95, 88, 92] },
    { nombre: 'Luis', califs: [70, 65, 72] },
    { nombre: 'María', califs: [85, 90, 88] },
  ];
  return (
    <section className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3>Sistema de Calificaciones</h3>
      
      {/* Calcula los resultados antes de crear el párrafo de cada alumno. */}
      {alumnos.map((alumno: Alumno): JSX.Element => {
        const promedio = calcularPromedio(alumno.califs);
        const letra = obtenerLetra(promedio);
        const estado = estaAprobado(promedio) ? 'Aprobado' : 'Reprobado';
        return <p key={alumno.nombre}><strong>{alumno.nombre}:</strong> Promedio {promedio.toFixed(1)} - Letra {letra} - <strong>{estado}</strong></p>;
      })}
    </section>
  );
};
