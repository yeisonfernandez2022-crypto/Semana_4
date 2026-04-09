// ============================================
// COMPONENTE: Catalog (Principal)
// ============================================
// Orquesta todos los componentes del catálogo

import React, { useState, useMemo } from 'react';
import { Item, Category, SortOption } from '../types';
import { items as initialItems } from '../data/items';
import { useDebounce } from '../hooks/useDebounce';
import { SearchBar } from './SearchBar';
import { FilterPanel } from './FilterPanel';
import { SortSelector } from './SortSelector';
import { ItemList } from './ItemList';

/**
 * Componente principal del catálogo
 */
export const Catalog: React.FC = () => {

  // ============================================
  // ESTADOS
  // ============================================

  const [items, setItems] = useState<Item[]>(initialItems);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // ============================================
  // PROCESAMIENTO DE DATOS
  // ============================================

  const processedItems = useMemo(() => {
    let result = [...items];

    // 1️⃣ Búsqueda
    if (debouncedSearchTerm) {
      const term = debouncedSearchTerm.toLowerCase();
      result = result.filter((item) =>
        item.name.toLowerCase().includes(term) ||
        item.therapist.toLowerCase().includes(term)
      );
    }

    // 2️⃣ Filtro por categoría
    if (selectedCategory !== 'all') {
      result = result.filter(
        (item) => item.category === selectedCategory
      );
    }

    // 3️⃣ Solo disponibles
    if (showOnlyAvailable) {
      result = result.filter((item) => item.isAvailable);
    }

    // 4️⃣ Ordenamiento
    switch (sortBy) {
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;

      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;

      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [items, debouncedSearchTerm, selectedCategory, showOnlyAvailable, sortBy]);

  // ============================================
  // HANDLERS
  // ============================================

  const handleDelete = (id: number): void => {
    if (window.confirm('¿Estás seguro de eliminar este servicio?')) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleView = (id: number): void => {
    const item = items.find((i) => i.id === id);
    if (item) {
      alert(`Servicio: ${item.name}\nTerapeuta: ${item.therapist}\nDuración: ${item.duration} min`);
    }
  };

  const clearFilters = (): void => {
    setSearchTerm('');
    setSelectedCategory('all');
    setShowOnlyAvailable(false);
    setSortBy('name-asc');
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="catalog">

      <header className="catalog-header">
        <h1>💆‍♀️ Catálogo de Servicios del Spa</h1>
      </header>

      {/* Búsqueda */}
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Buscar servicios o terapeutas..."
      />

      {/* Filtros */}
      <div className="controls">
        <FilterPanel
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          showOnlyAvailable={showOnlyAvailable}
          onAvailableChange={setShowOnlyAvailable}
          onClearFilters={clearFilters}
        />

        <SortSelector
          value={sortBy}
          onChange={setSortBy}
        />
      </div>

      {/* Contador */}
      <p className="results-count">
        Mostrando {processedItems.length} de {items.length} servicios
        {debouncedSearchTerm && ` para "${debouncedSearchTerm}"`}
      </p>

      {/* Lista */}
      <ItemList
        items={processedItems}
        isLoading={isLoading}
        error={error}
        onDelete={handleDelete}
        onView={handleView}
        onClearFilters={clearFilters}
      />

    </div>
  );
};

export default Catalog;