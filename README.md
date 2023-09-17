# Gallery Art 🎨

[![](https://img.shields.io/badge/README-Español-red)](./README.es.md)

E-commerce simulator builded with React.js and Firestore.

## Deploy

[![Netlify Status](https://api.netlify.com/api/v1/badges/99d4e21e-4b9c-4997-9381-2eadabce2270/deploy-status)](https://app.netlify.com/sites/art-gallery-2023/deploys)

## Description

Simulator of an e-commerce of an art gallery. It has filtering by categories which allows you to view the products in a more organized way. The cart stores the saved products, and if you continue with the purchase, it sends an order with the purchase details. The contact section also takes the message and stores it in a collection within firebase.

## Librerías y Tecnologías Utilizadas

Here are the key libraries and technologies used in this project:

- **[React](https://es.reactjs.org/)**: We use React as the main library to build the UI of the application. React is a widely used JavaScript library for creating reusable and dynamic components.

- **[React Router](https://reactrouter.com/)**: We employ React Router for in-app navigation and routing. This allows us to create routes and manage navigation between pages efficiently.

- **[Firebase](https://firebase.google.com/)**: Firebase is used as a backend platform and real-time database to store data, authenticate users, and manage application flow

- **[React Bootstrap](https://react-bootstrap.github.io/)**: We've leveraged React Bootstrap to streamline UI development. This library provides predefined components and styles that integrate seamlessly with React.

- **[React Toastify](https://fkhadra.github.io/react-toastify/)**: We use React Toastify to display notifications to the user, such as success messages, warnings or errors, in an elegant and effective way.

- **[Sass](https://sass-lang.com/)**: Sass is used for managing styles in the application. It allows for more structured and modular writing of CSS, making it easier to maintain and customize styles.

- **[MUI (Material-UI)](https://mui.com/)**: We have incorporated MUI (Material-UI) for certain components and styles of the application. MUI provides Material Design-based user interface components that are attractive and functional.

This list of libraries and technologies used provides an overview of the key tools supporting the project and will help other developers understand the underlying technologies in your application.

## Scripts

- `npm start`
  Start the project in the development enviroment.
- `npm build`
  Build the project for production.
- `npm test`
  Start the project and run tests.

  ## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)

## Folder Structure

- `src`: Contains all the source code.
  - `components`: General components used across the app.
  - `views`: Specific components organized by view.
  - `context`: React context providers.
  - `firebase`: Firebase configuration.
  - `assets`: Contains images and custom fonts. (Product images are stored in Firebase Storage)
- `App.js`: Main component.
