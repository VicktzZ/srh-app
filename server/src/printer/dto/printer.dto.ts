import { Printer } from "@types";
import { IsNumber, IsObject, IsString } from "class-validator";

export class PrinterDto implements Printer {
    @IsString() model: string;
    @IsString() serie: string;
    @IsString() connection: string;
    @IsString() queue: string;
    @IsString() sector: string;
    @IsNumber() pagesRemaining: number;
    @IsNumber() percentRemaining: number;
    @IsNumber() impressions: number;
    @IsNumber() counter: number;
    @IsNumber() drum?: number;
    @IsObject() color?: {
        c: {
            counter?: number;
            impressions?: number;
            pagesRemaining: number;
        };
        y: { 
            counter?: number;
            impressions?: number;
            pagesRemaining: number;
        };
        m: {
            counter?: number;
            impressions?: number;
            pagesRemaining: number;   
        }; 
        k: {
            counter?: number;
            impressions?: number;
            pagesRemaining: number;
        }; 
    };
}