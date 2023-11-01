function Human(name,age){

    this.name = name;
    this.age = age;
}

Human.prototype.getInfo = function(){

    return `My name is ${this.name} and I am ${this.age} years old.`
}

function Car(brand,model,year,color,owner){

    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    if (owner.age >= 18) {
        this.owner = owner;
    } else {
        console.log(`Owner of  ${this.brand} ${this.model} hasn't car lisense `);
        this.owner = null;
    }
}


Car.prototype.getInfoCar = function(){

    return `My favorite car is ${this.model} model by ${this.brand} brand in ${this.color} color and of ${this.year} year of production`
}

function MainOwner (age){
    
    this.age = age;
};


MainOwner.prototype=Object.create(Human.prototype);


MainOwner.prototype.getlisence=function(){  
    if (this.age < 18) {
        return `I don't have a car license`;
    }
    return `I have a car license`;
};

// Human

let Kate = new Human('Kate',29);
let Anna = new Human('Anna',28);
let Sofi = new Human ( 'Sofi',17);

// Owner

let Mark = new MainOwner(17);
let Max = new MainOwner(35);
let Alex = new MainOwner(32);

// Car

let Porshe = new Car( 'Porshe','911','1960','red',Mark);
let Dodge = new Car ( 'Dodge','Challenger',' 2018','black',Max);
let Jeep = new Car ('Jeep','Wrangel','2020','yellow',Alex);

console.log(Kate.getInfo());
console.log(Anna.getInfo());
console.log(Sofi.getInfo());

console.log(Mark.getlisence());
console.log(Max.getlisence());
console.log(Alex.getlisence());

console.log(Porshe.getInfoCar());
console.log(Dodge.getInfoCar());
console.log(Jeep.getInfoCar());


