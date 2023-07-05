const newAnimals = document.getElementById("newAnimals");
let listAnimals = [];
newAnimals.addEventListener('submit', submitForm)

function submitForm(event) {
    const obj = {};
    // Отменяем стандартное поведение браузера с отправкой формы
    event.preventDefault();
    const name = this.animalsName.value;
    const birthday = this.birthday.value;
    const animal = this.animal.value;
    const loadСapacity = this.loadСapacity.value;

    let newAnimal;

    switch (animal) {
        case 'Dog':
            newAnimal = new Dog(name, birthday);
            break;

        case 'Cat':
            newAnimal = new Cat(name, birthday);
            break;

        case 'Hamster':
            newAnimal = new Hamster(name, birthday);
            break;

        case 'Horse':
            newAnimal = new Horse(name, birthday, loadСapacity);
            break;

        case 'Camel':
            newAnimal = new Camel(name, birthday, loadСapacity);
            break;

        case 'Donkey':
            newAnimal = new Donkey(name, birthday, loadСapacity);
            break;

        default:
            break;
    }
    listAnimals.push(newAnimal);
    console.log(listAnimals)

}


class HumanFriend {
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