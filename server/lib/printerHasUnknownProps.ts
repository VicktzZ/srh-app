import type { Printer } from "#types";

const printerModel: Printer = {
    connection: '',
    counter: 0,
    impressions: 0,
    model: '',
    pagesRemaining: 0,
    percentRemaining: 0,
    queue: '',
    sector: '',
    serie: '',
    drum: 0,
    color: { 
        c: { pagesRemaining: 0 },
        y: { pagesRemaining: 0 },
        m: { pagesRemaining: 0 },
        k: { pagesRemaining: 0 }
    }
}

export function printerHasUnknownProps(data: Printer) {
    const props = Object.keys(data).map(prop => (Object.keys(printerModel)).includes(prop))
    return props.includes(false)
}