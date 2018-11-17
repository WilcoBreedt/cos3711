/**
 * @class Student
 * @classdesc Represents a student at a university
 */
export abstract class Student {
    protected name: String = "";
    protected surname: String = "";
    protected studentNumber: String = "";
    /**
     * Initialize a new instance of the Student class
     * @param name - Name of the student
     * @param surname - Surname of the student
     * @param studentNumber - Student number at university
     */
    constructor(name: String, surname: String, studentNumber: String) {
        this.name = name;
        this.surname = surname;
        this.studentNumber = studentNumber;
    }
    /**
     * Print the student details in a readable format.
     */
    abstract getDetails(): String; // Same as pure virtual functions in C++
}

/**
 * @class DiplomaStudent
 * @classdesc - A student that is currently acquiring a Diploma 
 */
export class DiplomaStudent extends Student {
    /**
     * @inheritdoc
     */
    getDetails() {
        return `Diploma Student Details = name: ${this.name}, surname: ${this.surname}, student number: ${this.studentNumber}`;
    }
}

/**
 * @class DiplomaStudent
 * @classdesc - A student that is currently acquiring a Degree 
 */
export class DegreeStudent extends Student {
    /**
     * @inheritdoc
     */
    getDetails() {
        return `Degree Student Details = name: ${this.name}, surname: ${this.surname}, student number: ${this.studentNumber}`;
    }
}
