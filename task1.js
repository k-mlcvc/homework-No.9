/* 
1. Koristeci dvije ugnjezdene for petlje napisi funkciju koja kao ulazni parametar prima niz brojeva,
te kao rezultat vraca sortirani niz brojeva od veceg prema manjem. 

Primjer:
Input: [4,2,6,4,2,1]
Output: [1,2,2,4,4,6]

Dodatno: Pokusaj analizirati koliki bi bio ukupni broj iteracija za niz proizvoljne duzine.
*/

function sortArray(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        x = arr[j];
        arr[j] = arr[i];
        arr[i] = x;
      }
    }
  }
  return arr;
}

const input = [4, 2, 6, 4, 2, 1];
console.log(sortArray(input));

// Dodatno: Pokusaj analizirati koliki bi bio ukupni broj iteracija za niz proizvoljne duzine.
/* Broj iteracija za niz od n članova bio bi n^2 zato što svaki put kad vanjska petlja prođe jednu iteraciju u nizu, 
unutarnja petlja izvrši iteraciju svih n članova tog niza, i tako sve dok vanjska petlja ne izvrši iteraciju svih n članova.
 */

