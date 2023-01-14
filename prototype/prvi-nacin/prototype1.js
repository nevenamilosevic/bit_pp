//Employees and Managers

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.constructor = Employee;

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);

Developer.prototype.constructor = Developer;

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}


Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.constructor = Manager;


Developer.prototype.getSpecialization = function() {
    console.log(this.specialization)
}

Manager.prototype.getDepartment = function() {
    console.log(this.department)
}

Manager.prototype.changeDepartment = function(newDepartment) {
    this.department = newDepartment;
}


var manager = new Manager ("nevena", "milosevic", "profesor", 0, "matematika");

manager.changeDepartment("informatika")

console.log(manager);

Employee.prototype.getData = function(){
    return (this.name + " " + this.surname + " " + this.salary)
}

Employee.prototype.increaseSalary = function() {
    var increase = this.salary + (this.salary * 0.1);
    
    return increase;
}

//Aplications

function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

function WebApp(name, url, technologies, licence, stars){
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;



function MobileApp(name, platforms, licence, stars){
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;



WebApp.prototype.getData = function() {
    console.log(this.name + "\n" + this.url + "\n" + this.technologies + "\n" + this.licence + "\n" + this.stars)
}

WebApp.prototype.reactBased = function() {
    for(var i = 0; i < this.technologies.length; i++) {
        if(this.technologies[i] === "react" || this.technologies[i] === "React"){
            var res = true;
        } else {
            res = false;
        }
    }
    return res;
}

MobileApp.prototype.getData = function() {
    console.log(this.name + "\n" + this.platforms + "\n" + this.licence + "\n" + this.stars);
}

MobileApp.prototype.forAndroid = function() {
    for(var i = 0; i < this.platforms.length; i++) {
        if(this.platforms[i] === "android" || this.platforms[i] === "Android"){
            var ress = true;
        } else {
            ress = false;
        }
    }
    return ress;
}

App.prototype.isCCLicence = function() {
    for(var i = 0; i < this.licence.length; i++) {
        if(this.licence[i] === "cc" || this.licence[i] === "CC"){
            var res1 = true;
        } else {
            res1 = false;
        }
    }
    return res1;
}

App.prototype.like = function() {
    this.stars = this.stars + 1;
    return this.stars;
}

App.prototype.showStars = function() {
    conosle.log(this.stars.length + "star rated");
}


