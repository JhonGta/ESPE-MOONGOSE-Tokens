# Sistema de Gestión de Cursos ESPE - Autenticación con Tokens y Frontend React

## RESUMEN

En este laboratorio se desarrolló un sistema web completo para la gestión de cursos, integrando un backend Node.js/Express con autenticación JWT y un frontend profesional en React. El propósito fue implementar un flujo seguro de registro, login y protección de rutas, permitiendo que solo usuarios autenticados puedan realizar operaciones CRUD sobre los cursos. Se aplicaron buenas prácticas de arquitectura, separación de responsabilidades y diseño institucional. El sistema almacena el token en localStorage y lo utiliza en cada petición, garantizando la seguridad y la experiencia de usuario. Se evidenció el funcionamiento mediante pruebas en Postman y la interfaz React, cumpliendo con los objetivos de la práctica y fortaleciendo el manejo de tecnologías modernas en el desarrollo web. Además, se profundizó en la importancia de la seguridad en aplicaciones web, la gestión eficiente de estados en el frontend y la integración efectiva entre cliente y servidor.

Palabras Claves: JWT, React, Autenticación, Node.js, MongoDB, Seguridad Web

---

## 1. INTRODUCCIÓN

El objetivo de este laboratorio fue fortalecer el manejo de autenticación y autorización en aplicaciones web, integrando Node.js, Express, MongoDB y React. Se desarrolló una aplicación que permite registrar usuarios, iniciar sesión y proteger rutas mediante tokens JWT, asegurando que solo usuarios autenticados puedan gestionar cursos. La práctica enfatizó la disciplina en el desarrollo, la correcta organización del código y la aplicación de buenas prácticas en el laboratorio. Además, se abordó la importancia de la protección de datos sensibles, la validación de entradas y la experiencia de usuario en sistemas modernos.

---

## 2. OBJETIVO(S)

2.1 Implementar un sistema de autenticación y autorización con JWT en Node.js y React.  
2.2 Desarrollar un CRUD de cursos protegido por token.  
2.3 Aplicar buenas prácticas de arquitectura y diseño institucional.  
2.4 Profundizar en la integración segura entre frontend y backend.  
2.5 Mejorar la experiencia de usuario mediante una interfaz moderna y validaciones efectivas.

---

## 3. MARCO TEÓRICO

- **JWT (JSON Web Token):** Es un estándar abierto (RFC 7519) que define un método compacto y seguro para transmitir información entre partes como un objeto JSON. Los JWT se utilizan ampliamente para autenticación y autorización, ya que permiten verificar la identidad del usuario y proteger rutas sensibles. Un JWT consta de tres partes: header, payload y signature, lo que garantiza la integridad y autenticidad de los datos transmitidos.
- **React:** Es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario interactivas y eficientes. React utiliza un DOM virtual para optimizar el rendimiento y facilita la creación de componentes reutilizables, lo que mejora la mantenibilidad y escalabilidad de las aplicaciones.
- **Node.js/Express:** Node.js es un entorno de ejecución para JavaScript en el servidor, mientras que Express es un framework minimalista que facilita la creación de APIs RESTful. Juntos, permiten desarrollar aplicaciones backend robustas, escalables y con una arquitectura clara basada en rutas, controladores y middleware.
- **MongoDB/Mongoose:** MongoDB es una base de datos NoSQL orientada a documentos, ideal para aplicaciones modernas que requieren flexibilidad y escalabilidad. Mongoose es un ODM (Object Data Modeling) que proporciona una capa de abstracción para definir esquemas, validaciones y relaciones en MongoDB, facilitando la interacción con la base de datos desde Node.js.
- **Autenticación y Autorización:** La autenticación verifica la identidad del usuario, mientras que la autorización determina los permisos que tiene dentro del sistema. El uso de JWT permite implementar ambos procesos de manera eficiente y segura, evitando accesos no autorizados y protegiendo los recursos del sistema.
- **Seguridad Web:** Es fundamental proteger las aplicaciones contra amenazas como ataques de fuerza bruta, inyección de código y exposición de datos sensibles. El uso de HTTPS, validaciones en el backend y frontend, y el manejo adecuado de tokens son prácticas recomendadas para garantizar la seguridad.

El uso de JWT permite proteger rutas y operaciones, mientras que React facilita la creación de interfaces responsivas y seguras. La integración de estas tecnologías permite construir sistemas modernos, seguros y alineados con las necesidades institucionales.

---

## 4. DESCRIPCIÓN DEL PROCEDIMIENTO

- Se creó el backend con Node.js, Express y MongoDB, implementando rutas protegidas con JWT y validaciones robustas en los modelos.
- Se desarrolló el frontend en React, consumiendo la API y almacenando el token en localStorage, utilizando hooks y componentes funcionales para una mejor gestión del estado.
- Se realizaron pruebas de registro y login en Postman, verificando la obtención y uso del token, así como la protección de rutas y operaciones CRUD.
- Se implementó el CRUD de cursos, permitiendo crear, editar y eliminar cursos solo si el usuario está autenticado, mostrando mensajes claros y validaciones en tiempo real.
- Se personalizó la interfaz con el logo y colores institucionales de la ESPE, aplicando estilos modernos y responsivos para mejorar la experiencia de usuario.
- Se documentó el proceso y se incluyeron capturas de pantalla para evidenciar el funcionamiento del sistema y la integración entre sus componentes.

