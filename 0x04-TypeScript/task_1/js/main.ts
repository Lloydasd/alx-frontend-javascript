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

console.log(printTeacher('John','Doe'));