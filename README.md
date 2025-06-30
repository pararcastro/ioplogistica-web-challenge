# Dragon Ball Character Explorer 🐉

Una aplicación web del universo Dragon Ball, desarrollada con React, TypeScript y Vite.

## 🚀 Características

- **Exploración de personajes**: Navega por una amplia colección de personajes de Dragon Ball
- **Búsqueda inteligente**: Encuentra personajes específicos con búsqueda en tiempo real
- **Sistema de favoritos**: Guarda tus personajes favoritos
- **Responsive design**: Optimizada para dispositivos móviles y desktop
- **Navegación**: React Router

## 🛠️ Stack Tecnológico

- **Frontend**: React 19.1.0 + TypeScript
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router 7.6.2
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint
- **API**: [Dragon Ball API](https://web.dragonball-api.com/) 

## 📦 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/pararcastro/ioplogistica-web-challenge.git
```
1.1 Crear un archivo *.env* en la carpeta raíz del proyecto con este contenido:
```bash
VITE_API_BASE_URL=https://dragonball-api.com/api
```


2. **Instalar dependencias**
```bash
cd ioplogistica-web-challenge
```
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
    [localhost](http://localhost:5173)


### Scripts disponibles

```bash
npm run dev          # Ejecuta la aplicación en modo desarrollo
npm run build        # Genera build de producción
npm run preview      # Previsualiza el build de producción
npm run lint         # Ejecuta ESLinT
```


## 🧪 Testing

La aplicación incluye una suite completa de tests:

### Tipos de tests implementados
- **Unit tests**: Componentes individuales
- **Integration tests**: Flujos completos de usuario
- **Hook tests**: Custom hooks con timers
- **API tests**: Mocking de servicios externos

### Ejecutar tests
```bash
npm run test        # Modo watch
npm run test:run    # Ejecución única
npm run test:ui     # Interfaz visual