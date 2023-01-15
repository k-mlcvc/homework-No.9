/* 
3. Napisi funkciju koja ce primiti niz sljedecih tokena proizvoljnog redoslijeda:
hello_world, winter_assignment, first_week, second_week, success_result, fail_result

a) Funkcija ce svaki token zamijeniti sa sljedecim recenicama i kao rezultat ih spojiti u string:
hello_world - Pozdrav svima, mi smo studenti!
winter_assignment - Za praznike smo dobili domaci.
first_week - Prvi tjedan smo odmarali.
second_week - Drugi tjedan smo radili.
success_result - Svi koji su uspjesno rjesili su odmarali i dalje.
fail_result - Oni koji nisu uspjesno rjesili radili su vise. 

Ako niz sadrzi token koji nije prepoznat, funkcija ce ga zamjeniti sa: 'ERROR: UNDEFINED TOKEN'

b) File ce kao ulazni parametar (process.argv) primati jezik. Ukoliko je jezik en funkcija ce tokene
zamjeniti sa engleskim recenicama. Ukoliko je jezik hr ili bilo koji drugi, funkcija ce tokene zamjeniti 
sa prethodno navedenim hrvatskim recenicama.
*/

function mapTokens(arr) {
    let stringArray = arr.map((item) => {
      const locale = process.argv[2] || "hr";
      const TRANSLATION = {
        en: require("./i18n/en.json"),
        hr: require("./i18n/hr.json"),
      };
      const translation = TRANSLATION[locale] || TRANSLATION.hr;
      return translation[item] || "ERROR: UNDEFINED TOKEN";
    });
    let text = stringArray.join(" ");
    return text;
  }
  
  const tokens = [
    "hello_world",
    "winter_assignment",
    "first_week",
    "second_week",
    "success_result",
    "fail_result",
    "undefined_token",
  ];
  
  console.log(mapTokens(tokens));

  