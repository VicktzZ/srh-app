export type Printer = {
    model: string
    serie: string
    ip: string
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