
# Gaming Leaderboard System

A scalable and high-performance leaderboard system designed to handle large volumes of player activity using optimized APIs, caching, database indexing, and monitoring.

This project demonstrates backend engineering skills in:

* Performance Optimization
* Concurrency Handling
* System Design
* Caching Strategies
* Observability & Monitoring

---

## Tech Stack

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### Caching

* Redis

### Monitoring

* New Relic

### Frontend

* React.js

### Load Testing

* Node.js simulation script

---

## Features

* Submit player scores
* Retrieve Top 10 leaderboard rankings
* Fetch individual player rank
* Redis caching for faster leaderboard reads
* Database indexing for optimized queries
* Transaction handling for atomic score updates
* Load simulation to mimic real-world traffic
* API performance monitoring using New Relic
* Live-updating frontend leaderboard UI

---

## System Architecture

### Components

* Node.js API Server
* PostgreSQL Database
* Redis Cache Layer
* New Relic Monitoring
* React Frontend

---

### System Flow

1. Player submits score
2. Score stored in `game_sessions` table
3. Aggregated leaderboard updated
4. Redis cache invalidated
5. Top leaderboard served via Redis cache
6. Frontend fetches live leaderboard data

---

## Database Schema

### 1️ Users

Stores player information.

### 2️ Game Sessions

Stores individual score submissions.

### 3️ Leaderboard

Stores aggregated scores and ranking per user.
---

## API Endpoints

### Submit Score

```
POST /api/leaderboard/submit
```

**Request Body**

```json
{
  "user_id": 1,
  "score": 500
}
```

---

### Get Top Players

```
GET /api/leaderboard/top
```

---

### Get Player Rank

```
GET /api/leaderboard/rank/{user_id}
```

---

## Performance Optimizations

* Indexed database queries
* Redis caching for leaderboard endpoint
* Transaction-based atomic score updates
* Reduced latency under repeated reads
* Load testing to validate system stability

---

## Load Testing

Simulates:

* Continuous score submissions
* Leaderboard reads
* Rank lookups

Run:

```bash
node loadTest.js
```

---

## Monitoring

New Relic is integrated to monitor:

* API latency
* Throughput
* Database queries
* Overall system performance

---

## Frontend

The React UI provides:

* Live leaderboard display
* Player rank lookup
* Automatic refresh

---

## Project Structure

```
gaming-leaderboard-system/

│── backend/
│     ├── Express API
│     ├── PostgreSQL integration
│     ├── Redis caching
│     └── Load test script
│
│── frontend/
│     └── React leaderboard UI
│
│── ARCHITECTURE.md
│── PERFORMANCE.md
│── README.md
```

---

## Setup Instructions

### Backend Setup

```bash
cd backend
npm install
npm start
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the `backend` folder:

```
PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
NEW_RELIC_LICENSE_KEY=
```

## Screenshots

### Leaderboard UI
![Leaderboard UI](https://github.com/user-attachments/assets/b54ff861-9285-4421-b2fb-2a9f533b6d85)

### Monitoring Dashboard
![New Relic Dashboard](https://github.com/user-attachments/assets/51177953-b854-4720-beeb-bb17bd123681)
![New Relic Dashboard](https://github.com/user-attachments/assets/422e30f2-b984-49f2-8e88-d4f7ef1b4d89)
---

## Future Improvements

* WebSocket-based real-time leaderboard
* Authentication & user accounts
* Dockerized deployment
* Horizontal scaling
* CDN caching layer

---

