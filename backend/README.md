# Parcial N°2 

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

 API REST para Sistema de Biblioteca Personal

---

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de una **API REST** utilizando **Node.js, Express y Sequelize**, bajo arquitectura **MVC**.  
Gestiona información de usuarios y sus lecturas almacenada en una base de datos relacional SQL y permite operaciones CRUD completas.  

---

## Repositorio

https://github.com/FedericoL95/Proyecto-Final-Prog3-G4

---

## Tecnologías Utilizadas

- Node.js  
- Express 
- Sequelize 
- mysql2
- Nodemon  
- bcryptjs
- jsonwebtoken
- dotenv  
- cors  
- Docker   
- Git & GitHub  

---

## Distribución de Carpetas y Archivos

```bash
📦 backend
 ┣ 📂 config
 ┃ ┗ 📜 config.js
 ┃ ┗ 📜 database.js
 ┣ 📂 controllers
 ┃ ┗ 📜 authController.js
 ┃ ┗ 📜 generosController.js
 ┃ ┗ 📜 libroController.js
 ┣ 📂 middleware
 ┃ ┗ 📜 auth.js
 ┣ 📂 migrations
 ┃ ┗ 📜 .gitkeep
 ┃ ┗ 📜 genero.js
 ┃ ┗ 📜 libro-usuario.js
 ┃ ┗ 📜 libro.js  
 ┃ ┗ 📜 user.js
 ┣ 📂 models
 ┃ ┗ 📜 Genero.js
 ┃ ┗ 📜 Libro.js
 ┃ ┗ 📜 LibroUsuario.js
 ┃ ┗ 📜 User.js
 ┃ ┗ 📜 index.js
 ┣ 📂 routes
 ┃ ┗ 📜 auth.js
 ┃ ┗ 📜 genero.js
 ┃ ┗ 📜 index.js
 ┃ ┗ 📜 libro.js
 ┣ 📂 seeders
 ┃ ┗ 📜 .gitkeep
 ┣ 📂 tests
 ┃ ┗ 📜 .gitkeep
 ┣ 📂 utils
 ┃ ┗ 📜 .gitkeep
 ┣ 📜 README.md
 ┣ 📜 package.json
 ┗ 📜 Dockerfile
 ┗ 📜 Dockerfile.dev
 ┗ 📜 server.js
````
---
## División de tareas
```bash
| Integrante           | Tareas         |

| Nikolas Ramos        | routes,fixes   |
| Ramiro Olea          | migrations     |
| Ivo Castiglia        | controllers    |
| Gino Marigioli       | models         |
| Federico Luengo      | documentacion  |
| Andrés Emiliano Rossi| middleware     |
````
---

# Metodología de Trabajo con Git y GitHub
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
## Endpoints Implementados
Auth
   - POST /register → Registro de usuario

   - POST /login → Inicio de sesión

   - GET /perfil → Obtener perfil
---
Libro
   - GET /Libro → lista completa

   - GET /Libro/:id → Libro por id

   - POST /Libro → crear Libro nuevo

   - PUT /Libro/:id → modificar Libro existente

   - DELETE /Libro/:id → eliminar Libro por id
---
Genero
   - GET /Genero → lista completa

   - GET /Genero/:id → Genero por id

   - POST /Genero → crear Genero nuevo

   - PUT /Genero/:id → modificar Genero existente

   - DELETE /Genero/:id → eliminar Genero por id
---