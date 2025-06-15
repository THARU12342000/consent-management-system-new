# Consent Service

This microservice manages user consents for the Consent Management System.

## Setup

1. Copy `.env.example` to `.env` and add your MongoDB URI and JWT secret.
2. Run `npm install` to install dependencies.
3. Start the server with `npm run dev`.

## API Endpoints

- POST `/api/consents` - Add new consent
- GET `/api/consents/:userId` - Get consents by user
- PUT `/api/consents/:id` - Update consent status
