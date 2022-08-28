// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
// example on class inheritance and the constructor - https://www.w3schools.com/js/js_class_inheritance.asp
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  vikingArmy = []; // becomes an array of type viking class
  saxonArmy = []; // becomes an array of type saxon class

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    // get one Viking from the viking army (chosen at random)
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const fighterViking = this.vikingArmy[randomVikingIndex]; // "fighterViking" variable is your viking that you want to work with
    // fighterViking is of Class Viking

    // get one Saxon front the saxon army (chosen at random)
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const defSaxon = this.saxonArmy[randomSaxonIndex]; // "defSaxon" variable is your saxon that you want to work with
    // defSaxon is of Class Saxon

    // Attack Saxon by the attack points from the viking
    const vikingAttackPoints = fighterViking.attack();
    // Put the receiveDamage results into a variable
    const attackResults = defSaxon.receiveDamage(vikingAttackPoints); // attackResults will be a string

    if (defSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return attackResults;
  }

  saxonAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const fighterSaxon = this.saxonArmy[randomSaxonIndex];

    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const defViking = this.vikingArmy[randomVikingIndex];

    const saxonAttackPoints = fighterSaxon.attack();
    // Put the receiveDamage results into a variable
    const attackResults = defViking.receiveDamage(saxonAttackPoints); // attackResults will be a string

    if (defViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return attackResults;
  }

  showStatus() {
    const currentVikingArmy = this.vikingArmy.length;
    const currentSaxonArmy = this.saxonArmy.length;
    if (currentSaxonArmy == 0) {
      return "Vikings have won the war of the century!";
    } else if (currentVikingArmy == 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}
