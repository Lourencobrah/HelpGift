import { Body, Controller, Get, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';

@Controller()
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('/content')
  async generateContent(@Body('prompt') prompt: string): Promise<string> {
    return this.geminiService.generateContent(prompt);
  }
}
