import { Count, Dog, Cat, Hamster, Horse, Camel, Donkey, HumanFriend  } from "./classes.js";


let countAnimals = new Count();
let listAnimals = [];
const newAnimals = document.getElementById("newAnimals");
const getComandList = document.getElementById("getComandList");
const openFormCreateAnimal = document.getElementById("openFormCreateAnimal");
const formWrapper = document.querySelector(".form__wrapper");


openFormCreateAnimal.addEventListener('click', () => {
    formWrapper.style.display = "flex";
})
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

        default:
            break;
    }

    listAnimals.push(newAnimal);
    countAnimals.add()
    formWrapper.style.display = "none";
    createModal(listAnimals)
}

function createModal(content) {
    if (document.getElementById("list")) {
        document.getElementById("list").remove();
    }
    const modal = document.createElement('div');
    modal.classList.add("list");
    modal.id = "list";
    let str = "";
    listAnimals.forEach(el => {
        str = str + "<Br>" + el.constructor.name + JSON.stringify(el);
    })
    modal.innerHTML = `${str}`;
    document.body.appendChild(modal);
}

function createModalComand(content) {
    if (document.getElementById("Comand")) {
        document.getElementById("Comand").remove();
    }
    const modal = document.createElement('div');
    modal.classList.add("Comand");
    modal.id = "Comand";
    let str = content;
    modal.innerHTML = `${str}`;
    document.body.appendChild(modal);
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
    createModalComand(checkClass(obj))
    

}

function checkClass(obj) {
    if (obj instanceof Dog) {
        return `${obj.voice()} ${obj.sleep()} ${obj.eat()} ${obj.givePaw()}`
    } else if (obj instanceof Cat) {
        return `${obj.voice()}${obj.sleep()}${obj.eat()}`
    } else if (obj instanceof Hamster) {
        return `${obj.voice()}${obj.sleep()}${obj.eat()}`
    } else if (obj instanceof Horse) {
        return `${obj.voice()}${obj.sleep()}${obj.eat()}${obj.galloping()}`
    } else if (obj instanceof Camel) {
        return `${obj.voice()}${obj.sleep()}${obj.eat()}`
    } else if (obj instanceof Donkey) {
        return `${obj.voice()}${obj.sleep()}${obj.eat()}`
    }
}