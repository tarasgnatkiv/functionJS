// 1. Напишіть функцію, що повертає куб числа.
let cube  = (number) => {
    let degree = 3;
    let cubeNumebr = Math.pow(number, degree);
    console.log(cubeNumebr);
}
cube(4);

// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

let mathFunc = (firstNumber, secondNumber, thirdNumber) => {
    let result = (firstNumber + secondNumber) / thirdNumber;
    console.log(result);
}

mathFunc(6,9,3);

// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).

let dayOfWeek = (numberDay) => {
    let nameDay;
    switch(numberDay) {
        case 1:
            return nameDay = `Понеділок`;
        case 2:
            return nameDay = `Вівторок`;
        case 3:
            return nameDay = `Середа`;
        case 4:
            return nameDay = `Четвер`;
        case 5:
            return nameDay = `П'ятниця`;
        case 6:
            return nameDay = `Субота`;
        case 7:
            return nameDay = `Неділя`;
    }
}

let nameDay = dayOfWeek(7);
console.log(nameDay);

// 4. Реалізуйте функцію знаходження факторіала

let factorial = (number) => {
    let result = 1;
    if(number > 0) {
        for(let i = 1; i <= number; i++) {
            result *= i;
        }
    } else if(number === 0) {
        result = 1;
    } else {
        alert(`Факторіала для числа ${number} не існує!`)
    }
    return result;
}

let factor = factorial(5);
console.log(factor);

// 5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

let getSeconds = (hours, minutes, seconds) => {
    let secondsInHours = 3600;
    let secondsInMinutes = 60;
    let numberInSeconds = hours * secondsInHours + minutes * secondsInMinutes + seconds;
    return numberInSeconds;
}

let seconds = getSeconds(12, 40, 30);
console.log(seconds);

// 6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 

let getTime = (receivedSecond) => {
    let secondsInHours = 3600;
    let secondsInMinutes = 60;
    let hours = Math.floor(receivedSecond / secondsInHours);
    let minutes = Math.floor( (receivedSecond - hours * secondsInHours) / secondsInMinutes );
    let seconds = receivedSecond - hours * secondsInHours - minutes * secondsInMinutes;
    if(hours > 24) {
        alert(`Більше одного дня`)
    } else {
        return `${hours}:${minutes}:${seconds}`
    }
}

let time = getTime(45630);
console.log(time);

// 7. 4 відмінності ерров фанкшина від звичайної функції.

// 1 Не має ключового слова function
// 2 У стрілочних функцій немає «this»
// 3 Стрілочні функції не мають «arguments»
// 4 Не можуть бути викликані з new.