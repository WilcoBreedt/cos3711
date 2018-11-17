import { Student, DiplomaStudent, DegreeStudent } from "./student";

/**
 * @abstract
 * @classdesc A Factory that produces the required Student instance.
 */
export abstract class AbstractStudentFactory {
    /**
     * Create an instance of the desired Student class
     * @param {String} studentType The type of student you require
     * @param {String} name Name of the student
     * @param {String} surname Surname of the student
     * @param {String} studentNumber Student number at the university
     */
    abstract createStudent(studentType: String, name: String, surname: String, studentNumber: String): Student;
}

/**
 * @class
 * @extends AbstractStudentFactory
 * @classdesc A Factory that produces the required Student instance.
 */
export class StudentFactory extends AbstractStudentFactory {
    /**
     * @inheritdoc
     */
    createStudent(studentType: String, name: String, surname: String, studentNumber: String) {
        if (studentType === "diploma") {
            return new DiplomaStudent(name, surname, studentNumber);
        }
        if (studentType === "degree") {
            return new DegreeStudent(name, surname, studentNumber);
        }
    }
}
