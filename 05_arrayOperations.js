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

const multiplyByTwo = [1, 2, 3, 4, 5].map((num) => num * 2);
console.log(multiplyByTwo);

/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 *
 * contraintes:
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
 */

const filterNameStartByA = [
  "Aline",
  "Adrien",
  "Jessica",
  "Véronique",
  "Antoine",
].filter((name) => name.startsWith("A"));
console.log(filterNameStartByA);

/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 *
 * contraintes:
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
 */

const sum = [1, 2, 3, 4, 5, 6, 7].reduce(
  (acc, currentValue) => acc + currentValue,
  0,
);
console.log(sum);

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

const findUserById = [
  { id: 1, name: "John" },
  { id: 2, name: "Doe" },
  { id: 3, name: "Foo" },
  { id: 4, name: "Bar" },
].find((user) => user.id === 3).name;
console.log(findUserById);

module.exports = { multiplyByTwo, filterNameStartByA, sum, findUserById };
