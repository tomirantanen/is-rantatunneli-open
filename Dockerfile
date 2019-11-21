FROM node:13.1-alpine AS build

WORKDIR /app
COPY package* ./
RUN npm ci
COPY . .
RUN npm run build


FROM node:13.1-alpine

WORKDIR /app
COPY package* ./
RUN npm ci --production
COPY --from=build /app/dist ./dist

USER node
EXPOSE 3000

CMD ["npm", "start"]
