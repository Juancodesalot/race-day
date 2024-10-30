var raceNumber = Math.floor(Math.random()*1000);
console.log(raceNumber);

var isRegistered = Math.random() >= .5;
//  wrote this to be able to test it both ways did this after looking it up and changing it from true and false
console.log(isRegistered);

const runnerAge = Math.floor(Math.random() * 100);

console.log("Age",runnerAge);

if (isRegistered === true && runnerAge>18) {

    raceNumber += 1000;
    console.log("Your New Race Number is",raceNumber)
}

else if (isRegistered === true && runnerAge >= 18) {
    console.log(`Hello! ${raceNumber} you will race at 9:30am`)
}
 else if (runnerAge >=18 && isRegistered === false) {
    console.log(`Hey...${(raceNumber)} Late adults run at 11:00am`)
}

else if (runnerAge < 18 ) {
    console.log(`Hey little guy ${raceNumber} youth runs at 12:30 pm`)
}
