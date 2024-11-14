import { ResponseStatus } from "@constants"
import type { PEID, PrinterConsumableData, Printer } from "@types"
import convert from 'xml-js';

const { FAILED_TO_OPEN_SOCKET, INVALID_ARG_VALUE } = ResponseStatus

export function hpFetch(printerData: string): Printer | Record<string, string> {
    let data

    try {
        const convertedData = convert.xml2js(
            printerData,
            {
                ignoreComment: true,
                compact: true,
                elementNameFn(value) {
                    return value.replace('pudyn:', '').replace('dd:', '')
                }
            }
        ) as Record<string, any>

        const printerConsumableData: PrinterConsumableData = convertedData?.['ProductUsageDyn']['ConsumableSubunit']['Consumable']
        const peid: PEID = convertedData['ProductUsageDyn']['PonyExpressSubunit']['PECounter']

        const counter = Number(peid.filter(peid => peid['_attributes'].PEID === '5106')[0]._text)

        data = {
            pagesRemaining: Number(printerConsumableData?.EstimatedPagesRemaining._text || ''),
            consumableState: ((printerConsumableData?.ConsumableState._text.toUpperCase() === 'OK' ? 'ONLINE' : 'AWAY') || '') as Printer['consumableState'],
            percentageRemaining: printerConsumableData?.ConsumableRawPercentageLevelRemaining._text + '%' || '',
            totalImpressions: Number(printerConsumableData?.TotalImpressions._text) || 0,
            counter
        }
    } catch (_) {
        return {}
    }

    return data
}