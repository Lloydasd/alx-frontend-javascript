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

interface Directors extends Teacher {
  numberOfReports: number
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};