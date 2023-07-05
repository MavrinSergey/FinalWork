export class HumanFriend {
    constructor(name, birtday) {
        this.name = name;
        this.birtday = birtday;
    }
    getName() {
        return this.name;
    }

    getBirtday() {
        return this.birtday;
    }
    voice() {
        return console.log('издал звук');
    }
    sleep() {
        return console.log('уснул');
    }
    eat() {
        return console.log('кушаю');
    }
}

export class Pet extends HumanFriend {
    constructor(name, birthday) {
        super(name, birthday);
        }
}

export class Dog extends Pet {
    constructor(name, birthday) {
        super(name, birthday);
        }
        voice() {
            return console.log('гав-гав');
        }
}

export class Cat extends Pet {
    constructor(name, birthday) {
        super(name, birthday);
        }
}

export class Hamster extends Pet {
    constructor(name, birthday) {
        super(name, birthday);
        }
}

export class PackAnimal extends HumanFriend {
    constructor(name, birthday, liftingWeight) {
        super(name, birthday);
        this.liftingWeight = liftingWeight;
        }
}

export class Horse extends PackAnimal {
    constructor(name, birthday, liftingWeight) {
        super(name, birthday, liftingWeight);
        }
}

export class Camel extends PackAnimal {
    constructor(name, birthday, liftingWeight) {
        super(name, birthday, liftingWeight);
        }
}

export class Donkey extends PackAnimal {
    constructor(name, birthday, liftingWeight) {
        super(name, birthday, liftingWeight);
        }
}