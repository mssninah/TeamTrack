

# 🏀 TeamTrack

> **Copyright © Razafitsialonina — July 2025**

TeamTrack is a backend application built with **Spring Boot 3** and **MariaDB**, designed to help basketball clubs manage their **players**, **fees**, and **events** efficiently.
It supports **offline data entry on the mobile app**, which synchronizes with the server once online — ensuring smooth player and payment management even without constant internet access.

---

## 🚀 Features

✅ Manage players and their profiles
✅ Track membership fees and payment events
✅ Offline-first: allow mobile clients to record data and sync when connected
✅ Export data to PDF and CSV formats
✅ GraphQL API support for modern clients
✅ Validation and reporting

---

## 🛠️ Tech Stack

* Java 17
* Spring Boot 3.4
* Spring Data JPA
* MariaDB
* GraphQL (Spring GraphQL)
* Lombok
* OpenCSV
* Flying Saucer PDF
* Thymeleaf (optional views)

---

## 📦 Build & Run

### Prerequisites

* Java 17+
* Maven 3.9+
* MariaDB server (or compatible MySQL)

### Clone the project

```bash
git clone https://github.com/mssninah/teamtrack.git
cd teamtrack
```

### Configure database

Create a MariaDB database and set your connection in `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mariadb://localhost:3306/teamtrack
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

### Run the application

```bash
mvn spring-boot:run
```

The app will start on [http://localhost:8080](http://localhost:8080)

---

## 🧪 Tests

To run tests:

```bash
mvn test
```

---

## 📄 License

This project is proprietary.
**© Razafitsialonina, July 2025. All rights reserved.**

For inquiries or contributions, please contact the author.

