
'use strict'

/**
 * ---------------------- This is simple test OOP based on JavaScript ----------------------
 */

/**
 * This is function construcor equivalent class in other languages ex.: C#
 * @param {string} name 
 * @param {number} age 
 * @param {string} answer 
 */
function User(name, age, answer) {

    this.name   = name,
    this.age    = age,
    this.answer = answer;

    if (this.answer === 'red') {
        this.car = function () {
            document.write('Hello it`s red Car. Nice choice!');
        }
    } else if (this.answer === 'green') {
        this.tree = function () {
            document.write('Hello it`s a green Tree. Good choice!');
        }
    } else {
        this.say = function () {
            document.write('Hello. You are not choice nothing. GoodBye!');
        }
    }

}

/**
 * This is add method (static) in function construcor (class),
 * methods the constructor function, not associated with any specific object.
 * Method checkUser return true if user enter data (name and age)
 * in other cases, returns false.
 * @param   {object} user
 * @returns {boolean}
 */
User.checkUser = function (user) {
    if (user.name !== '' && user.age !== '') {
        if (user.name !== null && user.age !== null) {
            return true;
        } else {
            return false
        }
    } else {
        return false;
    }
};

/**
 * This is prototype, from which are inherited by the created objects.
 */
User.prototype.infoUser = function () {
    document.write('Name: ' + this.name + ' Age: ' + this.age);
}

var name   = prompt('Please enter your name: ');
var age    = prompt('Please enter your age: ');
var answer = prompt('Please choice \'red\' or \'green\' color: ');

var human = new User(name, age, answer);

/**
 * Function construcor Box
 * @param {number} height 
 * @param {number} width 
 * @param {number} depth 
 * @param {string} material 
 */
function Box(height, width, depth, material) {

    this.height   = height,
    this.width    = width,
    this.depth    = depth,
    this.material = material;

}

Box.prototype.volume = function () { return this.height * this.width * this.depth; };
Box.prototype.equals = function (obj) { if (this.material === obj.material) { return true; } else { return false; } };