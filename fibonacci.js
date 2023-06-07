const program = require('commander');
const fs = require('fs');
const chalk = require('chalk');
const { createFibonacci, fibonacciCheck, notValid } = require('./utils');
const uuid = require('uuid');

program
    .option("-v --version")
    .option("-h --help")
    .option("-m --make <int> lunghezza della sequenza da creare")
    .option("-c --check <list> sequenza di fibonacci da controllare")
    .option("-s --separator <char> sepaatore della sequenza default= , da usare con m")
    .option("-w --write scrivi la sequenza in un file txt")

program.parse();
const opzioni = program.opts();

// output dati generali
if (opzioni['version']) return console.log("1.0.0");
if (opzioni['help']) return console.log(" -h    --help     per mostrare questo menu \n -v    --version     per mostrare la versione \n -s    -separator <char>     per specificare il separatore default= ,\n -c    --check <list>     per specificare una lista da controllare \n -m    --make <int>     per specificare la lunghezza della sequenza da produrre \n -w    --write     pet scrivere la sequenza in un file sul desktop");

// funzione di creazione sequenza
if (opzioni['make']) {
    if (isNaN(Number(opzioni['make']))) return console.log(notValid("inserisci un valore numerico")) // controllo se numero
    const data = createFibonacci(opzioni['make']); // creazione sequenza
    console.log(data) // output sequenza

    // scrivi se ha la flag w
    if (opzioni["write"]) {
        const fileName = uuid.v4().slice(0, 8);
        try {
            fs.writeFileSync("./sequenze/sequenza" + fileName + ".txt", data.join());
            console.log(chalk.greenBright.bold("sequenza" + fileName + " salvata con successo"))
        } catch (err) {
            if (err['errno'] == -4058) {
                fs.mkdirSync('./sequenze');
                fs.writeFileSync("./sequenze/sequenza" + fileName + ".txt", data.join());
                console.log(chalk.greenBright.bold("sequenza" + fileName + " salvata con successo"))
            }
        }
    }

}

if (opzioni['check']) {
    let l = [];
    if (!opzioni['separator']) {
        for (let el of opzioni['check'].split(",")) {
            l.push(el)
        }
    } else {
        for (let el of opzioni['check'].split(opzioni['separator'])) {
            l.push(el)
        }
    }
    console.log(fibonacciCheck(l))

}