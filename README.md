# Nahanni In-Stock Backend API

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)

---

## Overview

This backend application provides a RESTful API for managing language and vocabulary content. The API allows you to read vocabulary and grammar data based on categories and pre-set levels.

## Tech Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MySQL or Knex
- **HTTP Client**: Axios (for communication)
- **Development Tools**: dotenv, Postman

## Setup Instructions

### Steps

1. **Install dependencies:**:
   npm install
2. **Set up the environment variables:**:
   PORT=8080
   DB_HOST=127.0.0.1
   DB_NAME=thats_our_lingo
   DB_USER={YOUR-USERNAME}
   DB_PASSWORD={YOUR-PASSWORD}
3. **Set up a local testing database**
4. **Run database migrations**:
   npx knex migrate:latest
5. **Run db seeds file**:
   npx knex seed:run
6. **Run backend**:
   node server.js

## API Endpoints

### Warehouse Endpoints

| Method | Endpoint                          | Description            |
| ------ | --------------------------------- | ---------------------- |
| GET    | `/vocabulary/:language`           | Get all vocabulary content for a language    |
| GET    | `/vocabulary/:language/:id`       | Get vocabulary content by ID    |


### Inventory Endpoints

| Method | Endpoint                         | Description                 |
| ------ | ----------------------           | --------------------------- |
| GET    | `/grammar/:language`             | Get all grammar content for a language     |
| GET    | `/grammar/:language/quiz/:level` | Get all grammar quiz questions for language and level    |
