import { Module } from '@nestjs/common';
import { MyBeautifulController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [MyBeautifulController],
  providers: [AppService],
})
export class AppModule {}
