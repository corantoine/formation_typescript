/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 *
 * contraintes:
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 *
 */

const multiplyByTwo = (arr) => arr.map((x) => x * 2);
console.log(multiplyByTwo([1, 2, 3]));

/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 *
 * contraintes:
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
 */

const filterNameStartByA = (arr) => arr.filter((name) => name.startsWith("A"));
console.log(
  filterNameStartByA(["Aline", "Adrien", "Jessica", "Véronique", "Antoine"]),
);

/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 *
 * contraintes:
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
 */

const sum = (arr) => arr.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(sum([1, 2, 3, 4]));

/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 *
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 *
 * contraintes:
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
 */

const findUserById = (arr) => arr.find((user) => user.id === 3).name;

console.log(findUserById([
  { id: 1, name: "John" },
  { id: 2, name: "Doe" },
  { id: 3, name: "Foo" },
  { id: 4, name: "Bar" },
]));

module.exports = { multiplyByTwo, filterNameStartByA, sum, findUserById };
