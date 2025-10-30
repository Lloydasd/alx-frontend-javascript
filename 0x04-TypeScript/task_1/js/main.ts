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

interface requirement {
  firstName: string
  lastName: string
  workOnHomework: ()=> string
  displayName: ()=> string


}

interface studentConstructor {
  new(firstName: string, lastName: string):requirement
}

class studentClass implements requirement {
  firstName: string
  lastName: string
  


  constructor(firstName : string , lastName:string){
    this.firstName = firstName,
    this.lastName = lastName
  }

  workOnHomework(){
    return 'Currently working'
  };
  displayName(){
    return `${this.firstName}`
  }


}
const student1 = new studentClass('Lloyd','Asiedu');
  console.log(student1.displayName());