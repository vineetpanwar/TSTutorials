"use strict";
exports.__esModule = true;
//aN EXAMPKE for class deciorator factory sealing its constructor
//this example is returning the constructor as it is since the resturn type is void
function sealed(name) {
    return function (target) {
        console.log("Sealing the constructor." + name);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}
exports.sealed = sealed;
//aN EXAMPKE for class deciorator factory sealing its constructor
//this example is returning the mutated constructor 
function logger(target) {
    var newConstructor = function () {
        console.log("creating new instance.");
        console.log(target);
    };
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
exports.logger = logger;
//below is an example of method and access decorators
function writable(isWritable) {
    return function (target, propertyKey, descriptor) {
        console.log("Setting " + propertyKey + ". ");
        descriptor.writable = isWritable;
    };
}
exports.writable = writable;
