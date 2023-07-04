const Vehicule = require("./exo1");

class Car extends Vehicule {
  
  #nbDoors;

  constructor(nbWheels, enginePower, nbDoors) {
    super(nbWheels, enginePower);
    this.#nbDoors = nbDoors;
  }

  get nbDoors() {
    return this.#nbDoors;
  }

  set nbDoors(value) {
    if(typeof value !== "number") {
      throw new Error("Le nombre de portes doit être un nombre");
    }
    this.#nbDoors = value;
  }

  toString() {
    return `${super.toString()} C'est une voiture à ${this.nbDoors} portes.`;
  }

}

const myCar = new Car(4, 100, 5);
console.log(myCar.toString());
myCar.start();
console.log(myCar.toString());