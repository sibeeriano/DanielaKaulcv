# Daniela Belén Kaul - Landing Page

Landing page profesional construida con **Next.js 16**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.

## Características

- **Next.js App Router** - Arquitectura moderna con Server y Client Components
- **Componentes modulares** - Navbar, Hero, Profile, Timeline, Education, Skills, Contact
- **Animaciones dinámicas** - Framer Motion para transiciones y efectos al scroll
- **Datos centralizados** - Archivo `src/data/cv.ts` para fácil actualización del contenido
- **Responsive** - Diseño adaptable a móvil, tablet y desktop
- **SEO optimizado** - Metadata y estructura semántica

## Cómo ejecutar

```bash
# Instalar dependencias (si no está hecho)
npm install

# Modo desarrollo
npm run dev

# Build de producción
npm run build

# Ejecutar producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx    # Layout principal y fuentes
│   ├── page.tsx      # Página principal
│   └── globals.css   # Estilos globales y tema
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Profile.tsx
│   ├── SectionHeader.tsx
│   ├── Timeline.tsx
│   ├── Education.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
└── data/
    └── cv.ts         # Datos del CV (editar aquí para actualizar contenido)
```

## Actualizar contenido

Edita el archivo `src/data/cv.ts` para modificar la información mostrada en la landing.
