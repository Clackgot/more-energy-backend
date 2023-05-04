import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function start() {
  const PORT = process.env.API_SERVER_PORT || 5000;
  const API_SERVER_DOMAIN = process.env.API_SERVER_DOMAIN;
  const TRAEFIK_HTTP_PORT = process.env.TRAEFIK_HTTP_PORT;
  const TRAEFIK_HTTPS_PORT = process.env.TRAEFIK_HTTPS_PORT;
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('my-api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT, () => console.log(`Сервер запущен:\nhttp://${API_SERVER_DOMAIN}:${TRAEFIK_HTTP_PORT}\nhttps://${API_SERVER_DOMAIN}:${TRAEFIK_HTTPS_PORT}`))

}
start()