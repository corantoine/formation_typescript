/**
 * Exercice 13: Promise
 *
 * Créer une fonction `fetchUsername(userId)` qui :
 * - Prend un `userId` de type number
 * - Retourne une `Promise<string>` contenant le nom d'utilisateur
 * - Utilise l'API JSONPlaceholder : https://jsonplaceholder.typicode.com/users/{userId}
 *
 * L'API retourne un objet utilisateur avec une propriété `username`.
 *
 * Exemple:
 *   await fetchUsername(1) => "Bret"
 *   await fetchUsername(2) => "Antonette"
 *
 * Note: Utilisez fetch() ou axios pour effectuer la requête HTTP.
 */

// TODO: Implémenter fetchUsername

type UserData = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
  }

export async function fetchUsername(userId: number): Promise<string> {
const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
const data = (await res.json() as UserData);
console.log(data.username)
return data.username
}

console.log(fetchUsername(1));
console.log(fetchUsername(2));

