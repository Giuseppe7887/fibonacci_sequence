const chalk = require('chalk');


function success() {
    return chalk.bold.greenBright('is fibonacci')
}

function notFibonacci() {
    return chalk.bold.redBright('is not fibonacci')
}
function notValid(x) {
    return chalk.bold.bgRedBright(" " + x + " ")
}


function createFibonacci(l) {
    const r = [];
    r.push(1)
    r.push(1)
    for (let i = 2; i < l; i++) {
        r.push(r[i - 1] + r[i - 2]);
    }
    return (r)
}


function fibonacciCheck(v,s) {
    let r;
    let l = v.map(x => {
        return Number(x)
    })
    if(l[0] == 1 && l[1] == 2) return notFibonacci() 
    if (l.length <= 2) return notValid('lunghezza minima 3'); // se lunga 2 falso
    if (l[0] == 1 && l[1] == 1) { // se comincia con 1,1 comincia verifica
        for (let i = 0; i < l.length - 2; i++) { // fermati a due caratteri prima perche gia controllati 
            if (l[i] + l[i + 1] == l[i + 2]) {
                r = true // risposta = true se passa tutte le verifiche
            } else {
                return notFibonacci() // se anche uno sbaglia, ritorna falso
            }
        }
    } else {
        for (let i = 0; i < l.length - 2; i++) { // fermati a due caratteri prima perche gia controllati 
            if (l[i] + l[i + 1] == l[i + 2]) {
                r = true // risposta = true se passa tutte le verifiche
            } else {
                return notFibonacci() // se anche uno sbaglia, ritorna falso
            }
        }
    }

    if (r) return success()
    return notFibonacci()
};




module.exports = {
    createFibonacci: createFibonacci,
    fibonacciCheck: fibonacciCheck,
    notValid: notValid,
    success:success
}


