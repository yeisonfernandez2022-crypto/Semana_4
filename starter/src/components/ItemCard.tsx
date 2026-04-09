// ============================================
// COMPONENTE: ItemCard
// ============================================
// Muestra una tarjeta con la información de un servicio del SPA

import React from 'react';
import { Item } from '../types';

interface ItemCardProps {
  item: Item;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
}

/**
 * Tarjeta de servicio del SPA
 */
export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onDelete,
  onView,
}) => {
  return (
    <div className="item-card">

      {/* Nombre del servicio */}
      <h3>{item.name}</h3>

      {/* Terapeuta */}
      <p>Terapeuta: {item.therapist}</p>

      {/* Categoría */}
      <span className={`badge ${item.category}`}>
        {item.category}
      </span>

      {/* Duración */}
      <p>Duración: {item.duration} min</p>

      {/* Precio */}
      <p className="price">${item.price.toFixed(2)}</p>

      {/* Rating */}
      <p className="rating">⭐ {item.rating}</p>

      {/* Estado de disponibilidad */}
      {item.isAvailable ? (
        <span className="status available">✅ Disponible</span>
      ) : (
        <span className="status unavailable">❌ No disponible</span>
      )}

      {/* Acciones */}
      <div className="actions">
        {onView && (
          <button onClick={() => onView(item.id)}>
            Ver detalles
          </button>
        )}

        {onDelete && (
          <button onClick={() => onDelete(item.id)}>
            Eliminar
          </button>
        )}
      </div>

    </div>
  );
};