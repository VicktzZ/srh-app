import type { Printer, PrinterName } from '@types'
import { fetchWithTimeout } from './funcs/fetchWithTimeout'
import { hpEFetch, hpFetch, swsFetch } from './funcs'

const fetchOptions = {
    "headers": {
        "Accept": "*/*",
        "User-Agent": "0c21e4d97c504e1c85f37350b0e4f58c",
        "accept-language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "cookie": "language=bp; xuser=SWS2.0, sessionid=0c21e4d97c504e1c85f37350b0e4f58c",
        "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    "body": null,
    "method": "GET",
    tls: { rejectUnauthorized: false }
}

export async function fetchPrinter(printer: Printer): Promise<Printer> {
    let response: Printer

    if (printer.connection !== '-' && printer.connection !== 'USB') {
        try {
            const textResponse = await fetchWithTimeout(printer.connection, { ...fetchOptions, timeout: 1500 })
                .then(async response => await response.text())
    
            if (printer.connection.includes('sws')) response = { ...printer, ...swsFetch(textResponse) }
            else if (printer.connection.includes('hp')) response = { ...printer, ...hpEFetch(textResponse) }
            else if (printer.connection.includes('DevMgmt')) response = { ...printer, ...hpFetch(textResponse) }
            else response = printer
        } catch (_) {
            response = printer
        }
    } else response = printer
    
    return response
}