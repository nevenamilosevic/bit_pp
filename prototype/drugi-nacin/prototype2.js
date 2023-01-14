//Employees and Managers


class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class Employee extends Person{
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getData() {
        return (this.name + " " + this.surname + " " + this.salary);
    }
    increaseSalary() {
        var increase = this.salary + (this.salary * 0.1);
        return increase;
    }
}


class Developer extends Employee{
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }
    getSpecialization() {
        console.log(this.specialization);
    }
}


class Manager extends Employee{
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }
    getDepartment(){
        console.log(this.department);
    }
    changeDepartment(newDepartment){
        this.department = newDepartment;
    }
}


var manager = new Manager ("nevena", "milosevic", "profesor", 0, "matematika");

manager.changeDepartment("informatika")

console.log(manager);




//Aplications


class App {
    constructor(name, licence, stars){
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    };
    isCCLicence() {
        for(var i = 0; i < this.licence.length; i++) {
            if(this.licence[i] === "cc" || this.licence[i] === "CC"){
                var res1 = true;
            } else {
                res1 = false;
            }
        }
        return res1;
    };
    like() {
        this.stars = this.stars + 1;
    return this.stars
    };
    showStars() {
        conosle.log(this.stars.length + "star rated");
    }
}

class WebApp extends App {
    constructor(name, url, technologies, licence, stars) {
        super(name, licence, stars);
        this.url = url;
        this.technologies = technologies;
    }
    getData() {
        console.log(this.name + "\n" + this.url + "\n" + this.technologies + "\n" + this.licence + "\n" + this.stars)
    };
    reactBased() {
        for(var i = 0; i < this.technologies.length; i++) {
            if(this.technologies[i] === "react" || this.technologies[i] === "React"){
                var res = true;
            } else {
                res = false;
            }
        }
        return res;
    }
}


class Mobile extends App {
    constructor(name, platforms, licence, stars) {
        super(name, licence, stars);
        this.platforms = platforms;
    };
    getData() {
        console.log(this.name + "\n" + this.platforms + "\n" + this.licence + "\n" + this.stars)
    };
    forAndroid() {
        for(var i = 0; i < this.platforms.length; i++) {
            if(this.platforms[i] === "android" || this.platforms[i] === "Android"){
                var ress = true;
            } else {
                ress = false;
            }
        }
        return ress;   
    }
}





