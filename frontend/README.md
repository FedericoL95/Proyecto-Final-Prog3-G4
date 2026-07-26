# Proyecto Final

# Integrantes

## Grupo N° 4

- Nikolas Ramos  
- Ramiro Olea  
- Ivo Castiglia  
- Gino Marigioli  
- Federico Luengo  
- Andrés Emiliano Rossi  

---

## Nombre del Proyecto

Frontend para Sistema de Biblioteca Personal

---

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de una interfaz web en React para interactuar con la API REST del backend del sistema de biblioteca personal. Permite a los usuarios autenticarse, visualizar y gestionar libros, consultar géneros, ver su perfil y navegar por la aplicación de forma intuitiva.

---

## Repositorio

https://github.com/FedericoL95/Proyecto-Final-Prog3-G4

---

## Tecnologías Utilizadas

- React  
- React Router DOM  
- Axios  
- React Hook Form  
- React Hot Toast  
- CSS personalizado  
- Docker  
- Git & GitHub  

---

## Distribución de Carpetas y Archivos

```bash
📦 frontend
 ┣ 📂 public
 ┃ ┣ 📜 biblioteca.html
 ┃ ┣ 📜 FAQ.html
 ┃ ┣ 📜 index.html
 ┃ ┗ 📜 perfil.html
 ┣ 📂 src
 ┃ ┣ 📜 App.css
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.css
 ┃ ┣ 📜 index.js
 ┃ ┣ 📂 assets
 ┃ ┃ ┣ 📂 icons
 ┃ ┃ ┗ 📂 images
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 common
 ┃ ┃ ┃ ┣ 📜 Button.jsx
 ┃ ┃ ┃ ┣ 📜 Input.jsx
 ┃ ┃ ┃ ┗ 📜 Modal.jsx
 ┃ ┃ ┣ 📂 layout
 ┃ ┃ ┃ ┣ 📂 CSS
 ┃ ┃ ┃ ┃ ┣ 📜 Footer.css
 ┃ ┃ ┃ ┃ ┗ 📜 Header.css
 ┃ ┃ ┃ ┣ 📜 Footer.jsx
 ┃ ┃ ┃ ┣ 📜 Header.jsx
 ┃ ┃ ┃ ┗ 📜 layout.jsx
 ┃ ┃ ┗ 📂 ui
 ┃ ┃ ┃ ┣ 📜 Avatar.jsx
 ┃ ┃ ┃ ┣ 📜 Badge.jsx
 ┃ ┃ ┃ ┗ 📜 Card.jsx
 ┃ ┣ 📂 hooks
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Biblioteca.jsx
 ┃ ┃ ┣ 📜 FAQ.jsx
 ┃ ┃ ┣ 📜 Login.jsx
 ┃ ┃ ┗ 📜 Perfil.jsx
 ┃ ┣ 📂 services
 ┃ ┃ ┣ 📜 api.js
 ┃ ┃ ┣ 📜 authservice.js
 ┃ ┃ ┣ 📜 generoservice.js
 ┃ ┃ ┗ 📜 libroservice.js
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ 📜 buttons.css
 ┃ ┃ ┣ 📜 cards.css
 ┃ ┃ ┣ 📜 forms.css
 ┃ ┃ ┣ 📜 general.css
 ┃ ┃ ┣ 📜 globals.css
 ┃ ┃ ┣ 📜 layout.css
 ┃ ┃ ┣ 📜 navbar.css
 ┃ ┃ ┣ 📜 perfil.css
 ┃ ┃ ┗ 📜 tables.css
 ┃ ┗ 📂 utils
 ┃ ┃ ┣ 📜 CalculoProgreso.js
 ┃ ┃ ┣ 📜 FiltrarLibros.js
 ┃ ┃ ┣ 📜 FormatDate.js
 ┃ ┃ ┣ 📜 OrdenarLibros.js
 ┃ ┃ ┣ 📜 StorageUtils.js
 ┃ ┃ ┗ 📜 ValidarDatosLibro.js
```

---

## División de tareas

```bash
| Integrante           | Tareas        |

| Nikolas Ramos        | Pages         |
| Ramiro Olea          | Servicios     |
| Ivo Castiglia        | Styles        |
| Gino Marigioli       | Utils         |
| Federico Luengo      | Documentación |
| Andrés Emiliano Rossi| Componentes   |
```

---

## Metodología de Trabajo con Git y GitHub

El proyecto fue desarrollado utilizando ramas de Git para organizar el trabajo colaborativo.

## Ramas utilizadas

- main  
- dev  
- ramas individuales por integrante  

## Flujo de trabajo

- Crear rama desde dev  
- Realizar cambios  
- Hacer commits descriptivos  
- Subir cambios al repositorio  
- Crear Pull Request  
- Realizar merge hacia dev  
- Merge final hacia main  

---

## Páginas e Interfaces Implementadas

- Login
- Biblioteca
- Perfil
- FAQ

---

## Funcionalidades Principales

- Inicio de sesión de usuarios
- Visualización de libros disponibles
- Gestión de información del usuario
- Navegación entre secciones de la aplicación
- Integración con la API del backend

---

## Cómo Ejecutar el Proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar la aplicación en modo desarrollo:

```bash
npm start
```

3. La aplicación quedará disponible en el navegador en la URL indicada por React, normalmente en:

```bash
http://localhost:3000
```

---

## Variables de Entorno

El proyecto puede utilizar un archivo `.env.development` para configurar variables de entorno necesarias para la conexión con la API. Asegúrate de definir la URL del backend según tu entorno.

Ejemplo:

```bash
REACT_APP_API_URL=http://localhost:3001
```

---

## Guía de Uso

- Ingresá con tus credenciales para acceder al sistema.
- Desde la sección de biblioteca podés ver y gestionar tus libros.
- En el perfil podés consultar tus datos y configuración personal.
- La sección FAQ ofrece información adicional sobre el uso de la aplicación.

---

### Utilidades

- CalculoProgreso.js: calcula el progreso de lectura o avance de un libro según los datos disponibles.
- FiltrarLibros.js: permite filtrar libros según criterios como género, estado o búsqueda.
- FormatDate.js: formatea fechas para mostrarlas de forma legible en la interfaz.
- OrdenarLibros.js: organiza la lista de libros según distintos criterios de ordenamiento.
- StorageUtils.js: gestiona el almacenamiento local del navegador, como datos de sesión o preferencias.
- ValidarDatosLibro.js: valida la información ingresada para los libros antes de enviarla a la API.

### Services

- api.js: configura la conexión base con la API y centraliza las peticiones HTTP.
- authservice.js: maneja las operaciones relacionadas con autenticación, como login y registro.
- generoservice.js: se encarga de consumir los endpoints de géneros del backend.
- libroservice.js: gestiona las operaciones CRUD de libros consumiendo la API.
