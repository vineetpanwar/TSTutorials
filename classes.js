"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var decorator_1 = require("./decorator");
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.addToSchedule = function () {
        console.log('Employee added to schedule');
    };
    Employee.prototype.logTitle = function () {
        console.log("Employee has the title " + this.title);
    };
    return Employee;
}());
exports.Employee = Employee;
var Researcher = /** @class */ (function () {
    function Researcher() {
    }
    Researcher.prototype.doResearch = function (topic) {
        console.log("Doing research on " + topic + ".");
    };
    return Researcher;
}());
exports.Researcher = Researcher;
// export const CLASS_INFO = Symbol();
//An example of inheriting from different sub classes using mixin
//an exmample for using class decorator and sealing its contructor 
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    // [CLASS_INFO]():void{
    //     console.log('this class represents university liberarian')
    // }
    //overwriting the definition of instanceOf
    // static [Symbol.hasInstance](obj: Object){
    //     return obj.hasOwnProperty('name') && obj.hasOwnProperty('assistCustomer')
    // }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + 'is assisting' + custName);
    };
    UniversityLibrarian.prototype.teachCommunity = function () {
        console.log('Teaching Community');
    };
    UniversityLibrarian.prototype.addToSchedule = function () { };
    UniversityLibrarian.prototype.logTitle = function () { };
    UniversityLibrarian.prototype.doResearch = function (topic) { };
    __decorate([
        decorator_1.writable(true)
    ], UniversityLibrarian.prototype, "teachCommunity");
    UniversityLibrarian = __decorate([
        decorator_1.logger,
        decorator_1.sealed('University')
    ], UniversityLibrarian);
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new Reference Item');
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in the year: " + this.year + ".");
        console.log("Department: " + ReferenceItem.department);
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (publisher) {
            this._publisher = publisher;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.department = 'Research';
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(newTitle, newYear, edition) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: " + this.edition + " (" + this.year + ")");
    };
    Encyclopedia.prototype.printCitation = function () {
        console.log(this.title + " - " + this.year);
    };
    Encyclopedia = __decorate([
        decorator_1.logger
    ], Encyclopedia);
    return Encyclopedia;
}(ReferenceItem));
exports.Encyclopedia = Encyclopedia;
