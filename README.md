# Sistema de Gestión de Cursos ESPE - Autenticación con Tokens y Frontend React

**Autor:** Jhon Guamán  
**Universidad:** Universidad de las Fuerzas Armadas ESPE  
**Fecha:** 30 de junio de 2025

---

## Descripción

Este proyecto implementa un sistema de gestión de cursos con autenticación basada en tokens JWT y un frontend profesional en React. Permite registrar usuarios, iniciar sesión, proteger rutas y realizar operaciones CRUD sobre cursos, todo con una interfaz moderna y segura.

---

## Características principales
- Registro y login de usuarios con autenticación JWT
- Protección de rutas y operaciones mediante tokens
- CRUD completo de cursos (crear, leer, actualizar, eliminar)
- Interfaz web profesional y moderna con React
- Almacenamiento seguro del token en localStorage
- Diseño institucional con colores y logo de la ESPE

---

## Instalación y ejecución

### Backend
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Asegúrate de tener MongoDB corriendo (puedes usar Docker):
   ```bash
   docker-compose up -d
   ```
3. Inicia el backend:
   ```bash
   npm start
   ```

### Frontend
1. Ve a la carpeta del frontend:
   ```bash
   cd consumo-api-rest
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Inicia el frontend:
   ```bash
   npm start
   ```

---

## Flujo y capturas de pantalla

1. **Registro de usuario en Postman:**
   - POST a `/auth/register` con:
     ```json
     {
       "username": "admin",
       "password": "admin123"
     }
     ```
   - Respuesta: `{"message": "Usuario creado"}`
   - ![Registro de usuario en Postman](./screenshots/1-register-postman.png)

2. **Login y obtención de token en Postman:**
   - POST a `/auth/login` y visualización del token JWT.
   - ![Login y token en Postman](./screenshots/2-login-token-postman.png)

3. **Pantalla de login en React:**
   - Formulario institucional para ingresar credenciales.
   - ![Pantalla de login en React](./screenshots/3-login-react.png)

4. **Vista principal tras login:**
   - Bienvenida al sistema, listado de cursos y formulario para crear nuevos cursos.
   - ![Vista principal tras login](./screenshots/4-home-cursos.png)

5. **Token en localStorage:**
   - Visualización del token JWT almacenado en el navegador.
   - ![Token en localStorage](./screenshots/5-token-localstorage.png)

6. **Creación de un nuevo curso:**
   - Formulario para ingresar nombre y descripción del curso.
   - ![Creación de curso](./screenshots/6-crear-curso.png)

7. **Edición de un curso:**
   - Formulario de edición mostrando el curso actualizado.
   - ![Edición de curso](./screenshots/7-editar-curso.png)

8. **Eliminación de cursos:**
   - Vista tras eliminar cursos, solo queda el curso actualizado.
   - ![Eliminación de cursos](./screenshots/8-eliminar-curso.png)

---

## Conclusiones

- El uso de JWT permite proteger rutas y operaciones de manera segura y profesional.
- React facilita la creación de interfaces modernas y responsivas.
- El token se almacena y utiliza correctamente en el frontend para autenticar todas las operaciones.
- El sistema es robusto, seguro y visualmente atractivo, ideal para la Universidad de las Fuerzas Armadas ESPE.

---

**Desarrollado para la Universidad de las Fuerzas Armadas ESPE**
