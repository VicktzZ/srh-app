export type Printer = {
    model: string
    serie: string
    connection: string
    queue: string
    sector: string
    pagesRemaining: number
    percentRemaining: number
    impressions: number
    counter: number
    drum?: number
    color?: {
        c: {
            counter?: number
            impressions?: number
            pagesRemaining: number
        }
        y: {
            counter?: number
            impressions?: number
            pagesRemaining: number
        }
        m: {
            counter?: number
            impressions?: number
            pagesRemaining: number
        }
        k: {
            counter?: number
            impressions?: number
            pagesRemaining: number
        }
    }
}

export type PrinterName = 
'4003DW' |
'M404DW' |
'M408DN' |
'M428FDW' |
'M432FDN' |
'E50145DN' |
'E52645DN' |
'E62655DN' |
'E77822' |
'E78635' |
'CLP-680' |
'ML-4510ND' |
'SL-C3010ND' |
'SL-M4020ND' |
'SL-4070FR' |
'ALARIS 3250' |
'SCANMATE I940' |
'KODAK S2070' |
'KODAK I3200' |
'KODAK I3450' |
'ZEBRA ZD220' |
'ZEBRA ZD230' |
'ZEBRA ZD510' |
'ZT411T' |
'XRX C600' |
'C7120' |
'C8130' |
'OKI C911' |
'LEXMARK MS610DN' |
'LEXMARK E460'

export type PrinterConsumableData = {
    EstimatedPagesRemaining: { _text: string },
    ConsumableState: { _text: string },
    ConsumableRawPercentageLevelRemaining: { _text: string },
    TotalImpressions: { _text: string },
}

export type PEID = Array<
    {
        "_attributes": { "PEID": string }
        "_text": string
    }
>