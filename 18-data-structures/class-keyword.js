class Student { // Instance Methods
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies++;
        if (this.tardies >= 3) {
            return 'You are expelled!!!'
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverade() {
        let sum = this.scores.reduce(function(a,b) {return a + b;})
        return sum/this.scores.length;
    }
}

let firstStudent = new Student('Sergei', 'Nikiforov', 1);
let secondStudent = new Student('Colt', 'Steele', 2);

//console.log(firstStudent.markLate());
//console.log(firstStudent.addScore(77));

// **************************************************************************
class Student_1 {   // Clsss Methods
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    static enrollStudents(...students) {
        return 'Enrolling students!';
    }

    markLate() {
        this.tardies++;
        if (this.tardies >= 3) {
            return 'You are expelled!!!'
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverade() {
        let sum = this.scores.reduce(function(a,b) {return a + b;})
        return sum/this.scores.length;
    }
}

//console.log(Student_1.enrollStudents([firstStudent, secondStudent]));

// ******************************************************************************
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(p1);
console.log(Point.distance(p1, p2));