FROM node:boron
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY index.js /usr/src/app
EXPOSE 3000
CMD ["node", "index.js"]
