import { Database } from '@db';
import { Injectable } from '@nestjs/common';
import { Printer } from '@types';

@Injectable()
export class AppService {
  async postDatabase(database: Printer[]): Promise<void> {
    await Database.postDatabase(database)
  }
}
