// ============================================
// DATOS MOCK
// ============================================
// Dominio: Centro de SPA

import { Item } from '../types';

// Servicios del SPA
export const items: Item[] = [
  {
    id: 1,
    name: 'Masaje Relajante',
    therapist: 'Ana Martínez',
    category: 'masajes',
    price: 80000,
    rating: 4.7,
    isAvailable: true,
    duration: 60,
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'Masaje Descontracturante',
    therapist: 'Carlos Gómez',
    category: 'masajes',
    price: 95000,
    rating: 4.8,
    isAvailable: true,
    duration: 60,
    createdAt: '2024-02-20',
  },
  {
    id: 3,
    name: 'Limpieza Facial Profunda',
    therapist: 'Laura Rodríguez',
    category: 'facial',
    price: 70000,
    rating: 4.5,
    isAvailable: false,
    duration: 50,
    createdAt: '2024-01-10',
  },
  {
    id: 4,
    name: 'Tratamiento Corporal Detox',
    therapist: 'Sofía Torres',
    category: 'corporal',
    price: 120000,
    rating: 4.9,
    isAvailable: true,
    duration: 90,
    createdAt: '2024-03-05',
  },
  {
    id: 5,
    name: 'Aromaterapia',
    therapist: 'Miguel Herrera',
    category: 'aromaterapia',
    price: 85000,
    rating: 4.6,
    isAvailable: true,
    duration: 60,
    createdAt: '2024-02-15',
  },
  {
    id: 6,
    name: 'Masaje con Piedras Calientes',
    therapist: 'Ana Martínez',
    category: 'masajes',
    price: 110000,
    rating: 4.8,
    isAvailable: false,
    duration: 80,
    createdAt: '2024-01-25',
  },
  {
    id: 7,
    name: 'Exfoliación Corporal',
    therapist: 'Laura Rodríguez',
    category: 'corporal',
    price: 65000,
    rating: 4.2,
    isAvailable: true,
    duration: 45,
    createdAt: '2024-03-10',
  },
  {
    id: 8,
    name: 'Hidratación Facial',
    therapist: 'Sofía Torres',
    category: 'facial',
    price: 75000,
    rating: 4.4,
    isAvailable: true,
    duration: 50,
    createdAt: '2024-02-28',
  },
];

// Categorías con etiquetas
export const categories = [
  { value: 'all', label: 'Todos los servicios' },
  { value: 'masajes', label: '💆 Masajes' },
  { value: 'facial', label: '🧴 Tratamientos Faciales' },
  { value: 'corporal', label: '🛀 Tratamientos Corporales' },
  { value: 'aromaterapia', label: '🌿 Aromaterapia' },
];

// Opciones de ordenamiento
export const sortOptions = [
  { value: 'name-asc', label: 'Nombre (A-Z)' },
  { value: 'name-desc', label: 'Nombre (Z-A)' },
  { value: 'price-asc', label: 'Precio (menor a mayor)' },
  { value: 'price-desc', label: 'Precio (mayor a menor)' },
  { value: 'rating', label: 'Mejor valorados' },
];