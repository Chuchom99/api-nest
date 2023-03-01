import { Module } from '@nestjs/common';
import { qrCodeModule } from './QRGen/qrgen.modules';
import { moviesModule } from './Movies/movie.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [moviesModule, qrCodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
