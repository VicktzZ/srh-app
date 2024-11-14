import type { Printer } from '@types'
import { printerHasUnknownProps } from '@lib'
import fs from 'fs/promises'

const dataPath = (__dirname + '\\db.json')

export class Database {
    public static async get(): Promise<Printer[]> {
        const data = JSON.parse(await fs.readFile(dataPath, 'utf-8')) as unknown as Printer[]
        return data
    }

    public static async getById(id: Printer['serie']): Promise<Printer | null> {
        const prn = (await this.get()).find(printer => printer.serie === id)
        return prn || null
    }

    public static async postPrinter(data: Printer): Promise<Printer> {
        if (data) {
            const currentData = await this.get()
            console.log(currentData)
            await fs.writeFile(dataPath, JSON.stringify([ ...currentData, data ]))
        }

        return data
    }

    public static async postDatabase(data: Printer[]): Promise<Printer[]> {
        if (data) {
            await fs.writeFile(dataPath, JSON.stringify(data))
        }

        return data || null
    }

    public static async delete(id: Printer['serie']): Promise<Printer | null> {
        const data = await this.get()
        const prn = data.find(printer => printer.serie === id)
        
        if (!prn || !id) {
            return null
        }

        const i = data.indexOf(prn)

        if (i > -1) {
            data.splice(i, 1)
            await fs.writeFile(dataPath, JSON.stringify(data))
        } else return null
    }

    public static async update(id: Printer['serie'], data: Partial<Printer>) {
        const currentData = await this.get()
        const prn = currentData.find(printer => printer.serie === id)

        if (!prn || !id || !data || printerHasUnknownProps(prn)) {
            return null
        }
        
        const i = currentData.indexOf(prn)
        
        if (i > -1) {
            currentData.splice(i, 1, { ...prn, ...data })
            await fs.writeFile(dataPath, JSON.stringify(currentData))
        } else return null
    }
}