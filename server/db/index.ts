import type { Printer } from '#types'
import { printerHasUnknownProps } from '$$lib'
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

    public static async post(data: Printer): Promise<void> {
        const currentData = await this.get()
        await fs.writeFile(dataPath, JSON.stringify([ ...currentData, data ]))
    }

    public static async delete(id: Printer['serie']): Promise<void | null> {
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