Chat Application Project 


Overview
This project is a Chat Application developed to facilitate communication between users. Below, you'll find a brief description of the key components and functionalities implemented in the application.

Controllers
In the controllers directory, you will find the core of the application's logic. This is where the calls and routes for various functionalities are defined. Each controller corresponds to a specific aspect of the application, handling requests and coordinating the flow of data.

Database (Sequelize)
The application utilizes Sequelize as the ORM (Object-Relational Mapping) tool for database interactions. The database directory contains the necessary configurations and models for defining the structure of the database. Sequelize simplifies the process of working with databases and allows for easy manipulation of data.

Middleware
The middleware directory houses the control de saisie (input control) middleware. This middleware is responsible for ensuring that the data input into the application meets the specified criteria. It adds an additional layer of security and validation to enhance the overall robustness of the application.

Modals
The modals directory contains the definitions for the application's models. In this project, two main modals, namely 'chat' and 'comment,' are defined. The focus is primarily on the 'comment' modal, where CRUD (Create, Read, Update, Delete) operations are implemented to manage user comments effectively.

Services
The services directory encapsulates the development of various functions essential to the application. These functions provide the underlying logic for the application's features, ensuring seamless communication and interaction between different components.

Views
The views directory contains the .twig pages that constitute the user interface of the application. These pages are responsible for rendering content and providing a user-friendly interface for engaging with the chat functionality.
