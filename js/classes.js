export class Count {
    constructor() {
        this.count = 0;
    }
    add() {
        this.count++;
    }
}
export class HumanFriend {
    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }
    getName() {
        return this.name;
    }

    getBirthday() {
        return this.birthday;
    }
    voice() {
        return 'Издаю звук';
    }
    sleep() {
        return 'уснул';
    }
    eat() {
        return 'кушаю';
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
        return 'Гав-Гав';
    }
    givePaw() {
        return 'На лапу';
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
    galloping() {
        return 'Скачу галопом'
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