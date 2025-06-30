# Sistema de Gestión de Cursos ESPE - Autenticación con Tokens y Frontend React

## RESUMEN

En este laboratorio se desarrolló un sistema web completo para la gestión de cursos, integrando un backend Node.js/Express con autenticación JWT y un frontend profesional en React. El propósito fue implementar un flujo seguro de registro, login y protección de rutas, permitiendo que solo usuarios autenticados puedan realizar operaciones CRUD sobre los cursos. Se aplicaron buenas prácticas de arquitectura, separación de responsabilidades y diseño institucional. El sistema almacena el token en localStorage y lo utiliza en cada petición, garantizando la seguridad y la experiencia de usuario. Se evidenció el funcionamiento mediante pruebas en Postman y la interfaz React, cumpliendo con los objetivos de la práctica y fortaleciendo el manejo de tecnologías modernas en el desarrollo web.

Palabras Claves: JWT, React, Autenticación

---

## 1. INTRODUCCIÓN

El objetivo de este laboratorio fue fortalecer el manejo de autenticación y autorización en aplicaciones web, integrando Node.js, Express, MongoDB y React. Se desarrolló una aplicación que permite registrar usuarios, iniciar sesión y proteger rutas mediante tokens JWT, asegurando que solo usuarios autenticados puedan gestionar cursos. La práctica enfatizó la disciplina en el desarrollo, la correcta organización del código y la aplicación de buenas prácticas en el laboratorio.

---

## 2. OBJETIVO(S)

2.1 Implementar un sistema de autenticación y autorización con JWT en Node.js y React.  
2.2 Desarrollar un CRUD de cursos protegido por token.  
2.3 Aplicar buenas prácticas de arquitectura y diseño institucional.  

---

## 3. MARCO TEÓRICO

- **JWT (JSON Web Token):** Estándar abierto para autenticación y autorización segura entre cliente y servidor.
- **React:** Biblioteca de JavaScript para construir interfaces de usuario interactivas y modernas.
- **Node.js/Express:** Plataforma y framework para construir APIs robustas y escalables.
- **MongoDB/Mongoose:** Base de datos NoSQL y ODM para modelar datos y aplicar validaciones.

El uso de JWT permite proteger rutas y operaciones, mientras que React facilita la creación de interfaces responsivas y seguras.

---

## 4. DESCRIPCIÓN DEL PROCEDIMIENTO

- Se creó el backend con Node.js, Express y MongoDB, implementando rutas protegidas con JWT.
- Se desarrolló el frontend en React, consumiendo la API y almacenando el token en localStorage.
- Se realizaron pruebas de registro y login en Postman, verificando la obtención y uso del token.
- Se implementó el CRUD de cursos, permitiendo crear, editar y eliminar cursos solo si el usuario está autenticado.
- Se personalizó la interfaz con el logo y colores institucionales de la ESPE.

---

## 5. ANÁLISIS DE RESULTADOS

- El registro y login funcionan correctamente, generando y validando el token JWT.
- El token se almacena en localStorage y se utiliza en cada petición protegida.
- El CRUD de cursos solo es accesible para usuarios autenticados.
- La interfaz React es moderna, responsiva y profesional.
- El sistema cumple con los objetivos de seguridad y usabilidad planteados.

---

## 6. GRÁFICOS O FOTOGRAFÍAS

1. **Registro de usuario en Postman:**
   ![Registro de usuario en Postman](https://i.imgur.com/ZVoTYg5.png)
2. **Login y obtención de token en Postman:**
   ![Login y token en Postman](./screenshots/2-login-token-postman.png)
3. **Pantalla de login en React:**
   ![Pantalla de login en React](./screenshots/3-login-react.png)
4. **Vista principal tras login:**
   ![Vista principal tras login](./screenshots/4-home-cursos.png)
5. **Token en localStorage:**
   ![Token en localStorage](./screenshots/5-token-localstorage.png)
6. **Creación de un nuevo curso:**
   ![Creación de curso](./screenshots/6-crear-curso.png)
7. **Edición de un curso:**
   ![Edición de curso](./screenshots/7-editar-curso.png)
8. **Eliminación de cursos:**
   ![Eliminación de cursos](./screenshots/8-eliminar-curso.png)

---

## 7. DISCUSIÓN

El uso de JWT permitió implementar un flujo seguro de autenticación y autorización, protegiendo los recursos del sistema. React facilitó la creación de una interfaz moderna y amigable, mejorando la experiencia del usuario. La integración entre backend y frontend fue exitosa, y el sistema resultante es robusto, seguro y alineado con los estándares institucionales de la ESPE.

---

## 8. CONCLUSIONES

- Se logró implementar un sistema seguro de autenticación y autorización con JWT.
- El CRUD de cursos solo es accesible para usuarios autenticados.
- La interfaz React es profesional y cumple con los lineamientos institucionales.
- El laboratorio fortaleció el manejo de tecnologías modernas y buenas prácticas de desarrollo web.

---

## 9. BIBLIOGRAFÍA

- Auth0. (2024). "What is JWT?" https://jwt.io/introduction
- ReactJS. (2025). "React – A JavaScript library for building user interfaces." https://react.dev/
- ExpressJS. (2025). "Express - Node.js web application framework." https://expressjs.com/
- MongoDB. (2025). "MongoDB Documentation." https://www.mongodb.com/docs/
- Mongoose. (2025). "Mongoose ODM Documentation." https://mongoosejs.com/

---

**Desarrollado para la Universidad de las Fuerzas Armadas ESPE**
