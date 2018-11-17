/**
 * Your client now only needs to know about the abstract class Student.
 */
import { Student } from "./student";
import { AbstractStudentFactory, StudentFactory } from "./factory";

let factory: AbstractStudentFactory = new StudentFactory();   // Create your factory to start creating your students.
let degree: Student = factory.createStudent("degree", "John", "Doe", "ABC123"); // Create an instance of a Degree Student. Remember a DegreeStudent is also a instance of a abstract Student class.
let diploma: Student = factory.createStudent("diploma", "John", "Doe", "ABC123"); // Create an instance of a Diploma Student. Remember a DiplomaStudent is also a instance of a abstract Student class.

console.log(degree.getDetails());
console.log(diploma.getDetails());
console.log((<any>degree.constructor).name)
console.log((<any>diploma.constructor).name);
console.log(degree instanceof(Student));
console.log(diploma instanceof(Student));

/**
 * Console Output
 * Degree Student Details = name: John, surname: Doe, student number: ABC123
 * Diploma Student Details = name: John, surname: Doe, student number: ABC123
 * DegreeStudent
 * DiplomaStudent
 * true
 * true
 */
