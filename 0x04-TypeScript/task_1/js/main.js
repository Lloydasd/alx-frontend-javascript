var firstTeacher = {
    firstName: 'Lloyd',
    lastName: 'Asiedu',
    fullTimeEmployee: true,
    location: 'Tema',
    yearsOfExperience: 4,
    Loyal: true
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
printTeacher('John', 'Doe');
"";
// class StudentClass {
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    ;
    StudentClass.prototype.displayName = function () {
        return "".concat(this.firstName);
    };
    return StudentClass;
}());
var student1 = new StudentClass('Lloyd', 'Asiedu');
console.log(student1.displayName());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromeHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getiing a coffee break';
    };
    Director.prototype.workDirectorTask = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromeHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTask = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }
    else if (typeof salary === 'string' || salary > 500) {
        return new Director;
    }
}
console.log(createEmployee(200));
