# Order Service

This microservice manages product orders for the Consent Management System.

## Setup

1. Copy `.env.example` to `.env` and add your MongoDB URI and JWT secret.
2. Run `npm install` to install dependencies.
3. Start the server with `npm run dev`.

## API Endpoints

- POST `/api/orders` - Place a new order (requires auth)
- GET `/api/orders/:userId` - Get orders for a specific user
