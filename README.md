# 🧖‍♀️ Catálogo de Servicios de SPA

Aplicación web desarrollada con **React + TypeScript + Vite** que permite visualizar un catálogo de servicios de un centro de SPA, con funcionalidades de **búsqueda, filtrado y ordenamiento**.

---

## 📌 Descripción del proyecto

Este proyecto simula el catálogo de servicios de un centro de bienestar o SPA.
Permite al usuario explorar diferentes servicios como masajes, tratamientos faciales y corporales.

La aplicación permite:

* 🔎 Buscar servicios por nombre
* 🗂 Filtrar por categoría
* ✔ Mostrar solo servicios disponibles
* 🔽 Ordenar por nombre, precio o valoración
* 📦 Visualizar los servicios en tarjetas
* ❌ Eliminar elementos del catálogo

---

## 🚀 Tecnologías utilizadas

* **React**
* **TypeScript**
* **Vite**
* **CSS**
* **Hooks de React**
* **useMemo**
* **Custom Hooks (useDebounce)**

---

## 📂 Estructura del proyecto

```
src
 ├── components
 │   ├── Catalog.tsx
 │   ├── ItemCard.tsx
 │   ├── ItemList.tsx
 │   ├── SearchBar.tsx
 │   ├── FilterPanel.tsx
 │   ├── SortSelector.tsx
 │   └── EmptyState.tsx
 │
 ├── data
 │   └── items.ts
 │
 ├── hooks
 │   └── useDebounce.ts
 │
 ├── types
 │   └── index.ts
 │
 ├── App.tsx
 ├── App.css
 └── main.tsx
```

---

## ⚙️ Instalación del proyecto

1️⃣ Clonar el repositorio

```
git clone <url-del-repositorio>
```

2️⃣ Entrar al proyecto

```
cd nombre-del-proyecto
```

3️⃣ Instalar dependencias

```
pnpm install
```

o

```
npm install
```

4️⃣ Ejecutar el proyecto

```
pnpm dev
```

o

```
npm run dev
```

---

## 🧠 Funcionalidades implementadas

* Búsqueda con **debounce**
* Filtrado por **categoría**
* Filtrado por **disponibilidad**
* Ordenamiento por:

  * nombre
  * precio
  * rating
* Manejo de **estado vacío**
* Manejo de **errores**
* Renderizado eficiente con **useMemo**

---

## 💰 Formato de precios

Los precios se muestran en **Pesos Colombianos (COP)** usando:

```
Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP"
})
```

---

## 👨‍💻 Autor

Proyecto desarrollado por:

**Yeison Fernández**

Estudiante de **Tecnólogo en Desarrollo de Software – SENA**

