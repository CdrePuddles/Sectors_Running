FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

EXPOSE 5173

# We won't copy app files here, we'll volume mount them instead for HMR
CMD ["npm", "run", "dev", "--", "--host"]