---

## 5. ANÁLISIS DE RESULTADOS

- El registro y login funcionan correctamente, generando y validando el token JWT, lo que garantiza que solo usuarios autenticados puedan acceder a los recursos protegidos.
- El token se almacena en localStorage y se utiliza en cada petición protegida, asegurando la persistencia de la sesión y la protección de las operaciones CRUD.
- El CRUD de cursos solo es accesible para usuarios autenticados, cumpliendo con los requisitos de seguridad y control de acceso.
- La interfaz React es moderna, responsiva y profesional, facilitando la interacción del usuario y mejorando la usabilidad del sistema.
- El sistema cumple con los objetivos de seguridad y usabilidad planteados, demostrando la efectividad de la integración entre backend y frontend.
- Se evidenció la importancia de la validación de datos, el manejo de errores y la retroalimentación al usuario para una experiencia óptima.

---

## 6. GRÁFICOS O FOTOGRAFÍAS

1. **Registro de usuario en Postman:**
   ![Registro de usuario en Postman](https://i.imgur.com/ZVoTYg5.png)
   *Descripción:* Se muestra el proceso de registro de un nuevo usuario utilizando Postman, donde se envían los datos requeridos al endpoint de registro y se recibe una respuesta exitosa, evidenciando la correcta integración del backend y la validación de datos.
2. **Login y obtención de token en Postman:**
   ![Login y token en Postman](https://i.imgur.com/CqAeYMR.png)
   *Descripción:* Se observa el inicio de sesión de un usuario registrado, obteniendo un token JWT que será utilizado para autenticar futuras peticiones. Esto demuestra la implementación exitosa del flujo de autenticación.
3. **Pantalla de login en React:**
   ![Pantalla de login en React](https://i.imgur.com/chDvzHF.png)
   *Descripción:* Interfaz de inicio de sesión desarrollada en React, con validaciones y mensajes claros para el usuario. El diseño institucional y la usabilidad son evidentes en la presentación de la pantalla.
4. **Vista principal tras login:**
   ![Vista principal tras login](https://i.imgur.com/KpLIf2i.png)
   *Descripción:* Una vez autenticado, el usuario accede a la vista principal donde puede gestionar los cursos. Se muestra la integración entre frontend y backend, así como la protección de rutas.
5. **Token en localStorage:**
   ![Token en localStorage](https://i.imgur.com/e9gNcUs.png)
   *Descripción:* Captura que evidencia cómo el token JWT se almacena en el localStorage del navegador, permitiendo mantener la sesión activa y proteger las operaciones del usuario.
6. **Edición de un curso:**
   ![Edición de curso](https://i.imgur.com/r0t2sWZ.png)
   *Descripción:* Se muestra la funcionalidad de edición de un curso, donde el usuario puede modificar los datos y guardar los cambios. El sistema valida la autenticación antes de permitir la operación.
7. **Eliminación de cursos:**
   ![Eliminación de cursos](https://i.imgur.com/45jDC16.png)
   *Descripción:* Ejemplo de la eliminación de un curso desde la interfaz React, demostrando la protección de la operación mediante el token y la actualización dinámica de la lista de cursos.

---

## 7. DISCUSIÓN

El uso de JWT permitió implementar un flujo seguro de autenticación y autorización, protegiendo los recursos del sistema y evitando accesos no autorizados. React facilitó la creación de una interfaz moderna y amigable, mejorando la experiencia del usuario y permitiendo una gestión eficiente del estado de la aplicación. La integración entre backend y frontend fue exitosa, permitiendo una comunicación fluida y segura mediante el uso de tokens. Además, la validación de datos y el manejo de errores contribuyeron a la robustez del sistema. Se destaca la importancia de seguir buenas prácticas de desarrollo, como la separación de responsabilidades, el uso de middleware para la protección de rutas y la documentación clara del código y el proceso.

---

## 8. CONCLUSIONES

- Se logró implementar un sistema seguro de autenticación y autorización con JWT, cumpliendo con los estándares modernos de seguridad web.
- El CRUD de cursos solo es accesible para usuarios autenticados, garantizando el control de acceso y la protección de los datos.
- La interfaz React es profesional, responsiva y cumple con los lineamientos institucionales, mejorando la experiencia de usuario.
- El laboratorio fortaleció el manejo de tecnologías modernas y buenas prácticas de desarrollo web, como la validación de datos, el manejo de errores y la documentación.
- La integración efectiva entre backend y frontend es clave para el éxito de sistemas web seguros y escalables.

---

## 9. BIBLIOGRAFÍA

- Auth0. (2024). "What is JWT?" https://jwt.io/introduction
- ReactJS. (2025). "React – A JavaScript library for building user interfaces." https://react.dev/
- ExpressJS. (2025). "Express - Node.js web application framework." https://expressjs.com/
- MongoDB. (2025). "MongoDB Documentation." https://www.mongodb.com/docs/
- Mongoose. (2025). "Mongoose ODM Documentation." https://mongoosejs.com/
- Mozilla Developer Network. (2025). "Web Security." https://developer.mozilla.org/en-US/docs/Web/Security
- Open Web Application Security Project (OWASP). (2025). "OWASP Top Ten." https://owasp.org/www-project-top-ten/

---

**Desarrollado para la Universidad de las Fuerzas Armadas ESPE**
