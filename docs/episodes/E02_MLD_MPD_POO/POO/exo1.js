/**
 * On veut créer une classe Véhicule pour créer des objet véhicule !
 * 
 * Propriétés:
 * nbWheels, enginePower, isStarted
 * 
 * Méthodes:
 * constructor(nbWheels, enginePower) // isStarted est false par défaut
 * getters et setters de toutes les propriétés (pas de conditions dans les setters)
 * start() et stop()
 * toString() // renvoie "véhicule à X roues, de puissance Y, {est démarré | n'est pas démarré}.
 * si on a le temps, on rajoute des conditions dans les setters !
 */

const e = require("express");

class Vehicule {

  #nbWheels;
  #enginePower;
  #isStarted;

  constructor(nbWheels, enginePower) {
    this.#nbWheels = nbWheels;
    this.#enginePower = enginePower;
    this.#isStarted = false;
  }

  get nbWheels() {
    return this.#nbWheels;
  }

  set nbWheels(value) {
    if(typeof value !== "number") {
      throw new Error("Le nombre de roues doit être un nombre");
    }
    this.#nbWheels = value;
  }

  get enginePower() {
    return this.#enginePower;
  }

  set enginePower(value) {
    if(typeof value !== "number") {
      throw new Error("La puissance doit être un nombre");
    }
    this.#enginePower = value;
  }

  get isStarted() {
    return this.#isStarted;
  }

  set isStarted(value) {
    if(typeof value !== "boolean") {
      throw new Error("La valeur de démarrage doit être un booléen");
    }
    this.#isStarted = value;
  }

  start() {
    this.isStarted = true;
  }

  stop() {
    this.isStarted = false;
  }

  toString() {
    return `Véhicule à ${this.nbWheels} roues, de puissance ${this.enginePower}, ${this.isStarted ? "est démarré" : "n'est pas démarré"}.`;
  }
}

module.exports = Vehicule;

// const vehicule = new Vehicule(4, 100);
// console.log(vehicule.toString());
// vehicule.start();
// console.log(vehicule.toString());