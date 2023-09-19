# Gallery Art 🎨

[![](https://img.shields.io/badge/README-Español-red)](./README.es.md)

Simulador de e-commerce construido con React.js y Firestore. 

## Desplegar

[![Estado de Netlify](https://api.netlify.com/api/v1/badges/99d4e21e-4b9c-4997-9381-2eadabce2270/deploy-status)](
https://art-gallery-2023.netlify.app) 

## Descripción 

Simulador e-commerce de una galería de arte. Dispone de filtrado por categorías lo que permite visualizar los productos de forma más organizada. El carrito almacena los productos previamente guardados, y si continúas con la compra envía un pedido con los datos de la compra. La seccion contacto tambien toma el mensaje y lo almacena en una coleccion dentro de firebase.

## Librerías y Tecnologías Utilizadas

Aquí se enumeran las librerías y tecnologías clave que se utilizaron en este proyecto:

- **[React](https://es.reactjs.org/)**: Utilizamos React como la biblioteca principal para construir la interfaz de usuario de la aplicación. React es una biblioteca de JavaScript ampliamente utilizada para crear componentes reutilizables y dinámicos.

- **[React Router](https://reactrouter.com/)**: Empleamos React Router para la navegación y el enrutamiento dentro de la aplicación. Esto nos permite crear rutas y gestionar la navegación entre páginas de manera eficiente.

- **[Firebase](https://firebase.google.com/)**: Firebase se utiliza como plataforma de backend y base de datos en tiempo real para almacenar datos, autenticar usuarios y gestionar el flujo de la aplicación.

- **[React Bootstrap](https://react-bootstrap.github.io/)**: Hemos aprovechado React Bootstrap para agilizar el desarrollo de la interfaz de usuario. Esta biblioteca proporciona componentes y estilos predefinidos que se integran perfectamente con React.

- **[React Toastify](https://fkhadra.github.io/react-toastify/)**: Utilizamos React Toastify para mostrar notificaciones al usuario, como mensajes de éxito, advertencias o errores, de manera elegante y efectiva.

- **[Sass](https://sass-lang.com/)**: Sass se utiliza para la gestión de estilos en la aplicación. Permite una escritura más estructurada y modular de CSS, lo que facilita el mantenimiento y la personalización de estilos.

- **[MUI (Material-UI)](https://mui.com/)**:Hemos incorporado MUI (Material-UI) para ciertos componentes y estilos de la aplicación. MUI proporciona componentes de interfaz de usuario basados en Material Design que son atractivos y funcionales.

Esta lista de librerías y tecnologías utilizadas brinda una visión general de las herramientas clave que respaldan el proyecto y ayudará a otros desarrolladores a comprender las tecnologías subyacentes en tu aplicación.

## Guiones

- `npm start` 
  Iniciar el proyecto en el entorno de desarrollo.
- `npm build`
  Construya el proyecto para producción.
- `npm test`
  Inicie el proyecto y ejecute pruebas.

  ## Requisitos previos

- [Visual Studio Code](https://code.visualstudio.com/)

## Estructura de carpetas

- `src`: Contiene todo el código fuente.
  - `componentes`: componentes generales utilizados en la aplicación.
  - `views`: Componentes específicos organizados por vista.
  - `layout`: Contiene header y footer.
  - `context`: proveedores de contexto de React.
  - `assets`: Contiene imágenes y fuentes personalizadas. (Las imágenes del producto se almacenan en Firebase Storage)
- `App.js`: Componente principal.
