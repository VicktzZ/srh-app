import path from 'path'
import fs from 'fs';
import Excel, { type RowValues, type Worksheet } from 'exceljs'
import { HPLink, HP_E_Link, SWSLink } from '$$constants';
import { PrinterExcelColumns as colsEnum, type ExcelDefaultPrinter, type Printer } from '#types'

const workbook = new Excel.Workbook()
const filePath = path.join(__dirname, '/data.xlsx')

export async function convertXSLStoJSON() {
    await workbook.xlsx.readFile(filePath).then(() => {
        workbook.getWorksheet()?.getSheetValues().shift()
         
        const excelValues = workbook.getWorksheet()?.getSheetValues().map((row: RowValues): ExcelDefaultPrinter => {
            let r = row as string[]

            r.shift()
            r = r.map(i => !i ? '-' : i)
            

            let floor = r[colsEnum.ANDAR]
            let building = r[colsEnum.PREDIO]
            
            if (r[colsEnum.ANDAR].includes('SUBSOLO')) floor = `${r[colsEnum.ANDAR][0]}SS`
            if (r[colsEnum.PREDIO] === 'HOSPITAL NOVE DE JULHO') building = 'H9J'

            return {
                serie: String(r[colsEnum.SERIE]).trim(),
                model: r[colsEnum.MODELO],
                sector: r[colsEnum.SETOR],
                block: r[colsEnum.BLOCO],
                floor,
                building,
                connection: r[colsEnum.CONEXAO],
                queue: r[colsEnum.FILA],
                SNMP: r[colsEnum.SNMP]
            }
        })

        excelValues?.shift()
        excelValues?.shift()

        // sheets = sheets.map(sheet => sheet.map((printer: Printer) => {
        //     printer.sector = printer.sector.toUpperCase()

        //     let ip: any = printer.ip
        //     ip = (ip?.hyperlink?.replace('https', 'http') || printer.ip) || 'SEM IP'
        //     ip = (ip?.endsWith('/') ? ip?.slice(0, ip.length - 1) : ip)

        //     const convertIp = (printerModel: ConvertedPrinterName): Partial<Record<ConvertedPrinterName | '', string>> => {

        //         if (ip?.includes('sds')) {
        //             printerModel = '' as ConvertedPrinterName
        //         } else if (
        //             printerModel === 'HP 4003' ||
        //             printerModel === 'HP 404' ||
        //             printerModel === 'HP 428'
        //         ) {
        //             printerModel = ((ip !== 'SEM IP' || ip !== 'IP') ? 'default' : '') as ConvertedPrinterName
        //         }

        //         const model = (
        //             printerModel.includes('SAM') || printerModel === 'HP 432' || printerModel === 'HP 408'
        //         ) ? 'SAM & 400 SERIES' :
        //             (
        //                 printerModel.includes('HP E') || printerModel.includes('HP X')
        //             ) ? 'HP E SERIES' : 'default'
                
        //         const adresses = {
        //             'SAM & 400 SERIES': SWSLink,
        //             'HP E SERIES': HP_E_Link,
        //             'default': HPLink,
        //         }

        //         return ip + (adresses[model] as Partial<Record<ConvertedPrinterName | 'default', string>> || '')
        //     }

        //     const convertedIp = convertIp(printer.model)

        //     return {
        //         ...printer,
        //         ip: convertedIp
        //     }
        // }))

        // const links = {
        //     internal: sheets[0],
        //     external: sheets[1],
        // }

        fs.writeFile('output.json', JSON.stringify(excelValues), err => err)
    })
}

await convertXSLStoJSON()
