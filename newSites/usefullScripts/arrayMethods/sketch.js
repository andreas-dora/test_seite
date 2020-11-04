var stack = [];
stack.push("eins");
stack.push("zwei");
stack.push("drei");
stack.push("vier", "fünf", "sechs");

console.log(stack.indexOf('zwei'));
//----------------

// var contacts = [
//   {
//     firstName: 'Britta',
//     lastName: 'Master',
//     email: 'britta@test.de'
//   },
//   {
//     firstName: 'Andi',
//     lastName: 'Dora',
//     email: 'andi.dora@test.de'
//   },
//   {
//     firstName: 'Elira',
//     lastName: 'Klaviara',
//     email: 'elvira@klaviara.de'
//   }
// ]

// function compareByFirstName(contact1, contact2){
//   return contact1.firstName.localeCompare(contact2.firstName)
// }

// contacts.sort(compareByFirstName);
// console.group(contacts);

// ----------------------------

// var werte = [
//   7, 9, 6, 3, 8, 2, 4, 1, 5
// ];

// function compare(wert1, wert2){
//   if (wert1 < wert2){
//     return -1;
//   }
//   else if(wert1 > wert2){
//     return 1;
//   }
//   else {
//     return 0;
//   }
// }

// werte.sort(compare);
// console.log(werte);


// var todoList = [
//   '0. Aufstehen',
//   '1. Frühstück',
//   '2. Einkaufen',
//   '3. Aufräumen',
//   '4. Daten sichern',
//   '5. Coding',
//   '6. Datenabgleich',
//   '7. Workout'
// ];

// var teil = todoList.slice(2,-1);
// console.log(teil);

// var item1 = todoList.splice(2, 2, 'Faulenzen');
// console.log(todoList);

// todoList.splice(3, 0, 'Daten sichern');
// console.log(todoList);

// var todoList = [];

// var plusPunkt;

// plusPunkt = todoList.push('Bad putzen');
// plusPunkt = todoList.push('Einkaufen');
// plusPunkt = todoList.push('Rasen mähen');
// plusPunkt = todoList.push('Kochen');

// plusPunkt = todoList.unshift('Frühstück');

// console.log(todoList);

