/**
 * Creates a new Singleton
 * @class
 * @classdesc A class that can only have once instance within the whole
 * application
 */
class Singleton {
    static instance: Singleton;
    public name: String = "";
    /**
     * Make the constructor private in order to make it impossible to
     * initialize an instance outside this class
     * @private
     */
    private constructor() { }

    /**
     * Set the value of the name.
     * @param {String} name Name value that should be used within the class for
     * the variable name
     */
    public setName(name: String) {
        this.name = name;
    }

    /**
     * Creates a new instance if there is no instance OR
     * returns the instance that is currently within the class
     */
    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    /**
     * Get the name that is set to the variable name
     */
    public getName():String {
        return this.name;
    }
};

let single1 = Singleton.getInstance(); // This will create an instance on Singleton
let single2 = Singleton.getInstance(); // Will return the same instance created in single1
//Singelton test with instance 1 ...
single1.setName('SingleInstaceTest1'); // Set the value from single1
console.log(single2.getName()); // See what the value is within single2
// Singleton test with instance 2 ...
single2.setName('SingleInstaceTest2'); // Set the value from single2
console.log(single1.getName()); // See what the value is within single1
console.log(single1 === single2); // Check if the instance is actually the same

/**
 * Console Output
 * SingleInstaceTest1
 * SingleInstaceTest2
 * true
 */
