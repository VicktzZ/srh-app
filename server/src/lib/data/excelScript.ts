import path from 'path'
import fs from 'fs';
import Excel, { type RowValues } from 'exceljs'
import { HPLink, HP_E_Link, SWSLink } from '@constants';
import { PrinterExcelColumns as colsEnum, PrinterName, type ExcelDefaultPrinter } from '@types'

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
                model: r[colsEnum.MODELO] as PrinterName,
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
        
        const values = excelValues.map(prn => {
            prn.sector = prn.sector.toUpperCase()

            let connection: any = prn.connection
            let isUSB = false

            if (!prn.connection) prn.connection = '-'

            if (prn.connection !== '-' && prn.connection.toUpperCase() !== 'USB') {
                connection = (connection?.hyperlink?.replace('https', 'http') || prn.connection) || 'SEM IP'
                connection = (connection?.endsWith('/') ? connection?.slice(0, connection.length - 1) : connection)
            } else isUSB = true

            const convertIp = (printerModel: PrinterName): Partial<Record<PrinterName | '', string>> => {
                        const model = (
                            printerModel.includes('-') || printerModel === 'M432FDN' || printerModel === 'M408DN' || printerModel === 'CLP-680'
                        ) ? 'SAM & 400 SERIES' :
                            (
                                printerModel.startsWith('E')
                            ) ? 'HP E SERIES' : 'default'
                        
                        const adresses = {
                            'SAM & 400 SERIES': SWSLink,
                            'HP E SERIES': HP_E_Link,
                            'default': HPLink,
                        }
                        if (!isUSB) {
                            connection = 'http://' + connection + (adresses[model] as Partial<Record<PrinterName | 'default', string>> || '')
                        }

                        return connection
                    }
        
                    const convertedIp = convertIp(prn.model)
        
                    return {
                        ...prn,
                        connection: convertedIp
                    }
        })

        fs.writeFile('prn-to-fetch.json', JSON.stringify(values), err => err)
    })
}

await convertXSLStoJSON()
