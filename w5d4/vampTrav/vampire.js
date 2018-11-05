class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    vampire.creator = this;
    return this.offspring.push(vampire);
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    if (this.creator === null) return 0
    return 1 + this.creator.numberOfVampiresFromOriginal;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }

    let vampire;
    for (const offspring of this.offspring) {
      vampire = offspring.vampireWithName(name);
      if (vampire != null) {
        return vampire;
      }
    }

    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let decendents = this.offspring.length;

    for (const offspring of this.offspring) {
      decendents += offspring.totalDescendents;
    }

    return decendents
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millennialDecendents = [];
    if (this.yearConverted > 1980) {
      millennialDecendents.push(this);
    }

    for (const offspring of this.offspring) {
      millennialDecendents = millennialDecendents.concat(offspring.allMillennialVampires);
    }

    return millennialDecendents;
  }

  /** Stretch **/

  get lineage() {
    let lineage = [this];
    while (lineage[lineage.length - 1].creator !== null) {
      lineage.push(lineage[lineage.length - 1].creator)
    }
    return lineage;
  }

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let seniorVampire = this.isMoreSeniorThan(vampire) ? this : vampire;
    let juniorVampire = this.isMoreSeniorThan(vampire) ? vampire : this;

    let seniorLineage = seniorVampire.lineage;
    let nextParent = juniorVampire;
    while (!seniorLineage.includes(nextParent)) {
      nextParent = nextParent.creator;
    }
    return nextParent;
  }
}

rootVampire = new Vampire("root");
offspring1 = new Vampire("a", 1981);
offspring2 = new Vampire("b", 1981);
offspring3 = new Vampire("c", 1981);
offspring4 = new Vampire("d", 1981);
offspring5 = new Vampire("e", 1976);
offspring6 = new Vampire("f", 1976);
offspring7 = new Vampire("g", 1976);
offspring8 = new Vampire("h", 1988);

rootVampire.addOffspring(offspring1);
rootVampire.addOffspring(offspring2);
rootVampire.addOffspring(offspring3);
offspring3.addOffspring(offspring4);
offspring3.addOffspring(offspring5);
offspring5.addOffspring(offspring6);
offspring6.addOffspring(offspring7);
offspring2.addOffspring(offspring8);

console.log(rootVampire.allMillennialVampires)

module.exports = Vampire;

