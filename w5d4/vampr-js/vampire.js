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


module.exports = Vampire;

