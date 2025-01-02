# One Step Paws – Home 🐾

**A modern platform for comprehensive pet care services.**

## Table of Contents

-   [Introduction](#introduction)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Database Models](#database-models)
-   [Contributing](#contributing)

----------

## Introduction

**One Step Paws** is a full-stack website that provides an all-in-one solution for pet owners to access grooming, boarding, training, veterinary care, and more. The platform connects pet owners with service providers and allows seamless online booking.

[Project GitHub Link](https://github.com/pansalasamarth/One-Step-Paws-Home.git)

----------

## Features

-   **User Registration & Login**: Secure user authentication using sessions.
-   **Dashboard**: Manage service requests and user information.
-   **Service Booking**: Book pet care services with detailed information.
-   **Contact Form**: Reach out for inquiries or feedback.
-   **Admin Interface**: Manage service requests and contact form submissions.

----------

## Technologies Used

### Frontend

-   **EJS (Embedded JavaScript)**: Dynamic content rendering.
-   **Bootstrap**: Responsive and modern styling.
-   **JavaScript**: Client-side interactivity.

### Backend

-   **Node.js**: Server-side runtime.
-   **Express.js**: Routing and middleware.
-   **MongoDB**: Database for data storage.
-   **Mongoose**: Schema-based data modeling.

### Additional Features

-   **Form Validation**: Using `express-validator`.
-   **Session Management**: For user authentication.
-   **Error Handling**: Logging and handling application errors.

----------

## Installation

1.  Clone the repository:
    
    bash
    ```git clone https://github.com/pansalasamarth/One-Step-Paws-Home.git``` 
    
    
2.  Navigate to the project directory:
    
    bash
    ```cd One-Step-Paws-Home``` 
    
3.  Install dependencies:
    
    bash
    `npm install` 
    
4.  Set up the environment variables in a `.env` file:
    
    env `MONGO_URI=your_mongo_db_connection_string
    SESSION_SECRET=your_secret_key` 
    
5.  Start the server:
    
    bash
     `npm start` 
    
6.  Open your browser and visit `http://localhost:4000`.

----------

## Usage

-   **Homepage**: View services and learn about the platform.
-   **Register/Login**: Access user-specific features.
-   **Dashboard**: Manage bookings and personal information.
-   **Admin Interface**: Monitor and handle user activities.

----------

## Database Models

### User Schema

-   `username`, `email`, `phone`, `password`, `isAdmin`

### Service Schema

-   `name`, `email`, `phone`, `address`, `service details`, `price`

### Contact Schema

-   `name`, `email`, `message`

----------

## Contributing

We welcome contributions to improve the platform! To contribute:

1.  Fork the repository.
2.  Create a feature branch: `git checkout -b feature-name`.
3.  Commit your changes: `git commit -m 'Add new feature'`.
4.  Push to the branch: `git push origin feature-name`.
5.  Submit a pull request.
