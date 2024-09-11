import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GeminiController } from './infrastructure/ia/gemini.controller';
import { GeminiService } from './infrastructure/ia/gemini.service';
import { GeminiModule } from './infrastructure/ia/gemini.module';

@Module({
  imports: [ConfigModule.forRoot(), GeminiModule],
  controllers: [AppController, GeminiController],
  providers: [AppService, GeminiService],
})
export class AppModule {}
