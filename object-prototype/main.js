function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();
    birthday = new Date(document.getElementById('birthday').value);
    let diff = now - birthday;
    let age = Math.floor((diff / 1000 / 60 / 60 / 24 / 1461) * 4);
    
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;

    if (animal == undefined) {
        return null;
    } else {
        return sound;
    }
    
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
    sum += Number(marks[i]);
    }

    let average = sum / marks.length;
    let roundedAverage = Math.round(average);

    return roundedAverage;
}