class School {
  constructor (name, level, numberOfStudents) {
    this._name = name; 
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name () {
    return this._name;
  }

  get level () {
    return this._level;
  }

  get numberOfStudents () {
    return this._numberOfStudents;
  }

  set numberOfStudents(value) {
    if (value.isNaN()) {
    console.log('Invalid input: numberOfStudents must be set to a Number.');
    } else {
      this._numberOfStudents = value;
    }
   }

  quickFacts () {
    console.log(` ${this._name} educates ${this._numberOfStudents} students at the ${this._level}.`)
  }

  static
    pickSubstituteTeacher (substituteTeachers)  {
    const randInd = Math.floor(substituteTeachers.length * Math.random());

    return substituteTeachers[randInd];
  }
  class PrimarySchool extends School {
    constructor(name, level, numberOfStudents) {
      super(name);
      super(numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }

    get name() {
     return this._name;
    }

    get numberOfStudents() {
      return this._numberOfStudents;
    }

    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name);
      super(numberOfStudents);
      this._sportsTeams = return sportsTeams;
    }

    get sportsTeams (){
      return this._sportsTeams;
    }

    get name () {
      return this._name;
    }

    get numberOfStudents () {
      return this._numberOfStudents;
    }
  }
 const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
 lorraineHansbury.quickFacts();

School.pickSubstituteTeacher('Students must be picked up by a parent, guardian, or a family member over the age of 13.');

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

}
