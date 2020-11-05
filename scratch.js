let name = "Andrea Flanders";
let age = 30;
let birthday = "March 5";
let detroitGC = false;
let lifeEvents = [
    `I grew up in Lake Orion, MI`,
    `I went to MSU`,
    `I lived in Chicago for 5 years after college`,
    `I am getting all new windows in my house this week`
];


if (detroitGC == true) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}


for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber = Math.floor(Math.random() * 10) + 1; 
while (true) {
   if (randomNumber != 5) {
        counter++;
        console.log(`${randomNumber} !== 5`);
   }
   else {
        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
   }
   randomNumber = Math.floor(Math.random() * 10) + 1; 
}