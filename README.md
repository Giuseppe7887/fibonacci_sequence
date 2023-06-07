<h1>GENERATORE DI DI SEQUENZA DI FIBONACCI</h1>

##### - Requirements

* **chalk**
* **commander**
* **uuid**
* **NodeJS**

---

#### SET-UP ED INSTALLAZIONE

```bash
npm install chalk commander uuid
```
or
```bash
npm install
```

## UTILIZZO

* **-v** --version (ritorna la versione del programma)
* **-h** --help (per ricevere aiuto)
  
#### CREAZIONE SEQUENZA

* **-m** --make \<int> (lunghezza della sequenza di fibonacci)
  
#### CONTROLLO SEQUENZA

* **-c** --check \<list> (lista di interi separati da virgola da controllare se è una sequenza di fibonacci)
* **-s** --separator \<char> (separatore della sequenza da usare con --make default= ,)
* **-w** --write per scrivere la sequenza in un file txt generato automaticamente


#### ESEMPI

* Creare una lista di lunghezza 4

```js
node fibonacci.js --make=4
>>> [1,1,2,3]
```
* Controllare se una lista è una sequenza di fibonacci oppure no

```bash
node fibonacci.js -c 1,1,2,3
>>> is fibonacci
```
```bash
node fibonacci.js --check 1,3,6
>>> is not fibonacci
```

* Altri comandi
  
```bash
  # controllare versione

  node .\fibonacci.js -v
  >>> 1.0.0

  # cambiare separatore per controllo lista

  node .\fibonacci.js -c 1-1-2  --separator=-
  >>> is fibonacci

  # scrivere la sequenza in un file creato randomicamente nella cartella /sequenze

  node .\fibonacci.js -m 10 -w

  # ricevere aiuto

  node .\fibonacci.js -h 
  >>> -h    --help     per mostrare questo menu 
  >>> -v    --version     per mostrare la versione 
  >>> -s    -separator <char>     per specificare il separatore default= ,
  >>> -c    --check <list>     per specificare una lista da controllare 
  >>> -m    --make <int>     per specificare la lunghezza della sequenza da produrre 
  >>> -w    --write     pet scrivere la sequenza in un file sul desktop
```

