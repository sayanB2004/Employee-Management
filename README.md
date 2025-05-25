
# Employee Management System

A full-stack web application designed to streamline employee management processes. Built with **Spring Boot** for the backend and **React.js** for the frontend, this system allows administrators to perform CRUD (Create, Read, Update, Delete) operations on employee records efficiently.

---

## 🚀 Features

- **Add Employee**: Register new employees with relevant details.
- **View Employees**: Display a list of all employees with their information.
- **Update Employee**: Modify existing employee records.
- **Delete Employee**: Remove employee records from the system.
- **Responsive UI**: User-friendly interface built with React.js.
- **RESTful APIs**: Backend services following REST architecture.

---

## 🛠️ Technologies Used

### Backend

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- Maven

### Frontend

- React.js
- HTML5
- Tailwind Css


---

## 📂 Project Structure

```

Employee-Management/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── example/
│   │   │   │           └── employeemanagement/
│   │   │   │               ├── controller/
│   │   │   │               ├── model/
│   │   │   │               ├── repository/
│   │   │   │               └── service/
│   │   └── resources/
│   │       └── application.properties
│   └── pom.xml
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.js
│       └── index.js
└── README.md

````

---

## 🧰 Prerequisites

- Java Development Kit (JDK) 8 or higher
- Node.js and npm
- MySQL Server
- Maven

---

## ⚙️ Setup Instructions

### Backend

1. **Navigate to the backend directory**:
   ```bash
   cd backend


2. **Configure the database**:

   * Create a MySQL database named `employee_db`.
   * Update the `application.properties` file:

     ```
     spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```

3. **Build and run the application**:

   ```bash
   mvn spring-boot:run
   ```

### Frontend

1. **Navigate to the frontend directory**:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the React application**:

   ```bash
   npm run dev
   ```

---

## 📋 API Endpoints

* **GET** `/api/v1/get` : Retrieve all employee
* **POST** `/api/v1/post` : Add a new employee
* **PUT** `/api/v1/put/{id}` : Update existing employee
* **DELETE** `/api/v1/delete/{id}` : Delete employee by ID

---
