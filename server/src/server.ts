import Fastify from 'fastify'
import { APP_PORT } from './app.vars'

async function bootstrap(){
  const fastify = Fastify({
    logger: true
  })

  fastify.get('/pools/count', async () => {
    return { count: 1 }
  })

  await fastify.listen({ port: APP_PORT})
}

bootstrap()