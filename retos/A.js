function findIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
    const A1 = y2 - y1
    const B1 = x1 - x2
    const C1 = A1 * x1 + B1 * y1

    const A2 = y4 - y3
    const B2 = x3 - x4
    const C2 = A2 * x3 + B2 * y3

    const det = A1 * B2 - A2 * B1

    if (det === 0) {
        return "PARALELAS"
    } else {
        const x = (B2 * C1 - B1 * C2) / det
        const y = (A1 * C2 - A2 * C1) / det
        return `(${x.toFixed(5)}, ${y.toFixed(5)})`
    }
}

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese los 8 numeros de punto flotante (x1, y1, x2, y2, x3, y3, x4, y4) separados por un espacio: ', (line) => {
    const [x1, y1, x2, y2, x3, y3, x4, y4] = line.split(' ').map(parseFloat)
    const result = findIntersection(x1, y1, x2, y2, x3, y3, x4, y4)
    console.log(result)
    rl.close()
})