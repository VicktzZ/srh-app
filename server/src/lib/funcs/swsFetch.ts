export function swsFetch(text: string) {
    const tonerRegex = /remaining: (\d+)/g;
    const tonerCounterRegex = /cnt: (\d+)/g;
    const matches = [];

    let match
    let counterMatch

    counterMatch = tonerCounterRegex?.exec(text)[1]

    while ((match = tonerRegex.exec(text)) !== null) {
        matches.push(match[1]);
    }

    const toner = {
        black: Number(matches[0]),
        cyan: Number(matches[1]),
        magenta: Number(matches[2]),
        yellow: Number(matches[3]),
        drum: Number(matches[4]),
        counter: Number(counterMatch)
    }

    return {
        consumableState: 'ONLINE',
        toner
    }
}