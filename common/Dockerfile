# --- Stage 1: Build TypeScript project ---
FROM node:23-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./
COPY src ./src

RUN npm install && npx tsc

# --- Stage 2: Use Verdaccio and publish the package ---
FROM verdaccio/verdaccio:latest

WORKDIR /app

# Copy built package from the builder stage
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/dist /app/dist

EXPOSE 4873

CMD ["verdaccio"]

