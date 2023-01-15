/* 
2. Napisi funkciju koja ce primiti proizvoljan string kao ulaz. Funkcija ce potom provjeriti jesu li
u tom stringu sve zagrade ispravno napisane. Ukoliko je svaka zagrada zatvorena rezultat funkcije 
ce biti true, ukoliko zagrade nisu ispravno zatvorene rezultat ce biti false.

Primjer 1: 
Input: '(a+b) * (c - d)'
Output: true

Primjer 2: 
Input: '(a+b * (c - d)'
Output: false

Primjer 3: 
Input: '(c * (a+b)) * (x - (y * (c - d)))'
Output: true
*/

function bracketParity(string) {
    openingBrackets = string.length - string.replaceAll("(", "").length;
    closingBrackets = string.length - string.replaceAll(")", "").length;
    
    return openingBrackets === closingBrackets ? true : false;
  }
  
  const string1 = "(a+b) * (c - d)";
  const string2 = "(a+b * (c - d)";
  const string3 = "(c * (a+b)) * (x - (y * (c - d)))";
  
  console.log(bracketParity(string1));
  console.log(bracketParity(string2));
  console.log(bracketParity(string3));

  