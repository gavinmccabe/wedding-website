FROM node:23-alpine3.20

COPY package*.json ./

RUN npm ci

COPY . .

ARG RSVP_EMAIL_USER
ENV RSVP_EMAIL_USER=$RSVP_EMAIL_USER

ARG RSVP_EMAIL_PASS
ENV RSVP_EMAIL_PASS=$RSVP_EMAIL_PASS

ARG RSVP_EMAIL_HOST
ENV RSVP_EMAIL_HOST=$RSVP_EMAIL_HOST

ARG RSVP_EMAIL_DEST
ENV RSVP_EMAIL_DEST=$RSVP_EMAIL_DEST

RUN npm run build

CMD ["node", "build"]