import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Printer } from './types/printer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  async postDatabase(@Body() printers: Printer[]): Promise<void> {
    await this.appService.postDatabase(printers);
  }
}
