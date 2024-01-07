
# Admin Dashboard Project

## Overview

The Admin Dashboard is a powerful web-based tool engineered to offer comprehensive insights into a company's operations by extracting and analyzing vital data points, including sales figures, product details, and more. This dynamic platform serves as a customizable template project, allowing tailoring to meet the specific needs and preferences of clients. The project embodies the MERN (MongoDB, Express.js, React, Node.js) stack, offering a multitude of features and leveraging cutting-edge technologies.

## Key Features

### Comprehensive Business Overview

The dashboard provides a holistic view of the business's performance, consolidating data on sales, product details, and other critical metrics into a user-friendly interface.
Users can effortlessly access essential business insights, facilitating informed decision-making and strategic planning.

### Advanced-Data Analytics

Leveraging the capabilities of the MERN stack, the application enables the seamless extraction, storage, and analysis of data.
Users can generate detailed reports, charts, and visualizations, allowing for in-depth data exploration and trend identification.

### Customization for Client Needs

The project is designed as a flexible template, accommodating customization based on individual client requirements.
Clients can tailor the dashboard's appearance, features, and data sources to align with their specific business goals and operational nuances.

### Secure and Scalable Architecture

The MERN stack ensures a robust and scalable architecture, capable of handling vast amounts of data while maintaining system reliability.
MongoDB offers efficient data storage, Express.js manages server-side logic, Node.js powers the backend, and React delivers a responsive front-end interface.

### User-Friendly Interface

The admin dashboard prioritizes user-friendliness, providing an intuitive interface for effortless data exploration and analytics.

## Getting Started

### Prerequisites

- **Docker:**
  Make sure Docker is installed on your local machine. You can download and install Docker from [here](https://www.docker.com/get-started).

### Installation and Running with Docker

1. Clone the repository:

   ```bash
   git clone [https://github.com/your-username/admin-dashboard.git](https://github.com/Aditya-gam/Admin-Dashboard.git)
   cd admin-dashboard
   ```

2. Build Docker images:

   ```bash
   docker-compose build
   ```

3. Run Docker containers:

   ```bash
   docker-compose up -d
   ```

4. Access the application:

   - Client (React): http://localhost:3000
   - Server (Node.js): http://localhost:5001

### Old Client Installation and Running

```bash
# Old Client README.md instructions
# Installation
npm i
touch .env.local
echo "REACT_APP_BASE_URL = http://localhost:5001" > .env.local

# Running
npm run start
```

### Old Server Installation and Running

```bash
# Old Server README.md instructions
# Installation
npm i
touch .env
echo "PORT = 5001" >> .env
echo "MONGO_URL = mongodb://localhost:27017/your-database-name" >> .env
echo "JWT_SECRET_KEY = your-secret-key" >> .env

# Database setup
# Uncomment the commented part in "Mongoose Setup" to load mock data into the database

# Running
npm run dev
# or
npm run start
```

Feel free to customize the instructions further based on your specific project structure and configurations.
```

Replace "your-username" and "your-repo" with your actual GitHub username and repository name.
