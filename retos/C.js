const readline = require('readline')

function permutations(input) {
    const result = []
    function permute(current, remaining) {
        if (current.length === input.length) {
            result.push(current)
            return
        }
        for (let i = 0; i < input.length; i++) {
            permute(current + input[i], input)
        }
    }

    permute('', input)
    return result
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question('Ingrese la cadena de caracteres entre 3 y 50 caracteres: ', (input) => {
        const perms = permutations(input)
        perms.forEach(permutation => console.log(permutation))
        rl.close()
    })
}
main()