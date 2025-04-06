## ## Quick Setup Guide ##
## 1. Project Setup
- ```bash # Create project
mkdir math-api && cd math-api
npm init -y

# Install dependencies
npm install express @prisma/client
npm install --save-dev prisma jest

# Initialize Prisma with SQLite
npx prisma init --datasource-provider sqlite bash```
