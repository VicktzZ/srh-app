import { PrinterName } from "./printer"

export enum PrinterExcelColumns {
    SERIE,
    MODELO,
    PREDIO,
    ANDAR,
    BLOCO,
    SETOR,
    OBS,
    FILA,
    CONEXAO,
    SERVIDOR,
    MONITORAMENTO,
    SNMP
}

export type ExcelDefaultPrinter = {
    serie: string
    model: PrinterName
    sector: string
    block: string,
    floor: string
    building: string
    connection: string,
    queue: string,
    SNMP: string
}
