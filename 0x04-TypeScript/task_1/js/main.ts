interface Teacher  {
  readonly firstName: string
  readonly lastName: string
  fullTimeEmployee: boolean
  location: string
  yearsOfExperience?: number
  [key: string]: any
}

let firstTeacher : Teacher = {
  firstName: 'Lloyd',
  lastName: 'Asiedu',
  fullTimeEmployee: true,
  location: 'Tema',
  yearsOfExperience: 4,
  Loyal: true
};

interface Director extends Teacher {
  numberOfReports: number
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

printTeacher('John','Doe');""

interface Requirement {
  firstName: string
  lastName: string
  workOnHomework(): string
  displayName(): string


}

interface StudentConstructor {
  new(firstName: string, lastName: string):Requirement
}

class StudentClass implements Requirement {
  firstName: string
  lastName: string
  


  constructor(firstName : string , lastName:string){
    this.firstName = firstName,
    this.lastName = lastName
  }

  workOnHomework():string{
    return 'Currently working'
  };
  displayName():string{
    return `${this.firstName}`
  }


}
const student1 = new StudentClass('Lloyd','Asiedu');
  console.log(student1.displayName());