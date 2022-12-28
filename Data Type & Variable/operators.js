/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // 11 + 20 + 80 - 11 = 100
console.log(++a + -b + +c++ - -a++ + +a); // 13 - 21 + 81 - - 13 + 14
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 81 + 21 + 13 * 21 - 22 * 13 + 12 -1 

/*
  [++a] [+] [+b++] [+c++] [-] [+a++] | [++a] [-b] [+c++] [-a++] [+a] | [--c] [+b] [--a] [*] [+b++] [+b] [a] [--a] [+true]

  [++a]
  - Value: 11
  - Explain: Preincrement | Add One To The Value
  [+]
  - Explain: Summation
  [+b++]
  - Value : 20 
  - Explain: Postincrement | Convert String To Number 
  [+c++]
  - Value : 80
  - Explain: Postincrement | As The Same 
  [-]
  - Explain: Subtraction
  [+a++]
  - Value : -11
  - Explain: Postincrement | Update The Value Of a And Print The Last Variable Of a
  ================================================
  [++a]
  - Value : 13
  - Explain: Preincrement | Update The Value Of a 
  [-b]
  - Value : -21
  - Explain: Predecrement | Convert String Value To Negative Number And Updat The Value 
  [+c++]
  - Value : 81
  - Explain: Postincremetn | Print The New Value Of c  
  [-a++]
  - Value : -13
  - Explain: Postincremetn | Print The New Value Of a
  [+a]
  - Value : 14
  - Explain: Preincrement | Increment The Value Of a = 13 When Increment It This Print 14
  ================================================
  [--c]
  - Value : 81
  - Explain: Print The Same Value Of c
  [+b]
  - Value : 21
  - Explain: Predecrement | To Convert The String To Number And Increment This Value By 1
  [--a]
  - Value : 13
  - Explain : 
  [*]
  - Expalain : Multiblications
  [+b++]
  - Value : 21
  - Explain: Postincrement Print The Same Value Of b
  [+b]
  - Value : 22
  - Explain: Preincrement And Then Print To Be 22 From 21
  [a]
  - Value : 13
  - Explain: The Original Value Updated And Print The Same Value
  [--a]
  - Value : 12
  - Explain: Predecrement Updated The Value Of a And Decrement This By 1 To Be 12 From The Original Value 13 
  [+true]
  - Value : 1
  - Explain: Unary Operator Print 1 > True If False Print > 0

  Note : Any Variable Related By a,b,c After The First Line Updated To A New Value 
*/


/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(++e * ++g + -d + ++f); // 173