# 🦑 Pokédex

Aplicación web desarrollada con **Angular 15** que consume la [PokéAPI](https://pokeapi.co/) para visualizar una colección dinámica de Pokémons. Este proyecto utiliza una arquitectura modular clásica con **NgModules**, optimizada para el rendimiento y la experiencia de usuario.

Este proyecto se desarrolló para implementar y reforzar:

- **Arquitectura Modular:** Uso de `AppModule` y sub-módulos para una organización clara.
- **Consumo de APIs REST:** Integración de `HttpClient` con el operador `forkJoin` para carga masiva de datos.
- **Programación Reactiva:** Gestión de estados (loading y datos) mediante `BehaviorSubject` y `Observables` con **RxJS**.
- **UI Moderna:** Diseño basado en **Bootstrap 5** con animaciones personalizadas de escalado y opacidad.
- **Transformación de Datos:** Creación de `Pipes` personalizados para manipulación de strings y lógica de imágenes.

## 📸 Demo

🔗 **Visita la demo en línea:** [Pokedex en Netlify](https://celebrated-snickerdoodle-249346.netlify.app)

- **Pantalla principal**
  ![Pokedex](https://raw.githubusercontent.com/david99cartagena/pokedex-app/refs/heads/main/media/Screenshot_1.png)
- **Ver Pokémon**
  ![Pokedex](https://raw.githubusercontent.com/david99cartagena/pokedex-app/refs/heads/main/media/Screenshot_2.png)
- **Botón Refresh**
  ![Pokedex](https://raw.githubusercontent.com/david99cartagena/pokedex-app/refs/heads/main/media/Screenshot_3.png)
- **Validación de ID** - Existente
  ![Pokedex](https://raw.githubusercontent.com/david99cartagena/pokedex-app/refs/heads/main/media/Screenshot_4.png)
- **Validación de ID** - No Existente
  ![Pokedex](https://raw.githubusercontent.com/david99cartagena/pokedex-app/refs/heads/main/media/Screenshot_5.png)

## 🚀 Tecnologías Utilizadas

- **Angular 15** (NgModules & CommonModule)
- **TypeScript / RxJS** (Gestión de flujos asíncronos)
- **Bootstrap 5** (Layout responsive y componentes UI)
- **HTML5 / CSS3** (Animaciones `@keyframes` y transiciones de estado)
- **PokéAPI** (RESTful API de terceros)

## 📁 Estructura del Proyecto

```
src/app/
├── components/          # Componentes de UI reutilizables
│   ├── loader/          # Spinner de carga con animación fadeIn
│   └── pokemon-detail/  # Modal de detalle con animación scaleIn
├── pages/               # Componentes de vista (Páginas)
│   └── pokemon-list/    # Grid principal y lógica de navegación
├── models/              # Interfaces de TypeScript (Pokemon Model)
├── services/            # Lógica de negocio
│   ├── pokemon.service.ts            # Comunicación con PokéAPI
│   └── pokemon-type-color.service.ts # Gestión de estilos por tipo
├── pipes/               # Transformadores de datos
│   ├── capitalize.pipe.ts            # Formateo de texto (PascalCase)
│   └── pokemon-image.pipe.ts         # Selección de imagen óptima
├── app-routing.module.ts # Configuración de rutas de la aplicación
└── app.module.ts        # Declaraciones y configuraciones globales
```

## 🔑 Funcionalidades

- 🔄 **Carga Aleatoria:** Genera una lista de 30 IDs únicos en cada refresco para descubrir nuevos Pokémon.
- 📍 **Ruteo Avanzado:** Soporte para rutas dinámicas `/pokemon/:id` que abren automáticamente el detalle del Pokémon.
- 🖼️ **Priorización de Arte:** Pipe inteligente que busca el _Official Artwork_ de alta calidad antes de recurrir al sprite básico.
- 🎨 **Tematización por Tipos:** Servicio que mapea dinámicamente los tipos (Fire, Water, etc.) a clases visuales de Bootstrap.
- 📱 **Diseño Adaptativo:** Interfaz optimizada para móviles con scroll interno en modales de información.
- ⏳ **Feedback de Carga:** Sistema de Loader centralizado que notifica al usuario durante las peticiones externas.

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/david99cartagena/pokedex-app.git
```

```bash
cd pokedex-app
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor local:

```bash
npm start
```

```bash
ng serve
```

La aplicación estará disponible en: `http://localhost:4200/`
