## ## Quick Setup Guide ##

A Node.js API for mathematical operations with SQLite database using Prisma ORM.

---

## Setup

### 1. Project Setup
```bash
# Create project directory
mkdir math-api && cd math-api

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express @prisma/client
npm install --save-dev prisma jest

# Initialize Prisma with SQLite
npx prisma init --datasource-provider sqlite `\

```

### 2.Folder Structure
```math-api/
├── prisma/            # Database schema & migrations
├── src/
│   ├── controllers/   # API logic
│   ├── routes/        # API endpoints
│   ├── utils/         # Prisma connection
│   └── server.js      # Express server
├── tests/             # Test files
├── .env               # Database config
└── package.json
```
### 3. Configuration
.env File:
```
DATABASE_URL="file:./prisma/dev.db"
```

### 4. Database Setup
```bash 
# Create database tables
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate
```


### 5. Run Project
```bash
npm run dev  # Starts server with nodemon
```
