const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function printNumbers(start, end, thread) {
    for (let i = start; i <= end; i += 2) {
        console.log(`Hilo ${thread}: ${i}`)
    }
}

if (isMainThread) {
    readline.question('Ingrese un número entero positivo: ', (n) => {
        const number = parseInt(n, 10)
        if (isNaN(number) || number <= 0 || number > 500) {
            console.log('Ingrese un número entero positivo menor o igual a 500.')
            readline.close()
            return
        }
        
        const worker1 = new Worker(__filename, { workerData: { max: number, start: 2, step: 4, thread: 1 } })
        const worker2 = new Worker(__filename, { workerData: { max: number, start: 1, step: 4, thread: 2 } })

        worker1.on('exit', () => {
            const worker3 = new Worker(__filename, { workerData: { max: number, start: 3, step: 4, thread: 1 } })
            const worker4 = new Worker(__filename, { workerData: { max: number, start: 4, step: 4, thread: 2 } })
            readline.close()
        })
    })
} else {
    const { max, start, step, thread } = workerData
    for (let i = start; i <= max; i += step) {
        console.log(`Hilo ${thread}: ${i}`)
    }
}