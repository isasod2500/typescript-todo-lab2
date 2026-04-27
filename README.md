# Laboration 2 - Typescript OOP

## [Netlify - lab2](https://typescript-lab2.netlify.app/)

Webbplats för att lagra att-göra uppgifter, som använder sig av localstorage. Formulär för att fylla information om uppgifterna och alternativ för att markera dem som klara alternativt ta bort dem.
Localstorage utläses automatiskt vid hämtning av webbplats, publicering av uppgift och radering av uppgift.

Egenskaper för kod:

| Klass/funktion/interface | Beskrivning  | Inkommande värde  | returnvärde  |
|---|---|---|---|
| TodoInterface  | Struktur för todo   | taskname(str), description(str), deadline(str), priority(num) och completed(bool)  |  n/a |
| todo  | Klass för todo, som tar från TodoInterface  | som ovan + id(num)  | n/a  |
| todoManager  | Klass som sköter funktioner för todo, så som add, remove och mark completed  | todo[]  |  n/a |
| addTodo  | Funktion för addering av todo  | todo: todo  | boolean: true/false  |
|  removeTodo | Funktion som tar bort todo  | id: number  | void  |
|  todoCompleted | Funktion som markerar och flyttar todo från klar till avslutad  | id:number   | void  |
|  Storage | Klass för localstorage.  | todos: todo[]  |  n/a |
|  storeTodo | Funktion för att lagra korrekt inmatad todo  | todos: todo[]   | n/a  |
| getTodo  | Funktion, läser todo från localstorage  | todo[]  | n/a  |
