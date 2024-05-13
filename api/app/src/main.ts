import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger, ValidationPipe } from '@nestjs/common'
import { json, urlencoded } from 'express'

const PORT = process.env.PORT ?? 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
    },
  })

  app.enableShutdownHooks()
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: false }))

  app.use(json({ limit: '50mb' }))
  app.use(urlencoded({ extended: true, limit: '50mb' }))

  await app.listen(PORT)
  Logger.log(`🚀 App is listening on http://localhost:${PORT} 🚀`, 'main')
}

bootstrap()
