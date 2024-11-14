import { JSDOM } from 'jsdom'
import decode from 'html-entities-decoder'
import type { Printer } from '@types'

type PrinterType = Record<
    'cyan' | 'yellow' | 'magenta' | 'black',
    Partial<Printer>
>

export function hpEFetch(html: string): Partial<Printer> {
    let printerData: Partial<Printer>

    const HTMLDecoded = decode(html)
    const { document } = (new JSDOM(HTMLDecoded)).window

    const tonerNames = ['Cyan', 'Yellow', 'Magenta', 'Black']

    const toner: PrinterType = {
        cyan: {},
        yellow: {},
        magenta: {},
        black: {}
    }

    for (const t of tonerNames) {
        const pagesRemaining = Number(document.querySelector(`#${t}Cartridge1-EstimatedPagesRemaining`)?.textContent?.replace('>', ''))
        const percentageRemaining = document.querySelector(`#${t}Cartridge1-Header_Level`)?.textContent || '-'
        const counter = Number(document.querySelector(`#${t}Cartridge1-PagesPrintedWithSupply`)?.textContent)
        const consumableState = document.querySelector(`#${t}Cartridge1-SupplyState`)?.textContent === 'OK' ? 'ONLINE' : 'AWAY'


        toner[t.toLowerCase() as keyof typeof toner] = {
            pagesRemaining,
            percentageRemaining,
            consumableState,
            counter
        }
    }

    if (Number.isNaN(toner.cyan.pagesRemaining)) {
        printerData = {
            pagesRemaining: toner.black.pagesRemaining,
            consumableState: toner.black.consumableState,
            percentageRemaining: toner.black.percentageRemaining,
            impressions: toner.black.counter
        }
    } else {
        printerData = {
            pagesRemaining: 0,
            consumableState: 'ONLINE',
            percentageRemaining: 0,
            impressions: 0,
            color: {
                b: `${toner.black.pagesRemaining} - ${String(toner.black.percentageRemaining)?.replace('%', '')}` as unknown as number,
                c: `${toner.cyan.pagesRemaining} - ${String(toner.cyan.percentageRemaining)}` as unknown as number,
                y: `${toner.yellow.pagesRemaining} - ${Sring(toner.yellow.percentageRemaining)}` as unknown as number,
                m: `${toner.magenta.pagesRemaining} - ${String(toner.magenta.percentageRemaining)}` as unknown as number,
                counter: toner.black.counter as number,
                drum: 0
            }
        }
    }
        
    return printerData
}