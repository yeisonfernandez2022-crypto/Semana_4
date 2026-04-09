// ============================================
// TIPOS E INTERFACES
// ============================================
// Dominio: Centro de SPA (Servicios de masajes y estética)

// Entidad principal: Servicio del SPA
export interface Item {
  id: number;

  // Nombre del servicio
  name: string;

  // Terapeuta que realiza el servicio
  therapist: string;

  // Categoría del servicio (masaje, facial, etc)
  category: Category;

  // Precio del servicio
  price: number;

  // Calificación del servicio
  rating: number;

  // Si el servicio está disponible
  isAvailable: boolean;

  // Duración del servicio en minutos
  duration: number;

  // Fecha de creación
  createdAt: string;
}

// Categorías del SPA
export type Category =
  | 'all'
  | 'masajes'
  | 'facial'
  | 'corporal'
  | 'aromaterapia';

// Opciones de ordenamiento
export type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'rating';

// Estado de los filtros
export interface FilterState {
  searchTerm: string;
  category: Category;
  showOnlyAvailable: boolean;
  sortBy: SortOption;
  minPrice?: number;
  maxPrice?: number;
}