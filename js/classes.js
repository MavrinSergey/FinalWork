class HumanFriend {
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
    voise() {
        return 'Издаю звук';
    }
    sleep() {
        return 'уснул';
    }
    eat() {
        return 'кушаю';
    }
}

class Pet extends HumanFriend {
    constructor(name, birthday) {
        super(name, birthday);
        }
}

class Dog extends Pet {
    constructor(name, birthday) {
        super(name, birthday);
        }
}

class Cat extends Pet {
    constructor(name, birthday) {
        super(name, birthday);
        }
}

class Hamster extends Pet {
    constructor(name, birthday) {
        super(name, birthday);
        }
}

class PackAnimal extends HumanFriend {
    constructor(name, birthday, liftingWeight) {
        super(name, birthday);
        this.liftingWeight = liftingWeight;
        }
}

class Horse extends PackAnimal {
    constructor(name, birthday, liftingWeight) {
        super(name, birthday, liftingWeight);
        }
}

class Camel extends PackAnimal {
    constructor(name, birthday, liftingWeight) {
        super(name, birthday, liftingWeight);
        }
}

class Donkey extends PackAnimal {
    constructor(name, birthday, liftingWeight) {
        super(name, birthday, liftingWeight);
        }
}