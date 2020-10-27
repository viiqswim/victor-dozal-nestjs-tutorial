import { Module } from '@nestjs/common';
import { BeautifulController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [BeautifulController],
  providers: [AppService],
})
export class AppModule {}
