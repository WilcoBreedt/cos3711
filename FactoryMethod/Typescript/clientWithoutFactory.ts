/**
 * The client needs to know about ALL the concrete classes in order
 * to make an instance of them. This can be an issue once you have
 * a few classes and need to keep on adding some classes. For instance an
 * university can introduce mutliple nano degrees, short courses, certificates
 * etc. which will ALL have to be imported into your client at some point.
 * This is where the factory method comes in handy.
 */
import { DegreeStudent, DiplomaStudent } from "./student";

let degree: DegreeStudent = new DegreeStudent("John", "Doe", "ABC123");
let diploma: DiplomaStudent = new DiplomaStudent("John", "Doe", "ABC123");

console.log(degree.getDetails());
console.log(diploma.getDetails());

/**
 * Console Output
 * Degree Student Details = name: John, surname: Doe, student number: ABC123
 * Diploma Student Details = name: John, surname: Doe, student number: ABC123
 */