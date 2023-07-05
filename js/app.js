const newAnimals = document.getElementById("newAnimals");
const getComandList = document.getElementById("getComandList");

let listAnimals = [];
newAnimals.addEventListener('submit', createNewAnimals)
getComandList.addEventListener('submit', getComand)

function createNewAnimals(event) {
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
    }
    listAnimals.push(newAnimal);
    console.log(listAnimals)
}

function getComand(event) {
    event.preventDefault();
    const name = this.animal.value;
    let obj;
    listAnimals.forEach(element => {
        if (element.name === name) {
            obj = element;
        }
    });
    checkClass(obj)

}

function checkClass(obj) {
    if (obj instanceof Dog) {
        obj.voice()
        obj.sleep()
        obj.eat()
    } else if (obj instanceof Cat) {
        obj.voice()
        obj.sleep()
        obj.eat()
    } else if (obj instanceof Hamster) {
        obj.voice()
        obj.sleep()
        obj.eat()
    } else if (obj instanceof Horse) {
        obj.voice()
        obj.sleep()
        obj.eat()
    }else if (obj instanceof Camel) {
        obj.voice()
        obj.sleep()
        obj.eat()
    }else if (obj instanceof Donkey) {
        obj.voice()
        obj.sleep()
        obj.eat()
    }
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
        return console.log('Издаю звук');
    }
    sleep() {
        return console.log('уснул');
    }
    eat() {
        return console.log('кушаю');
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
    voice() {
        return console.log('Гав-Гав');
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