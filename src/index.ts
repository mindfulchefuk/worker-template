import { handleRequest } from './handler';

this.addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
