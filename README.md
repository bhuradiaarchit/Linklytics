# URL Shortener Application

A full-stack URL shortening service built with React (frontend) and Spring Boot (backend). This application allows users to create short URLs, track click analytics, and manage their shortened links through a user-friendly dashboard.

## 🚀 Features

### Core Functionality
- **URL Shortening**: Convert long URLs into short, shareable links
- **User Authentication**: Secure registration and login system with JWT tokens
- **Dashboard**: Personal dashboard to manage all shortened URLs
- **Analytics**: Track click events and view detailed analytics
- **Responsive Design**: Mobile-friendly interface built with Material-UI and Tailwind CSS

### Technical Features
- **RESTful API**: Well-structured backend API with proper authentication
- **Database Integration**: MySQL database with JPA/Hibernate
- **Security**: JWT-based authentication and authorization
- **Real-time Analytics**: Click tracking with date-based filtering
- **Modern UI**: Clean, intuitive interface with smooth animations

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Material-UI (MUI)** - React components implementing Google's Material Design
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Declarative routing for React
- **React Query** - Powerful data synchronization for React
- **Axios** - HTTP client for API requests
- **React Hook Form** - Performant forms with easy validation
- **Chart.js** - Simple yet flexible JavaScript charting library
- **React Hot Toast** - Beautiful toast notifications

### Backend
- **Spring Boot 3.4.1** - Framework for building Java applications
- **Spring Security** - Authentication and authorization framework
- **Spring Data JPA** - Persistence layer for Java applications
- **JWT (JSON Web Tokens)** - Secure token-based authentication
- **MySQL** - Relational database management system
- **Lombok** - Java library to reduce boilerplate code
- **Maven** - Build automation and dependency management tool

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Java 21** or higher
- **Node.js 18** or higher
- **npm** or **yarn** package manager
- **MySQL 8.0** or higher
- **Maven 3.6** or higher

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd url-shortener
```

### 2. Database Setup

1. Install and start MySQL server
2. Create a database named `urlshortenerdb`:

```sql
CREATE DATABASE urlshortenerdb;
```

3. Update database credentials in `url-shortener-sb/src/main/resources/application.properties` if needed:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/urlshortenerdb
spring.datasource.username=root
spring.datasource.password=root
```

### 3. Backend Setup

1. Navigate to the backend directory:

```bash
cd url-shortener-sb
```

2. Install dependencies and build the project:

```bash
mvn clean install
```

3. Run the Spring Boot application:

```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### 4. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:

```bash
cd url-shortener-react
```

2. Install dependencies:

```bash
npm install
```

3. Create environment variables file `.env` in the frontend root:

```env
VITE_BACKEND_URL=http://localhost:8080
VITE_REACT_FRONT_END_URL=http://localhost:5173
```

4. Start the development server:

```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## 🚀 Running the Application

1. Ensure MySQL is running
2. Start the backend: `cd url-shortener-sb && mvn spring-boot:run`
3. Start the frontend: `cd url-shortener-react && npm run dev`
4. Open your browser and navigate to `http://localhost:5173`

## 📖 Usage

### User Registration & Login

1. Visit the application homepage
2. Click "Register" to create a new account
3. Fill in username, email, and password
4. Login with your credentials

### Creating Short URLs

1. After logging in, access your dashboard
2. Click "Create New Short URL"
3. Enter the original URL
4. The short URL will be automatically copied to your clipboard

### Viewing Analytics

1. In your dashboard, view all your shortened URLs
2. Click on a URL to see detailed analytics
3. Filter analytics by date range
4. View click trends and total clicks

### URL Redirection

- Short URLs follow the format: `http://localhost:5173/s/{shortCode}`
- Accessing a short URL will redirect to the original URL and track the click

## 🔗 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/public/register
Content-Type: application/json

{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

#### Login User
```http
POST /api/auth/public/login
Content-Type: application/json

{
  "username": "string",
  "password": "string"
}
```

### URL Management Endpoints (Requires Authentication)

#### Create Short URL
```http
POST /api/urls/shorten
Authorization: Bearer {jwt-token}
Content-Type: application/json

{
  "originalUrl": "https://example.com"
}
```

#### Get User URLs
```http
GET /api/urls/myurls
Authorization: Bearer {jwt-token}
```

#### Get URL Analytics
```http
GET /api/urls/analytics/{shortUrl}?startDate={start}&endDate={end}
Authorization: Bearer {jwt-token}
```

#### Get Total Clicks
```http
GET /api/urls/totalClicks?startDate={start}&endDate={end}
Authorization: Bearer {jwt-token}
```

### Public Endpoints

#### Redirect to Original URL
```http
GET /{shortUrl}
```

## 🗂️ Project Structure

```
url-shortener/
├── url-shortener-react/          # Frontend React Application
│   ├── public/
│   ├── src/
│   │   ├── api/                  # API configuration
│   │   ├── components/           # React components
│   │   │   ├── Dashboard/        # Dashboard components
│   │   │   └── ...               # Other UI components
│   │   ├── contextApi/           # React context for state management
│   │   ├── hooks/                # Custom React hooks
│   │   ├── utils/                # Utility functions
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
│
└── url-shortener-sb/             # Backend Spring Boot Application
    ├── src/
    │   ├── main/
    │   │   ├── java/com/url/shortener/
    │   │   │   ├── controller/   # REST controllers
    │   │   │   ├── models/       # JPA entities
    │   │   │   ├── repository/   # Data repositories
    │   │   │   ├── security/     # Security configuration
    │   │   │   └── service/      # Business logic
    │   │   └── resources/
    │   │       └── application.properties
    │   └── test/                 # Unit tests
    └── pom.xml
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Encryption**: BCrypt password hashing
- **Role-based Access Control**: User role management
- **CORS Configuration**: Cross-origin resource sharing setup
- **Input Validation**: Server-side validation for all inputs

## 📊 Database Schema

### Users Table
- `id` (Primary Key)
- `username` (Unique)
- `password` (Encrypted)
- `email`
- `role`

### UrlMapping Table
- `id` (Primary Key)
- `originalUrl`
- `shortUrl`
- `clickCount`
- `createdDate`
- `user_id` (Foreign Key)

### ClickEvent Table
- `id` (Primary Key)
- `clickDate`
- `url_mapping_id` (Foreign Key)

## 🧪 Testing

### Backend Testing
```bash
cd url-shortener-sb
mvn test
```

### Frontend Testing
```bash
cd url-shortener-react
npm run lint
```

## 🚀 Deployment

### Backend Deployment
1. Build the JAR file:
```bash
cd url-shortener-sb
mvn clean package
```

2. Run the JAR:
```bash
java -jar target/url-shortener-sb-0.0.1-SNAPSHOT.jar
```

### Frontend Deployment
1. Build for production:
```bash
cd url-shortener-react
npm run build
```

2. Serve the `dist` folder using any static server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Spring Boot for the robust backend framework
- React ecosystem for the modern frontend development
- Material-UI for beautiful UI components
- All contributors and open-source projects used

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

**Happy URL Shortening! 🚀**</content>
<filePath="d:\Linklytics\README.md