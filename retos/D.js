function decimalToBinary(n, b) {
    let binary = ''
    for (let i = b - 1; i >= 0; i--) {
        const bitValue = (n >> i) & 1
        binary += bitValue
    }
    return binary
}

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese el número entero y el tamaño en bytes separados por espacio: ', (input) => {
    const [number, bytes] = input.split(' ').map(Number)
    if (number <= 10000 && bytes <= 32) {
        const binaryRepresentation = decimalToBinary(number, bytes)
        console.log(binaryRepresentation.padStart(bytes, '0'))
    }
    rl.close()
})