import Fastify from 'fastify'
import cors from '@fastify/cors'
import { APP_PORT, HOST_PORT } from './app.vars'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query'],
});

async function bootstrap(){
  const fastify = Fastify({
    logger: true
  })

  await fastify.register(cors,{
    origin: true // TODO: change to specific origin
  })

  fastify.get('/pools/count', async () => {
    const count = await prisma.pool.count();
    return { count };
  })

  await fastify.listen({ port: APP_PORT, host: HOST_PORT })
}

bootstrap()