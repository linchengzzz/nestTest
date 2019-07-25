import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        bodyParser: true,
    });
    await app.listen(3000);
}

bootstrap().then(() => Logger.log('----- Listen: http://localhost:3000/ -----', 'Sever Start'));
