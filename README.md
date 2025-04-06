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
