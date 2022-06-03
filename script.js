/* let myFirstName = "Sahar";

console.log("Samane");
console.log("Samane");
console.log(myFirstName);
console.log(myFirstName);

let days = 4; */

// NUMBER

// let numberType = 4;

// console.log(typeof numberType);

// // STRING
// let stringType = "4";
// console.log(typeof stringType);

// // BOOLEAN
// let booleanType = false;
// console.log(typeof booleanType);

// // UNDEFINED
// let undefinedType;
// console.log(typeof undefinedType);

// // NULL

// let nullType = null;
// console.log(typeof nullType)

// stringType = true;
// console.log(typeof stringType)

// let firstName = "samane";
// firstName = 'sahar';

// var firstName1 = "sahar"
// firstName1 = "ali";

// const birthDate;

// const now = 2023;
// let myAge = now - 1994;
// let saharAge = now - 1994;

// const myFullName = "samane" + " " + "Yaghoobi";

// const isSamaneOlder = saharAge === myAge;

// const elnazWeight = 65;
// const elnazHeight = 1.7;

// const elnazBMI = elnazWeight / elnazHeight ** 2;

// console.log(elnazBMI);

// let elnazStatus;

// if (elnazBMI < 25) {
//   elnazStatus = "healthy";
//   console.log("Elnaz is " + elnazStatus);
// } else {
//   elnazStatus = "overweight";
//   console.log("Elnaz is " + elnazStatus);
// }

// const day = "sunday";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     break;
//   case "sunday":
//     console.log("prepare content");
//     break;
//   case "thursday":
//   case "friday":
//     console.log("record videos");
//     break;
//   default:
//     console.log("not a valid day");
// }

// Logical Operators

// && and
// || or
// ! not

// const age = 17;
// const hasLicense = false;
// if (age >= 18 && hasLicense) {
//   console.log("She can drive");
// } else {
//   console.log("She can't drive yet");
// }

// console.log(true && true && false && true && true)
// console.log(false && true)
// console.log(false && false)

// console.log(true || true);
// console.log(false || true);
// console.log(false || false);

// const hour = 13;
// if (hour < 10 || hour > 18) {
//   console.log("The office is closed");
// } else {
//   console.log("The office is opened");
// }

// const isWeekend = true;
// if (hour > 10 && hour < 18 && !isWeekend) {
//   console.log("The office is opened");
// } else {
//   console.log("The office is closed");
// }

// function nameLogger() {
//   console.log("My name is Samane");
// }

// nameLogger();

// function nameLogger(name) {
//   console.log("My name is " + name);
// }
// nameLogger('Ali')

// function nameLogger(name) {
//   const starName = "****" + name + "****";
//   return starName;
// }

// const samaneReturnedName = nameLogger("Samane");

// const variableFunction = function () {
//   console.log("I am a variable function");
// };

// const age = (now, birthYear) => {
//   const myAge = now - birthYear;
//   const until60 = 60 - myAge;
//   return until60;
// };

// console.log(age(2022, 1996));

// ARRAYS DATA STRUCTURE

// const friend1 = "Sahar";
// const friend2 = "Shirin";
// const friend3 = "Yegane";

// const friends = ["Sahar", "Shirin", "Yegane"];
// console.log(friends);

// const arrayFriend2 = friends[1];
// console.log(arrayFriend2);

// console.log(friends.length);

// const lastArrayFriend = friends[friends.length - 1];
// console.log(lastArrayFriend);

// friends[0] = "Sara";
// console.log(friends);

// console.log(typeof friends);

// const age = (now, birthYear) => {
//     const myAge = now - birthYear;
//     return myAge;
//   };

// const variableArray = [friend3, age(2022,1996), friends];
// console.log(variableArray);

// const friends = ["Sahar", "Shirin", "Yegane", "Sara"];

// const pushReturned = friends.push("Negin");
// console.log(friends, pushReturned);

// friends.unshift("Sima");
// console.log(friends);

// const popReturned = friends.pop();
// console.log(friends, popReturned);

// const shiftReturned = friends.shift();
// console.log(friends, shiftReturned);

// const indexOfSahar = friends.indexOf("Sahar");
// console.log(indexOfSahar);

// const includesValue = friends.includes("Sara");
// console.log(includesValue);

// LOOPS

// let i = 0;

// while (i <= 3) {
//   console.log("i = " + i);
//   i = i + 1;
// }

// console.log("final i = " + i);

// do {
//   console.log("i = " + i);
//   i = i + 1;
// } while (i <= 3);

// for (let i = 0; i <= 3; i = i + 1) {
//   console.log("i = " + i);
// }

// const friends = ["Sahar", "Shirin", "Yegane", "Negin", "nastaran"];

// for (let i = 0; i < friends.length; i = i + 1) {
//   console.log(friends[i]);
// }

// for (let i = friends.length - 1; i >= 0; i = i - 1) {
//   console.log(friends[i]);
// }

const samaneData = [
  "Samane",
  "Yaghoobi",
  26,
  "Software engineer",
  ["Sahar", "Hasti", "Negin", "Mahla"],
];

const samaneObjectData = {
  firstName: "Samane",
  lastName: "Yaghoobi",
  age: 26,
  job: "Software engineer",
  friends: ["Sahar", "Hasti", "Negin", "Mahla"],
};

samaneObjectData.country = "Iran";

console.log(samaneObjectData);

delete samaneObjectData.friends;
console.log(samaneObjectData);
