import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Database } from '@db';
import { Printer } from '@types';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  
  setInterval(async () => {
    await Database.postPrinter({ connection: 'a' } as Printer)
    // console.log('a')
  }, 2000)
}

bootstrap();
