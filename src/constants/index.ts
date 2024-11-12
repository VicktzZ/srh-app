import type { ConvertedPrinterName, PrinterName } from "$/types"

export const HPLink = '/DevMgmt/ProductUsageDyn.xml'
export const HP_E_Link = '/hp/device/InternalPages/Index?id=SuppliesStatus'
export const SWSLink= '/sws/app/information/home/home.json'

export const ResponseStatus = {
    OK: 200,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    SERVER_ERROR: 500,
    FORBIDDEN: 403,
    FAILED_TO_OPEN_SOCKET: 'FAILEDTOOPENSOCKET',
    INVALID_ARG_VALUE: 'ERR_INVALID_ARG_VALUE'
}

export const CONVERT_PRINTERS_MODEL = (printerName: PrinterName): ConvertedPrinterName => {
    const printers = {
        'E50145DN': "HP E50",
        'C8130': 'XRX C8130',
        'E52645C': "HP E52",
       'E52645DN': "HP E52",
        'E62655DN': "HP E62",
        'M404DW': 'HP 404',
       'M428FDW': 'HP 428',
        'M432FDN': 'HP 432',
        'MFP432': 'HP 432',
        'X55745': 'HP X55',
        'M408DN': 'HP 408',
        'M408FDW': 'HP 408',
        "4003DW": 'HP 4003',
        "HP E77830DN": 'HP E77',
        "MFP E52645": 'HP E52',
        'XRX C600': 'XRX C600',
        'SL-C3010ND': 'SAM C3010',
        'SL-M4020ND': 'SAM M4020',
        'ML-5010ND': 'SAM 5010',
        'SL-4070FR': 'SAM 4070',
        default: printerName
    }

    return printers[printerName] as ConvertedPrinterName
}