import { Router } from '@stricjs/router'

export default new Router({ port: 3000 })
  .get('/', () => new Response('Hello world'))
  .post('/json', ctx => ctx.json().then(Response.json))
