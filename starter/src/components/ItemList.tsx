// ============================================
// COMPONENTE: ItemList
// ============================================
// Renderiza la lista de elementos

import React from 'react';
import { Item } from '../types';
import { ItemCard } from './ItemCard';
import { EmptyState } from './EmptyState';

interface ItemListProps {
  items: Item[];
  isLoading?: boolean;
  error?: string | null;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
  onClearFilters?: () => void;
}

/**
 * Lista de elementos del catálogo
 */
export const ItemList: React.FC<ItemListProps> = ({
  items,
  isLoading = false,
  error = null,
  onDelete,
  onView,
  onClearFilters,
}) => {

  // 1️⃣ Si está cargando
  if (isLoading) {
    return <div className="loading">Cargando servicios del spa...</div>;
  }

  // 2️⃣ Si hay error
  if (error) {
    return (
      <div className="error">
        <p>❌ {error}</p>
      </div>
    );
  }

  // 3️⃣ Si no hay resultados
  if (items.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} />;
  }

  // 4️⃣ Renderizar lista con .map()
  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard
          key={item.id}   // key única
          item={item}
          onDelete={onDelete}
          onView={onView}
        />
      ))}
    </div>
  );
};