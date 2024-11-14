import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PrinterService } from './printer.service';
import { Printer } from '@types';
import { PrinterDto } from './dto/printer.dto';

@Controller()
export class PrinterController {
  constructor(private readonly printerService: PrinterService) {}

  @Get('/printer')
  async getAll(): Promise<Printer[]> {
    return await this.printerService.getPrinters();
  }

  @Get('/printer/:serie')
  async getById(@Param('serie') serie: string): Promise<Printer> {
    return await this.printerService.getPrinterById(serie);
  }

  @Post('/printer')
  async post(@Body() printer: PrinterDto): Promise<Printer> {
    return await this.printerService.postPrinter(printer);
  }

  @Delete('/printer/:serie')
  async deleteById(@Param('serie') serie: string): Promise<Printer> {
    return await this.printerService.getPrinterById(serie);
  }
}
