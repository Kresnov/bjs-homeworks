"use strict"

// задача 1

class Weapon {
	constructor(name, attack, durability, range) {
		this.name = name;
		this.attack = attack;
		this.firstDurability = durability;
		this.durability = durability;
		this.range = range;
	}

	// повреждение от соперника
	takeDamage(damage) {
		this.durability -= damage;
		if (this.durability < 0) {
			this.durability = 0;
		}
	}

	// урон от удара данным оружием
	getDamage() {
		this.attackEnemy = 0;
		if (this.durability >= this.firstDurability * 0.3) {
			this.attackEnemy = this.attack;
		} else if (this.durability === 0) {
			this.attackEnemy = 0;
		} else {
			this.attackEnemy = this.attack / 2;
		}
		return this.attackEnemy
	}
	
	// сломано ли оружие
	isBroken() {
		if (this.durability === 0) {
			return false;
		} else {
			return true;
		}
	}
}

// обычное оружие
const arm = new Weapon("Рука", 1, Infinity, 1);
const bow = new Weapon("Лук", 10, 200, 3);
const sword = new Weapon("Меч", 25, 500, 1);
const knife = new Weapon("Нож", 5, 300, 1);
const staff = new Weapon("Посох", 8, 300, 2);

// усиленное оружие

const longBow = new Weapon("Длинный лук", 15, 200, 4);
const ax = new Weapon("Секира", 27, 800, 1);
const staffOfStorm = new Weapon("Посох Бури", 10, 300, 3);

arm.takeDamage(50);
console.log(`arm.takeDamage(50) ${arm.durability}`); 
console.log(`arm.getDamage() ${arm.getDamage()}`); 
console.log(`arm.isBroken() ${arm.isBroken()}`); 

bow.takeDamage(50);
console.log(`bow.takeDamage(20) ${bow.durability}`); 
console.log(`bow.getDamage() ${bow.getDamage()}`); 

bow.takeDamage(500);
console.log(`bow.takeDamage(200) ${bow.durability}`); 
console.log(`bow.getDamage() ${bow.getDamage()}`); 

// задача 2

// обычное оружие
class Arm extends Weapon {
	constructor() {
		super();
		this.name = "Рука";
		this.attack = 1;
		this.firstDurability = Infinity;
		this.durability = Infinity;
		this.range = 1;
	}
}

class Bow extends Weapon {
	constructor() {
		super();
		this.name = "Лук";
		this.attack = 10;
		this.firstDurability = 200;
		this.durability = 200;
		this.range = 3;
	}
}

class Sword extends Weapon {
	constructor() {
		super();
		this.name = "Меч";
		this.attack = 25;
		this.firstDurability = 500;
		this.durability = 500;
		this.range = 1;
	}
}

class Knife extends Weapon {
	constructor() {
		super();
		this.name = "Нож";
		this.attack = 5;
		this.firstDurability = 300;
		this.durability = 300;
		this.range = 1;
	}
}

class Staff extends Weapon {
	constructor() {
		super();
		this.name = "Посох";
		this.attack = 8;
		this.firstDurability = 300;
		this.durability = 300;
		this.range = 2;
	}
}

// усиленное ооружие

class LongBow extends Bow {
	constructor() {
		super();
		this.name = "Длинный лук";
		this.attack = 15;
		this.range = 4;
	}
}

class Ax extends Sword {
	constructor() {
		super();
		this.name = "Секира";
		this.attack = 27;
		this.durability = 500;
		this.firstDurability = 500;
	}
}

class StaffOfStorm extends Staff {
	constructor() {
		super();
		this.name = "Посох Бури";
		this.attack = 10;
		this.range = 3;
	}
}

const arm1 = new Arm();
const bow1 = new Bow();
const sword1 = new Sword();
const knife1 = new Knife();
const staff1 = new Staff();

const longbow1 = new LongBow();
const ax1 = new Ax();
const staffOfStorm1 = new StaffOfStorm();

arm1.takeDamage(50);
console.log(`arm1.takeDamage(50) ${arm1.durability}`); 
console.log(`arm1.getDamage() ${arm1.getDamage()}`); 
console.log(`arm1.isBroken() ${arm1.isBroken()}`); 

console.log(longbow1);
console.log(ax1);
console.log(staffOfStorm1);

// 3 задача

class StudentLog {
	constructor(name) {
		this.name = name;
		this.algebra = [];
		this.math = [];
		this.geometry = [];
    }
    
    getName() {
		return this.name;
    }
    
    addGrade(grade, subject) {
		if (grade > 5 || isNaN(grade)) {
			console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
		} else {
			this[subject].push(grade);
		}
	return this[subject].length;
    }
    
    getAverageBySubject(subject) {
		if (this[subject] === undefined) {
			return 0;
		} else {
		  let averageBySubject = 0;
		  let sumMarks = 0;
		  for (let mark of this[subject]) {
		  	sumMarks += mark;
		  }
      averageBySubject = sumMarks / this[subject].length;
			return averageBySubject;
		}
    }
    
    getTotalAverage() {
		let sumAllAverage = 0;
		let totalAverage = 0;
		let sumSubjects = -1; 
		for (let key in this) {
			sumSubjects ++;
			if (isNaN(this.getAverageBySubject(key))) {
				sumAllAverage += 0;
			} else {
			sumAllAverage += this.getAverageBySubject(key);
			}
		}
		totalAverage = sumAllAverage / sumSubjects;
		return totalAverage;
	}
}

const student = new StudentLog("Иван Петров");

console.log(student.getName());
console.log(student.addGrade("хоба", "algebra"));
console.log(student.addGrade(5, "algebra"));
console.log(student.addGrade(5, "algebra"));
console.log(student.addGrade(5, "algebra"));
console.log(student.addGrade(4, "algebra"));
console.log(student.getAverageBySubject("algebra"));
console.log(student.getTotalAverage());