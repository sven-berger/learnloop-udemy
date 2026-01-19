"use strict";

const myVar = "Hallo Welt";
const myLet = 42 + 234.65;
const myArr = ["Ich", "bin", "ein", "Gummibär"];
const myObj = {
  name: "Bazinga",
  newsoftheday:
    "Pustekuchen ist kein Kuchen auf den man pustet - Aber man kann auf Kuchen pusten.",
};

let mySet = new Set();

mySet.add(1 + 1 - 52 + 120);
mySet.add(myVar);
mySet.add(myLet);
mySet.add(myArr);
mySet.add(myObj);

console.log(mySet);
