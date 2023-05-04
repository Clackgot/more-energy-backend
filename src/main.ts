import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function start() {
  const PORT = process.env.API_SERVER_PORT || 5000;
  const API_SERVER_DOMAIN = process.env.API_SERVER_DOMAIN;
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('my-api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT, () => console.log(`Сервер запущен на ${API_SERVER_DOMAIN}:${PORT} порту`))

}
start()