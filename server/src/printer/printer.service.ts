import { Printer } from '@types';
import { Database } from '@db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrinterService {
  async getPrinters(): Promise<Printer[]> {
    return await Database.get();
  }

  async getPrinterById(serie: string): Promise<Printer> {
    return await Database.getById(serie);
  }

  async postPrinter(printer: Printer): Promise<Printer> {
    return await Database.postPrinter(printer);
  }

  async deletePrinter(serie: string): Promise<Printer> {
    return await Database.delete(serie);
  }

  async updatePrinter(serie: string, printer: Printer): Promise<Printer> {
    return await Database.update(serie, printer);
  }
}
