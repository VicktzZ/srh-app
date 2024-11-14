import { printersData } from '@db'
import type { Bundle, PrinterData } from '@types'
import { db } from '@lib/services/database'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'

export async function getPrintersData(bundle: Bundle) {
    const data: PrinterData[] = []

    const printers = printersData?.[bundle]

    console.log(`\nFetching ${bundle.toUpperCase()} printers...`.magenta);

    for (const printer of printers) {
        data.push(await fetchPrinter(printer, bundle))
    }

    console.log('Updating printers...'.yellow);

    return data
}