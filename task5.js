/* 
5. Istrazi kako se koristi reduce metoda. Koristeci reduce metodu napisi dvije funkcije:
a) Prva funkcija racuna sumu niza brojeva

Primjer:
Input: [1,2,3,4]
Output: 10

b) Druga funkcija zbraja sve brojeve vece od 4, a oduzima sve manje

Primjer:
Input: [2,4,10,20]
Output: 24
*/

// a)
const arr1 = [1, 2, 3, 4];

let sum = arr1.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);

// b)
const arr2 = [2, 4, 10, 20];

let reducer = (accumulator, currentValue) => {
    if (currentValue > 4) {
      accumulator += currentValue;
    } else {
      accumulator -= currentValue;
    }
    return accumulator;
  };
  
  const total = arr2.reduce(reducer, 0);
  console.log(total);

  