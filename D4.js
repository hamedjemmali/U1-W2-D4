/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
 
const area=function(l1,l2){
    return l1*l2
} 
console.log(area(10,50))



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
 const crazySum=function(l1,l2){
    if (l1===l2){
        result = (l1+l2)*3
    }else{
        result=l1+l2
    }
    return result
 }
 console.log(crazySum(20,20))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
 
const crazyDiff=function(l1){
if (l1<19){

    result=l1-19
}else{
    result=(l1-19)*3
}



}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = function(n){

    if((n=> 20  && n<= 100) || (n===400)  ) {
        result=true
    }else{
        result=false
    }
return result
}
 


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify =function(str){

    if (str.indexOf("EPICODE")!== 0 ){
        str="EPICODE"+str

    }
return str
}

console.log(epify("EPICODE")) 

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
 
const check3and7 =function(n){
let check=false
if ((n%3===0)||(n%7===0)){
    check=true
}
return check

}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString =function(str){ 
    let str2=""
for(let i = str.length-1;i>-1;i--){
str2=str2+str[i]
}

return str2

}
console.log(reverseString("EPICODE"))


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
  



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
 const cutString=function(str){

 str2=str.slice(1,str.length-1)
 return str2
 }
 console.log(cutString("EPICODE"))



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
 
const giveMeRandom =function(n){
  let arr =[]
    for(let i =0 ; i<n;i++){
       let j=Math.floor(Math.random()*10)
       arr[i]=j

    }
    return arr

}
console.log(giveMeRandom(10))